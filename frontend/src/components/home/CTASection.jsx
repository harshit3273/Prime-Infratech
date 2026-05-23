import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function CTASection() {
  return (
    <section className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 via-transparent to-gold-500/10" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold-500/40 text-gold-500 text-xs font-semibold tracking-widest uppercase mb-6 bg-gold-500/5">
            Start Your Project
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-white mb-6">
            Ready to Build Your{' '}
            <span className="gold-text">Dream Project?</span>
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our expert team is ready to turn your vision into reality.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-gold flex items-center gap-2 text-base px-10 py-4">
              Get Free Quote <FiArrowRight size={18} />
            </Link>
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 px-10 py-4 rounded-full border-2 border-white/20 text-white hover:border-gold-500/50 hover:text-gold-400 transition-all duration-300 font-semibold"
            >
              <FiPhone size={18} />
              Call Now
            </a>
            <a
              href="https://wa.me/919554679032"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-10 py-4 rounded-full border-2 border-green-500/40 text-green-400 hover:bg-green-500/10 transition-all duration-300 font-semibold"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
