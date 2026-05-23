import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import SectionHeader from '../SectionHeader'

const projects = [
  {
    id: 1,
    title: 'JJM Village Water Scheme',
    category: 'Jal Jeevan Mission',
    location: 'Raidopur, Azamgarh',
    year: '2024',
    img: '/JJ.PNG',
  },
  {
    id: 2,
    title: 'OHT — 18,000 Litre Tank',
    category: 'OHT Construction',
    location: 'Azamgarh, UP',
    year: '2024',
    img: '/OHT.png.webp',
  },
  {
    id: 3,
    title: 'PMGSY Rural Road',
    category: 'Road Projects',
    location: 'Raidopur, Azamgarh',
    year: '2024',
    img: '/PMGSY.png',
  },
  {
    id: 4,
    title: 'Water Pipeline Network',
    category: 'Pipeline',
    location: 'Azamgarh, UP',
    year: '2023',
    img: '/pipeline_laying.png.jpg',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Work"
          title="Featured"
          highlight="Projects"
          subtitle="Government infrastructure projects executed across Azamgarh — Jal Jeevan Mission, OHT, pipelines, and road construction."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(({ id, title, category, location, year, img }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 cursor-pointer"
            >
              {/* Project image */}
              <div className="h-64 relative overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${
                    img === '/OHT.png.webp'
                      ? 'object-contain object-center bg-dark-950'
                      : 'object-cover'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    to="/projects"
                    className="btn-gold text-sm px-6 py-2.5 flex items-center gap-2"
                  >
                    View Project <FiArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 bg-dark-900/90 backdrop-blur-sm">
                  <span className="text-gold-500 text-xs font-semibold uppercase tracking-wider">
                    {category}
                  </span>
                  <h3 className="text-white font-semibold font-montserrat text-lg mt-1">
                    {title}
                  </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects" className="btn-outline-gold inline-flex items-center gap-2">
            View All Projects <FiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
