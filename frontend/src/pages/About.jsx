import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { FiTarget, FiEye, FiUsers } from 'react-icons/fi'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/home/CTASection'

const achievements = [
  { icon: FiUsers, value: '10+', label: 'Happy Clients' },
  { icon: FiTarget, value: '10+', label: 'Projects Done' },
  { icon: FiEye, value: '1+', label: 'Years Experience' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Prime Infratech</title>
        <meta name="description" content="Learn about Prime Infratech - our story, vision, mission, and the expert team behind our premium construction services." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-gold-500/40 text-gold-500 text-xs font-semibold tracking-widest uppercase mb-4 bg-gold-500/5">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold font-montserrat text-white mb-6">
              Our <span className="gold-text">Story</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Founded with a vision to serve communities through quality government infrastructure, Prime Infratech has grown into a trusted contractor for Jal Jeevan Mission and road projects across Uttar Pradesh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">Our Journey</span>
              <h2 className="text-4xl font-bold font-montserrat text-white mt-3 mb-6">
                Building <span className="gold-text">Excellence</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Prime Infratech was established with a clear mission — to deliver government infrastructure projects with the highest standards of quality, transparency, and timely execution.
                </p>
                <p>
                  We specialise in Jal Jeevan Mission (JJM) projects including CWR, OHT, and pipeline networks, as well as road construction under PMGSY and PWD schemes across Azamgarh and surrounding districts.
                </p>
                <p>
                  With a dedicated team of engineers and site professionals, we are committed to building infrastructure that serves communities and stands the test of time.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-3 gap-4"
            >
              {achievements.map(({ icon: Icon, value, label }) => (
                <div key={label} className="glass-card p-6 text-center hover:border-gold-500/30 transition-colors">
                  <Icon size={28} className="text-gold-500 mx-auto mb-3" />
                  <div className="gold-text font-bold font-montserrat text-3xl">{value}</div>
                  <div className="text-gray-400 text-sm mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Purpose" title="Vision &" highlight="Mission" />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: FiEye,
                title: 'Our Vision',
                text: 'To be the most trusted government infrastructure contractor in Uttar Pradesh — delivering water supply schemes and road projects that transform rural communities and improve quality of life.',
                color: 'border-gold-500/30 bg-gold-500/5',
              },
              {
                icon: FiTarget,
                title: 'Our Mission',
                text: 'To execute Jal Jeevan Mission, CWR, OHT, pipeline, and road construction projects with precision, quality materials, and full compliance with government specifications — on time and within budget.',
                color: 'border-blue-500/30 bg-blue-500/5',
              },
            ].map(({ icon: Icon, title, text, color }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`glass-card p-8 border ${color}`}
              >
                <Icon size={36} className="text-gold-500 mb-4" />
                <h3 className="text-white font-bold font-montserrat text-2xl mb-4">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Message */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Leadership" title="Director's" highlight="Message" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border border-gold-500/20 relative"
          >
            <div className="text-gold-500/20 text-9xl font-serif absolute top-4 left-6 leading-none select-none">"</div>
            <div className="relative">
              <p className="text-gray-300 text-lg leading-relaxed italic mb-8">
                At Prime Infratech, we believe that infrastructure is the foundation of progress. Every CWR we build, every OHT we erect, every road we lay — it is a step towards a better life for the communities we serve. Our commitment is not just to complete projects, but to deliver work that stands with integrity, quality, and pride for generations to come.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center text-dark-900 font-bold text-xl">
                  HG
                </div>
                <div>
                  <div className="text-white font-bold font-montserrat text-lg">Himanshu Gaur</div>
                  <div className="text-gold-500 text-sm">Managing Director, Prime Infratech</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
