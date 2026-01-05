'use client'

import { motion } from 'framer-motion'
import { weddingConfig } from '@/config/wedding'
import { formatDate, formatTime } from '@/lib/utils'

export default function EventInfo() {
  const weddingDate = formatDate(weddingConfig.date.weddingDate)
  const registrationDate = formatDate(weddingConfig.date.registrationDate)

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-wedding-darkTeal mb-4">
            Детали мероприятий
          </h2>
        </motion.div>

        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-serif text-wedding-darkTeal mb-8 text-center">
              Роспись
            </h3>
            <div className="space-y-4">
              <div className="bg-wedding-cream rounded-lg p-4 sm:p-6 border-l-4 border-wedding-sage">
                <p className="text-base sm:text-lg font-serif text-wedding-darkTeal mb-2">{registrationDate}</p>
                <p className="text-sm sm:text-base text-wedding-darkTeal/70 mb-2">
                  {formatTime(weddingConfig.date.registrationTime)}
                </p>
                <p className="text-sm sm:text-base text-wedding-darkTeal/70 mb-2">
                Санкт-Петербург, Английская набережная, д. 28
                </p>
                <p className="text-sm sm:text-base text-wedding-darkTeal/70 italic">
                  После росписи планируется ужин с родственниками
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-serif text-wedding-darkTeal mb-8 text-center">
              Свадьба
            </h3>
            <div className="space-y-4">
              <div className="bg-wedding-cream rounded-lg p-4 sm:p-6 border-l-4 border-wedding-sage">
                <p className="text-base sm:text-lg font-serif text-wedding-darkTeal mb-2">{weddingDate}</p>
                <p className="text-sm sm:text-base text-wedding-darkTeal/70 mb-2">
                  Время уточняется
                </p>
                <p className="text-sm sm:text-base text-wedding-darkTeal/70">
                  {weddingConfig.venue.address}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
