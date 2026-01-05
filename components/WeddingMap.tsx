'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { weddingConfig } from '@/config/wedding'

const MapComponent = dynamic(
  () => import('./MapComponent'),
  {
    ssr: false,
    loading: () => (
      <div className="h-[500px] w-full bg-wedding-cream rounded-lg flex items-center justify-center">
        <p className="text-wedding-darkTeal/50">Загрузка карты...</p>
      </div>
    ),
  }
)

export default function WeddingMap() {
  const weddingAddress = weddingConfig.venue.address
  const registrationAddress = weddingConfig.registrationVenue.address

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-wedding-cream">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-wedding-darkTeal mb-4">
            Как нас найти
          </h2>
        </motion.div>

        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-serif text-wedding-darkTeal mb-4 text-center">
              Роспись
            </h3>
            <p className="text-base text-wedding-darkTeal/70 mb-6 text-center">{registrationAddress}</p>
            <div className="rounded-lg overflow-hidden border border-wedding-lightSage/30 mb-6">
              <MapComponent
                coordinates={weddingConfig.registrationVenue.coordinates}
                address={registrationAddress}
                venueName={weddingConfig.registrationVenue.name}
                yandexMapsUrl="https://yandex.ru/maps/2/saint-petersburg/house/angliyskaya_naberezhnaya_28/Z0kYdA5jQUIAQFtjfXVycnVlZQ==/?ll=30.293878%2C59.933961&z=17"
              />
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href={`https://yandex.ru/maps/?text=${encodeURIComponent(registrationAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-wedding-darkTeal text-white rounded-lg font-light hover:bg-wedding-darkTeal/90 transition-colors text-xs sm:text-sm"
              >
                Построить маршрут (Яндекс.Карты)
              </a>
              <a
                href={`https://2gis.ru/search/${encodeURIComponent(registrationAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white border border-wedding-darkTeal text-wedding-darkTeal rounded-lg font-light hover:bg-wedding-cream transition-colors text-xs sm:text-sm"
              >
                Открыть в 2ГИС
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-serif text-wedding-darkTeal mb-4 text-center">
              Свадьба
            </h3>
            <p className="text-base text-wedding-darkTeal/70 mb-6 text-center">{weddingAddress}</p>
            <div className="rounded-lg overflow-hidden border border-wedding-lightSage/30 mb-6">
              <MapComponent
                coordinates={weddingConfig.venue.coordinates}
                address={weddingAddress}
                venueName={weddingConfig.venue.name}
                yandexMapsUrl="https://yandex.ru/maps/2/saint-petersburg/house/ulitsa_lomonosova_102/Z0kYdA5jS0EOQFhqfXx2dHhrbA==/?ll=30.293249%2C60.075488&z=17"
              />
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href={`https://yandex.ru/maps/?text=${encodeURIComponent(weddingAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-wedding-darkTeal text-white rounded-lg font-light hover:bg-wedding-darkTeal/90 transition-colors text-xs sm:text-sm"
              >
                Построить маршрут (Яндекс.Карты)
              </a>
              <a
                href={`https://2gis.ru/search/${encodeURIComponent(weddingAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white border border-wedding-darkTeal text-wedding-darkTeal rounded-lg font-light hover:bg-wedding-cream transition-colors text-xs sm:text-sm"
              >
                Открыть в 2ГИС
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
