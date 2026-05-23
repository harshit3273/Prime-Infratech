import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { FiX, FiZoomIn } from 'react-icons/fi'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/home/CTASection'

const categories = ['All', 'Jal Jeevan Mission', 'CWR', 'OHT', 'Pipeline', 'Road Projects']

const projects = [
  {
    id: 1,
    title: 'Jal Jeevan Mission — Village Water Scheme',
    category: 'Jal Jeevan Mission',
    location: 'Raidopur, Azamgarh',
    year: '2024',
    area: '5 Villages',
    status: 'Completed',
    desc: 'End-to-end JJM water supply scheme covering 5 villages — including source development, CWR, OHT, pipeline network, and FHTC connections to 1,200+ households.',
    img: '/JJ.PNG',
  },
  {
    id: 2,
    title: 'Clear Water Reservoir (CWR) — 1 Lakh Litre',
    category: 'CWR',
    location: 'Azamgarh, UP',
    year: '2024',
    area: '1,00,000 Litres',
    status: 'Completed',
    desc: 'Construction of RCC Clear Water Reservoir with capacity of 1 lakh litres as per UP Jal Nigam specifications, including inlet/outlet chambers, chlorination unit, and boundary wall.',
    img: '/cwr.png.jpg',
  },
  {
    id: 3,
    title: 'Overhead Tank (OHT) — 18,000 Litre',
    category: 'OHT',
    location: 'Raidopur, Azamgarh',
    year: '2024',
    area: '18,000 Litres',
    status: 'Completed',
    desc: 'RCC Overhead Tank construction with 18,000 litre capacity on RCC staging, complete with inlet/outlet pipework, level indicator, access ladder, and lightning protection.',
    img: '/OHT.png.webp',
  },
  {
    id: 4,
    title: 'Water Supply Pipeline Network',
    category: 'Pipeline',
    location: 'Azamgarh, UP',
    year: '2023',
    area: '18 km Network',
    status: 'Completed',
    desc: 'Laying of HDPE and DI water supply pipeline network of 18 km including transmission main, distribution mains, valve chambers, and service connections to households.',
    img: '/pipeline_laying.png.jpg',
  },
  {
    id: 5,
    title: 'PMGSY Rural Road Construction',
    category: 'Road Projects',
    location: 'Raidopur, Azamgarh',
    year: '2024',
    area: '8 km Stretch',
    status: 'Completed',
    desc: 'Construction of PMGSY rural road connecting 3 villages — including earthwork, WBM base, bituminous surfacing, culverts, and side drains as per MORD specifications.',
    img: '/PMGSY.png',
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Projects | Prime Infratech</title>
        <meta name="description" content="Explore Prime Infratech's government infrastructure projects — Jal Jeevan Mission, CWR, OHT, pipeline networks, and road construction in Uttar Pradesh." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-gold-500/40 text-gold-500 text-xs font-semibold tracking-widest uppercase mb-4 bg-gold-500/5">
              Our Portfolio
            </span>
            <h1 className="text-5xl md:text-6xl font-bold font-montserrat text-white mb-6">
              Our <span className="gold-text">Projects</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Government infrastructure projects executed across Azamgarh — Jal Jeevan Mission water schemes, CWR, OHT, pipelines, and road construction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gold-gradient text-dark-900 shadow-lg shadow-gold-500/20'
                    : 'border border-white/10 text-gray-400 hover:border-gold-500/40 hover:text-gold-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="glass-card overflow-hidden hover:border-gold-500/30 transition-all duration-300">
                    <div className="h-52 relative overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.title}
                        className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${
                          project.img === '/OHT.png.webp'
                            ? 'object-contain object-center bg-dark-950'
                            : 'object-cover'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-dark-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center">
                          <FiZoomIn size={20} className="text-dark-900" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="text-gold-500 text-xs font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-white font-semibold font-montserrat text-lg mt-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark-950/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card max-w-2xl w-full border border-gold-500/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`relative overflow-hidden bg-dark-950 ${
                selectedProject.img === '/OHT.png.webp' ? 'h-80' : 'h-56'
              }`}>
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className={`w-full h-full ${
                    selectedProject.img === '/OHT.png.webp'
                      ? 'object-contain object-center'
                      : 'object-cover'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-dark-900/80 flex items-center justify-center text-white hover:text-gold-500 transition-colors"
                >
                  <FiX size={16} />
                </button>
              </div>
              <div className="p-8">
                <span className="text-gold-500 text-xs font-semibold uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h2 className="text-white font-bold font-montserrat text-2xl mt-2 mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-400 leading-relaxed">{selectedProject.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  )
}
