'use client'

import { motion } from 'framer-motion'

const colorPalette = [
  { name: 'Розовый', color: 'bg-wedding-pink', hex: '#F8E8E8' },
  { name: 'Розовый', color: 'bg-wedding-rose', hex: '#E8B4B8' },
  { name: 'Бланш', color: 'bg-wedding-blush', hex: '#F5D7DA' },
  { name: 'Кремовый', color: 'bg-wedding-cream', hex: '#FAF9F6' },
  { name: 'Мятный', color: 'bg-wedding-mint', hex: '#B8E6D3' },
  { name: 'Светло-зеленый', color: 'bg-wedding-lightGreen', hex: '#C8E6C9' },
  { name: 'Светло-голубой', color: 'bg-wedding-lightBlue', hex: '#B3E5FC' },
  { name: 'Лавандовый', color: 'bg-wedding-lavender', hex: '#E1BEE7' },
  { name: 'Бледно-желтый', color: 'bg-wedding-paleYellow', hex: '#FFF9C4' },
]

export default function DressCode() {
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
            Дресс-код
          </h2>
          <p className="text-base text-wedding-darkTeal/70 max-w-2xl mx-auto">
            Мы будем рады видеть вас в нарядах пастельных тонов, но если по каким-то причинам это не получится, мы в любом случае будем рады видеть вас
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg p-4 sm:p-6 md:p-8 border border-wedding-lightSage/30"
        >
          <h3 className="text-xl font-serif text-wedding-darkTeal mb-6 text-center">
            Наша цветовая палитра
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3 sm:gap-4">
            {colorPalette.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-center"
              >
                <div
                  className={`w-full aspect-square ${item.color} rounded border border-wedding-lightSage/20 mb-2`}
                  style={{ backgroundColor: item.hex }}
                ></div>
                <p className="text-xs text-wedding-darkTeal/60">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
