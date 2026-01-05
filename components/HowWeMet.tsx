'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { weddingConfig } from '@/config/wedding'
import { formatDate } from '@/lib/utils'

export default function HowWeMet() {
  const weddingDate = formatDate(weddingConfig.date.weddingDate)
  
  return (
    <>
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-wedding-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-wedding-darkTeal mb-4">
            Как эти двое встретились?
          </h2>
          <div className="w-24 h-1 bg-wedding-sage mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="relative z-10"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: -3, y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-wedding-sage/20 to-wedding-darkTeal/20 z-10"></div>
              <Image
                src="/child-bride.jpg"
                alt="Детская фотография невесты"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-wedding-sage/30 rounded-full blur-2xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100, delay: 0.2 }}
            className="relative z-10"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3, y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-wedding-darkTeal/20 to-wedding-sage/20 z-10"></div>
              <Image
                src="/child-groom.jpg"
                alt="Детская фотография жениха"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-wedding-darkTeal/30 rounded-full blur-2xl"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-lg p-6 sm:p-8 md:p-12 shadow-lg border-l-4 border-wedding-sage">
            <p className="text-base sm:text-lg md:text-xl text-wedding-darkTeal/80 leading-relaxed font-serif italic mb-4">
              Два маленьких сердца, которые однажды встретятся и создадут одну большую историю любви...
            </p>
            <p className="text-sm sm:text-base text-wedding-darkTeal/60 leading-relaxed">
              Судьба свела их вместе, и теперь они готовы начать новую главу своей жизни, полную счастья, любви и взаимопонимания.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-2">
            <div className="h-px w-12 bg-wedding-sage"></div>
            <span className="text-2xl text-wedding-sage font-serif">♥</span>
            <div className="h-px w-12 bg-wedding-sage"></div>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="relative py-16 px-4 bg-gradient-to-b from-wedding-cream to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-serif text-wedding-darkTeal/80 italic px-2">
            Об этом вы узнаете {weddingDate.toLowerCase()}
          </p>
        </motion.div>
      </div>
    </section>
    </>
  )
}

