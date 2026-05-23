import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiDroplet } from 'react-icons/fi'
import { MdConstruction, MdWaterDrop, MdEngineering } from 'react-icons/md'
import { FaRoad, FaBuilding, FaWater } from 'react-icons/fa'
import SectionHeader from '../SectionHeader'

const services = [
  {
    icon: FaWater,
    title: 'Jal Jeevan Mission',
    desc: 'Authorised contractor for JJM projects — delivering safe drinking water to every rural household through CWR, OHT, and pipeline networks.',
    color: 'from-blue-500/20 to-blue-600/5',
    border: 'border-blue-500/30',
  },
  {
    icon: MdWaterDrop,
    title: 'CWR Construction',
    desc: 'Design and construction of Clear Water Reservoirs (CWR) as per UP Jal Nigam specifications, ensuring clean water storage and distribution.',
    color: 'from-cyan-500/20 to-cyan-600/5',
    border: 'border-cyan-500/30',
  },
  {
    icon: MdEngineering,
    title: 'OHT Construction',
    desc: 'Overhead Tank (OHT) construction with RCC structures, ensuring reliable elevated water storage for villages and towns.',
    color: 'from-gold-500/20 to-gold-600/5',
    border: 'border-gold-500/30',
  },
  {
    icon: FaRoad,
    title: 'Road Projects',
    desc: 'Government road construction and maintenance — highways, rural roads, and urban roads built to NHAI and PWD standards.',
    color: 'from-orange-500/20 to-orange-600/5',
    border: 'border-orange-500/30',
  },
  {
    icon: MdConstruction,
    title: 'Pipeline Networks',
    desc: 'End-to-end water supply pipeline laying, including distribution mains, service connections, and valve chambers.',
    color: 'from-green-500/20 to-green-600/5',
    border: 'border-green-500/30',
  },
  {
    icon: FaBuilding,
    title: 'Civil Infrastructure',
    desc: 'Government civil works including pump houses, intake structures, treatment plants, and public utility buildings.',
    color: 'from-red-500/20 to-red-600/5',
    border: 'border-red-500/30',
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="What We Do"
          title="Our Core"
          highlight="Services"
          subtitle="Prime Infratech is a trusted government infrastructure contractor specialising in Jal Jeevan Mission — CWR, OHT & Pipeline Networks, Road Construction (PMGSY / PWD), Water Supply Schemes, and Waste Management across Uttar Pradesh."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, color, border }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`glass-card p-6 border ${border} bg-gradient-to-br ${color} group cursor-pointer`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} border ${border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <Icon size={26} className="text-white" />
              </div>
              <h3 className="text-white font-semibold font-montserrat text-xl mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-gold-500 text-sm font-medium hover:gap-3 transition-all"
              >
                Learn More <FiArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-outline-gold inline-flex items-center gap-2">
            View All Services <FiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
