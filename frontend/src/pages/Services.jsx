import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { MdConstruction, MdWaterDrop, MdEngineering } from 'react-icons/md'
import { FaRoad, FaBuilding, FaWater } from 'react-icons/fa'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/home/CTASection'

const services = [
  {
    icon: FaWater,
    title: 'Jal Jeevan Mission (JJM)',
    desc: 'We are an authorised contractor under the Jal Jeevan Mission — the Government of India\'s flagship programme to provide Functional Household Tap Connections (FHTC) to every rural household. We execute end-to-end water supply schemes across Uttar Pradesh.',
    features: ['FHTC Connections', 'Village Water Schemes', 'Multi-Village Schemes', 'Source Development', 'Quality Testing', 'O&M Support'],
    color: 'blue',
  },
  {
    icon: MdWaterDrop,
    title: 'CWR — Clear Water Reservoir',
    desc: 'We design and construct Clear Water Reservoirs (CWR) as per UP Jal Nigam and UPJN specifications. Our RCC structures ensure safe storage of treated water before distribution to households.',
    features: ['RCC CWR Construction', 'Inlet/Outlet Chambers', 'Chlorination Facilities', 'Overflow & Drain Systems', 'Fencing & Site Work', 'Capacity: 10KL–5 Lakh Litres'],
    color: 'cyan',
  },
  {
    icon: MdEngineering,
    title: 'OHT — Overhead Tank',
    desc: 'Construction of Overhead Tanks (OHT) with RCC staging and container as per IS codes and government specifications. We ensure elevated water storage for gravity-fed distribution to villages and towns.',
    features: ['RCC Staging & Container', 'Capacity: 25KL–5 Lakh Litres', 'Inlet/Outlet Pipework', 'Level Indicators', 'Lightning Protection', 'Access Ladder & Railing'],
    color: 'gold',
  },
  {
    icon: MdConstruction,
    title: 'Pipeline Networks',
    desc: 'Complete water supply pipeline laying including transmission mains, distribution mains, and service connections. We work with DI, HDPE, and uPVC pipes as per project specifications.',
    features: ['Transmission Mains', 'Distribution Mains', 'Service Connections', 'Valve & Air Valve Chambers', 'River/Road Crossings', 'Pressure Testing'],
    color: 'green',
  },
  {
    icon: FaRoad,
    title: 'Road Projects',
    desc: 'Government road construction and maintenance under PWD, PMGSY, and NHAI schemes. We build durable rural and urban roads, ensuring connectivity for communities across Uttar Pradesh.',
    features: ['PMGSY Rural Roads', 'PWD State Highways', 'Urban Road Widening', 'Culverts & Drains', 'Road Marking & Signage', 'Bituminous Surfacing'],
    color: 'orange',
  },
  {
    icon: FaBuilding,
    title: 'Civil Infrastructure',
    desc: 'Government civil construction works including pump houses, intake structures, water treatment plants, and public utility buildings as per departmental specifications.',
    features: ['Pump House Construction', 'Intake Structures', 'Treatment Plant Civil Works', 'Boundary Walls & Fencing', 'Staff Quarters', 'Public Utility Buildings'],
    color: 'red',
  },
]

const colorMap = {
  blue:  { border: 'border-blue-500/30',  bg: 'bg-blue-500/10',  text: 'text-blue-400',  badge: 'bg-blue-500/10 text-blue-400 border-blue-500/30' },
  cyan:  { border: 'border-cyan-500/30',  bg: 'bg-cyan-500/10',  text: 'text-cyan-400',  badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' },
  gold:  { border: 'border-gold-500/30',  bg: 'bg-gold-500/10',  text: 'text-gold-500',  badge: 'bg-gold-500/10 text-gold-400 border-gold-500/30' },
  green: { border: 'border-green-500/30', bg: 'bg-green-500/10', text: 'text-green-400', badge: 'bg-green-500/10 text-green-400 border-green-500/30' },
  orange:{ border: 'border-orange-500/30',bg: 'bg-orange-500/10',text: 'text-orange-400',badge: 'bg-orange-500/10 text-orange-400 border-orange-500/30' },
  red:   { border: 'border-red-500/30',   bg: 'bg-red-500/10',   text: 'text-red-400',   badge: 'bg-red-500/10 text-red-400 border-red-500/30' },
}

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Prime Infratech</title>
        <meta name="description" content="Prime Infratech — government infrastructure contractor for Jal Jeevan Mission, CWR, OHT, pipeline networks, and road projects in Uttar Pradesh." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-gold-500/40 text-gold-500 text-xs font-semibold tracking-widest uppercase mb-4 bg-gold-500/5">
              What We Do
            </span>
            <h1 className="text-5xl md:text-6xl font-bold font-montserrat text-white mb-6">
              Our <span className="gold-text">Services</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Specialised government infrastructure contractor for Jal Jeevan Mission, water supply schemes, and road construction across Uttar Pradesh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map(({ icon: Icon, title, desc, features, color }, i) => {
              const c = colorMap[color]
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`glass-card p-8 border ${c.border} grid md:grid-cols-2 gap-8 items-center`}
                >
                  <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                    <div className={`w-16 h-16 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center mb-5`}>
                      <Icon size={30} className={c.text} />
                    </div>
                    <h2 className="text-white font-bold font-montserrat text-3xl mb-4">{title}</h2>
                    <p className="text-gray-400 leading-relaxed mb-6">{desc}</p>
                    <Link to="/contact" className="btn-gold inline-flex items-center gap-2">
                      Get Quote <FiArrowRight size={16} />
                    </Link>
                  </div>
                  <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="grid grid-cols-2 gap-3">
                      {features.map((f) => (
                        <div key={f} className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${c.badge} text-sm`}>
                          <FiCheck size={14} className={c.text} />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
