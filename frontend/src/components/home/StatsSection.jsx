import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiUsers, FiTrendingUp, FiCheckCircle } from 'react-icons/fi'

const stats = [
  { icon: FiCheckCircle, value: 10, suffix: '+', label: 'Projects Completed', color: 'text-gold-500' },
  { icon: FiUsers, value: 10, suffix: '+', label: 'Happy Clients', color: 'text-blue-400' },
  { icon: FiAward, value: 1, suffix: '+', label: 'Years Experience', color: 'text-purple-400' },
  { icon: FiTrendingUp, value: 1, suffix: 'Cr+', label: 'Worth Projects', color: 'text-green-400' },
]

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section ref={ref} className="py-16 bg-dark-900 border-y border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {stats.map(({ icon: Icon, value, suffix, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 mb-4 group-hover:border-gold-500/40 transition-colors ${color}`}>
                <Icon size={24} />
              </div>
              <div className="font-bold font-montserrat text-3xl sm:text-4xl text-white mb-1">
                {inView ? (
                  <CountUp end={value} duration={2.5} suffix={suffix} />
                ) : (
                  `0${suffix}`
                )}
              </div>
              <div className="text-gray-400 text-sm">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
