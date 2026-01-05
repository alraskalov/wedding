'use client'

import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    ymaps: any
  }
}

interface MapComponentProps {
  coordinates: {
    lat: number
    lng: number
  }
  address: string
  venueName: string
  yandexMapsUrl?: string
}

export default function MapComponent({ coordinates, address, venueName, yandexMapsUrl }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const { lat: defaultLat, lng: defaultLng } = coordinates
  const [coords, setCoords] = useState<[number, number]>([defaultLat, defaultLng])

  useEffect(() => {
    if (!mapRef.current) return

    let mapInstance: any = null

    const initMap = () => {
      if (!mapRef.current || !window.ymaps) return

      window.ymaps.ready(() => {
        if (!mapRef.current) return

        const mapCoords: [number, number] = [defaultLat, defaultLng]
        setCoords(mapCoords)
        
        mapInstance = new window.ymaps.Map(mapRef.current, {
          center: mapCoords,
          zoom: 17,
          controls: ['zoomControl', 'fullscreenControl'],
        })

        const mapUrl = yandexMapsUrl || `https://yandex.ru/maps/?text=${encodeURIComponent(address)}&ll=${defaultLng}%2C${defaultLat}&z=17`
        
        const placemark = new window.ymaps.Placemark(
          mapCoords,
          {
            balloonContentHeader: `<strong>${venueName}</strong>`,
            balloonContentBody: address,
            balloonContentFooter: `<a href="${mapUrl}" target="_blank" style="color: #D4AF37; text-decoration: underline;">Открыть в Яндекс.Картах →</a>`,
          },
          {
            preset: 'islands#greenDotIcon',
          }
        )

        mapInstance.geoObjects.add(placemark)
        placemark.balloon.open()
      })
    }

    if (window.ymaps) {
      initMap()
    } else {
      const existingScript = document.querySelector('script[src*="api-maps.yandex.ru"]')
      
      if (!existingScript) {
        const script = document.createElement('script')
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU'
        script.async = true
        script.onload = initMap
        document.head.appendChild(script)
      } else {
        const checkYmaps = setInterval(() => {
          if (window.ymaps) {
            clearInterval(checkYmaps)
            initMap()
          }
        }, 100)
      }
    }

    return () => {
      if (mapInstance) {
        mapInstance.destroy()
      }
    }
  }, [defaultLat, defaultLng, address, venueName, yandexMapsUrl])

  return (
    <div
      ref={mapRef}
      style={{ height: '400px', width: '100%' }}
      className="rounded-2xl sm:h-[450px] md:h-[500px]"
    />
  )
}

