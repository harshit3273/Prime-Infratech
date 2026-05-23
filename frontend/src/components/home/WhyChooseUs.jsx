import { motion } from 'framer-motion'
import { FiClock, FiStar, FiUsers, FiTool } from 'react-icons/fi'
import SectionHeader from '../SectionHeader'

const reasons = [
  {
    icon: FiClock,
    title: 'On-Time Delivery',
    desc: 'We respect your time. Our projects are delivered on schedule without compromising quality.',
  },
  {
    icon: FiStar,
    title: 'Premium Materials',
    desc: 'Only the finest materials sourced from trusted suppliers for lasting durability and aesthetics.',
  },
  {
    icon: FiUsers,
    title: 'Expert Team',
    desc: 'A team of skilled professionals including engineers, surveyors, and site supervisors.',
  },
  {
    icon: FiTool,
    title: 'Modern Technology',
    desc: 'Latest construction technology and equipment for precision, efficiency, and safety.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Us"
          title="Why Choose"
          highlight="Prime Infratech"
          subtitle="We don't just build structures — we build trust, relationships, and legacies that stand the test of time."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 group hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <Icon size={22} className="text-gold-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold font-montserrat mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
