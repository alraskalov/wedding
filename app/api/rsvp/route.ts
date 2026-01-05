import { NextResponse } from 'next/server'
import { weddingConfig } from '@/config/wedding'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    if (!data.name || !data.attending) {
      return NextResponse.json(
        { error: 'Не все обязательные поля заполнены' },
        { status: 400 }
      )
    }

    // Формируем информацию о гостях
    const validGuests = (data.guests || []).filter((g: { name: string }) => g.name && g.name.trim())
    const guestsCount = 1 + validGuests.length
    const guestsNames = validGuests.map((g: { name: string }) => g.name).join(', ')
    const guestsInfo = validGuests.length > 0 
      ? `${data.name}, ${guestsNames}`
      : data.name

    if (weddingConfig.googleSheets.enabled && weddingConfig.googleSheets.webhookUrl) {
      try {
        const sheetsResponse = await fetch(weddingConfig.googleSheets.webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: guestsInfo,
            guests: guestsCount,
            attending: data.attending === 'yes' ? 'Да' : 'Нет',
            comments: data.comments || '',
            timestamp: new Date().toLocaleString('ru-RU'),
          }),
        })

        const responseText = await sheetsResponse.text()
        const contentType = sheetsResponse.headers.get('content-type') || ''

        if (sheetsResponse.ok && contentType.includes('application/json')) {
          try {
            const jsonResponse = JSON.parse(responseText)
            if (jsonResponse.success) {
              console.log('RSVP сохранен в Google Sheets:', {
                name: guestsInfo,
                guests: guestsCount,
                attending: data.attending,
              })
            } else {
              console.error('Ошибка при сохранении в Google Sheets:', jsonResponse.error || 'Неизвестная ошибка')
            }
          } catch {
            console.error('Ошибка: Google Sheets вернул не JSON ответ')
          }
        } else {
          if (responseText.includes('Нет доступа') || responseText.includes('Доступ закрыт')) {
            console.error('ОШИБКА ДОСТУПА: Вебхук Google Apps Script не настроен для публичного доступа.')
            console.error('РЕШЕНИЕ: Перейдите в Apps Script → Развернуть → Управление развертываниями')
            console.error('→ Выберите развертывание → Изменить → У кого есть доступ: "Все" → Сохранить')
          } else {
            console.error('Ошибка при сохранении в Google Sheets. Статус:', sheetsResponse.status)
            console.error('Ответ:', responseText.substring(0, 200))
          }
        }
      } catch (sheetsError) {
        console.error('Ошибка при отправке в Google Sheets:', sheetsError)
      }
    }

    console.log('RSVP Submission:', {
      name: guestsInfo,
      mainName: data.name,
      additionalGuests: validGuests.map((g: { name: string }) => g.name),
      guests: guestsCount,
      attending: data.attending,
      comments: data.comments || '',
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { message: 'RSVP успешно отправлен', success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing RSVP:', error)
    return NextResponse.json(
      { error: 'Ошибка при обработке запроса' },
      { status: 500 }
    )
  }
}


