'use client'

import { motion } from 'framer-motion'
import { weddingConfig } from '@/config/wedding'
import { formatDate } from '@/lib/utils'

export default function Hero() {
  const weddingDate = formatDate(weddingConfig.date.weddingDate)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="relative text-center px-4 max-w-4xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-wedding-darkTeal mb-6 tracking-tight">
            {weddingConfig.bride.name}
            <span className="mx-2 sm:mx-4 text-3xl sm:text-4xl md:text-6xl">&</span>
            {weddingConfig.groom.name}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-serif text-wedding-darkTeal tracking-wide px-2">
            {weddingDate.toUpperCase()} • {weddingConfig.venue.address.split(',')[0].toUpperCase()}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <div className="inline-block">
            <svg
              className="w-6 h-6 text-wedding-sage animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
