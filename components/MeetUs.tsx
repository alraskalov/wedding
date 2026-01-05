'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const photos = [
  {
    src: '/couple-1.jpg',
    alt: 'Фотография пары',
  },
  {
    src: '/couple-2.jpg',
    alt: 'Фотография пары',
  },
  {
    src: '/couple-3.jpg',
    alt: 'Фотография пары',
  },
  {
    src: '/couple-4.jpg',
    alt: 'Фотография пары',
  },
]

export default function MeetUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-wedding-darkTeal mb-4">
            Для тех, кто кого-то из нас видит впервые
          </h2>
          <div className="w-24 h-1 bg-wedding-sage mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

