import { motion } from 'framer-motion'

export default function SectionHeader({ badge, title, highlight, subtitle, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${center ? 'text-center' : ''}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full border border-gold-500/40 text-gold-500 text-xs font-semibold tracking-widest uppercase mb-4 bg-gold-500/5">
          {badge}
        </span>
      )}
      <h2 className="section-title text-white">
        {title}{' '}
        {highlight && <span className="gold-text">{highlight}</span>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.div>
  )
}
