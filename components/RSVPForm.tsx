'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { weddingConfig } from '@/config/wedding'

interface RSVPFormData {
  name: string
  guests: Array<{ name: string }>
  comments: string
  attending: 'yes' | 'no'
}

export default function RSVPForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [urlName, setUrlName] = useState<string | null>(null)
  const [urlGuests, setUrlGuests] = useState<string | null>(null)
  const [personalGreeting, setPersonalGreeting] = useState('')
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
    control,
  } = useForm<RSVPFormData>({
    defaultValues: {
      name: '',
      guests: [],
    },
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const name = params.get('name')
      const guests = params.get('guests')
      
      setUrlName(name)
      setUrlGuests(guests)
      
      if (name) {
        setPersonalGreeting(`, ${decodeURIComponent(name)}`)
        setValue('name', decodeURIComponent(name))
      }
      
      if (guests) {
        const guestsList = guests.split(',').map(g => ({ name: decodeURIComponent(g.trim()) }))
        setValue('guests', guestsList)
      }
    }
  }, [setValue])

  const guests = watch('guests') || []

  const onSubmit = async (data: RSVPFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        alert('Произошла ошибка при отправке. Пожалуйста, попробуйте ещё раз.')
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error)
      alert('Произошла ошибка при отправке. Пожалуйста, попробуйте ещё раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-wedding-darkTeal mb-4">
            Подтвердите присутствие{personalGreeting}
          </h2>
          <p className="text-base text-wedding-darkTeal/70">
            Пожалуйста, сообщите нам, сможете ли вы разделить с нами этот особенный день
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-wedding-cream rounded-lg p-8 border border-wedding-lightSage/30 text-center"
          >
            <div className="w-12 h-12 bg-wedding-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-wedding-sage"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-serif text-wedding-darkTeal mb-2">
              Спасибо за ответ!
            </h3>
            <p className="text-sm text-wedding-darkTeal/70">
              Мы получили ваше подтверждение и с нетерпением ждем встречи с вами!
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-wedding-cream rounded-lg p-4 sm:p-6 md:p-8 lg:p-12 border border-wedding-lightSage/30"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-light text-wedding-darkTeal mb-3">
                  Вы сможете присутствовать? <span className="text-wedding-sage">*</span>
                </label>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="yes"
                      {...register('attending', { required: 'Пожалуйста, выберите вариант' })}
                      className="mr-2 text-wedding-sage"
                    />
                    <span className="text-sm text-wedding-darkTeal">Да, с удовольствием!</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="no"
                      {...register('attending', { required: 'Пожалуйста, выберите вариант' })}
                      className="mr-2 text-wedding-sage"
                    />
                    <span className="text-sm text-wedding-darkTeal">К сожалению, нет</span>
                  </label>
                </div>
                {errors.attending && (
                  <p className="text-wedding-sage text-xs mt-1">{errors.attending.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-light text-wedding-darkTeal mb-2">
                  Ваше имя <span className="text-wedding-sage">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', {
                    required: 'Пожалуйста, введите ваше имя',
                    minLength: {
                      value: 2,
                      message: 'Имя должно содержать минимум 2 символа',
                    },
                  })}
                  className="w-full px-4 py-3 border border-wedding-lightSage/30 rounded-lg focus:ring-1 focus:ring-wedding-sage focus:border-wedding-sage outline-none transition bg-white text-wedding-darkTeal"
                  placeholder="Иван Иванов"
                />
                {errors.name && (
                  <p className="text-wedding-sage text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="block text-sm font-light text-wedding-darkTeal">
                    Дополнительные гости
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      const currentGuests = watch('guests') || []
                      setValue('guests', [...currentGuests, { name: '' }])
                    }}
                    className="text-sm text-wedding-sage hover:text-wedding-darkTeal transition-colors"
                  >
                    + Добавить гостя
                  </button>
                </div>

                {guests.map((guest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-3 flex gap-2 items-start"
                  >
                    <input
                      type="text"
                      {...register(`guests.${index}.name` as const, {
                        minLength: {
                          value: 2,
                          message: 'Имя должно содержать минимум 2 символа',
                        },
                      })}
                      className="flex-1 px-4 py-3 border border-wedding-lightSage/30 rounded-lg focus:ring-1 focus:ring-wedding-sage focus:border-wedding-sage outline-none transition bg-white text-wedding-darkTeal"
                      placeholder={`Имя гостя ${index + 1}`}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const currentGuests = watch('guests') || []
                        setValue('guests', currentGuests.filter((_, i) => i !== index))
                      }}
                      className="px-3 py-3 text-wedding-darkTeal/60 hover:text-wedding-sage transition-colors"
                      aria-label="Удалить гостя"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </motion.div>
                ))}

                {guests.length === 0 && (
                  <p className="text-xs text-wedding-darkTeal/50 italic">
                    Нажмите &quot;Добавить гостя&quot;, если планируете прийти не один
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="comments"
                  className="block text-sm font-light text-wedding-darkTeal mb-2"
                >
                  Комментарии или пожелания
                </label>
                <textarea
                  id="comments"
                  rows={4}
                  {...register('comments')}
                  className="w-full px-4 py-3 border border-wedding-lightSage/30 rounded-lg focus:ring-1 focus:ring-wedding-sage focus:border-wedding-sage outline-none transition resize-none bg-white text-wedding-darkTeal"
                  placeholder="Ваши пожелания или особые требования..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-wedding-darkTeal text-white py-4 rounded-lg font-light text-sm hover:bg-wedding-darkTeal/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить ответ'}
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  )
}
