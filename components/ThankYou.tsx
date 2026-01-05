'use client'

import { motion } from 'framer-motion'
import { weddingConfig } from '@/config/wedding'

export default function ThankYou() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-wedding-cream">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-wedding-darkTeal mb-6">
            Спасибо, что будете с нами!
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-wedding-darkTeal/70 mb-8 leading-relaxed px-2">
            Ваше присутствие сделает наш день еще более особенным и незабываемым.
            <br />
            Мы с нетерпением ждем встречи с вами!
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px w-12 bg-wedding-sage"></div>
            <span className="text-2xl text-wedding-sage font-serif">♥</span>
            <div className="h-px w-12 bg-wedding-sage"></div>
          </div>
          <p className="text-sm text-wedding-darkTeal/60">
            С любовью,<br />
            <span className="font-serif text-wedding-darkTeal text-base">
              {weddingConfig.bride.name} & {weddingConfig.groom.name}
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
