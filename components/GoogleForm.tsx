'use client'

import { motion } from 'framer-motion'

interface GoogleFormProps {
  formUrl: string
  title?: string
  description?: string
}

export default function GoogleForm({ 
  formUrl, 
  title = 'Подтвердите присутствие',
  description = 'Пожалуйста, сообщите нам, сможете ли вы разделить с нами этот особенный день'
}: GoogleFormProps) {
  const embedUrl = formUrl.includes('/viewform') 
    ? formUrl.replace('/viewform', '/viewform?embedded=true')
    : formUrl.includes('?') 
      ? `${formUrl}&embedded=true`
      : `${formUrl}?embedded=true`

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-wedding-darkTeal mb-4">
            {title}
          </h2>
          <p className="text-base text-wedding-darkTeal/70">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-wedding-cream rounded-lg p-4 sm:p-6 border border-wedding-lightSage/30 overflow-hidden"
        >
          <iframe
            src={embedUrl}
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full min-h-[600px] sm:min-h-[700px] md:min-h-[800px]"
            title="Google Form"
          >
            Загрузка формы...
          </iframe>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-wedding-darkTeal/60">
            Если форма не отображается,{' '}
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-wedding-sage hover:underline"
            >
              откройте её в новой вкладке
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

