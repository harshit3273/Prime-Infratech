import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiPlay } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 10 + 8,
  delay: Math.random() * 5,
}))

export default function HeroSection() {
  const videoRef = useRef(null)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900/90 to-dark-950" />
        {/* Gold accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-gold-500/5 to-transparent" />
      </div>

      {/* Animated Particles */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gold-500/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-montserrat leading-tight mb-6"
            >
              Building{' '}
              <span className="gold-text text-shadow-gold">Infrastructure</span>
              <br />
              Serving{' '}
              <span className="text-white">The Nation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Prime Infratech is a trusted government infrastructure contractor specialising in:
              <ul className="mt-3 space-y-1.5 text-sm text-gray-400">
                {[
                  'Jal Jeevan Mission — CWR, OHT & Pipeline Networks',
                  'Road Construction (PMGSY / PWD)',
                  'Water Supply Schemes',
                  'Waste Management',
                  'Transport Management',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <Link to="/contact" className="btn-gold flex items-center gap-2 text-base">
                Get Free Quote
                <FiArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/919554679032"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 rounded-full border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 transition-all duration-300 font-semibold"
              >
                <FaWhatsapp size={20} />
                WhatsApp Us
              </a>
            </motion.div>
          </div>

          {/* Right — Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="rounded-3xl overflow-hidden glow-gold border border-gold-500/20">
                <div className="bg-[#0a0a0a] rounded-3xl h-96 flex items-center justify-center relative overflow-hidden p-4">
                  {/* Logo */}
                  <img
                    src="/logo.png.jpeg"
                    alt="Prime Infratech Logo"
                    className="w-full h-full object-contain rounded-2xl"
                  />
                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-gold-500/20 pointer-events-none" />
                  <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full border border-gold-500/10 pointer-events-none" />
                </div>
              </div>

              {/* Floating badges */}

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 glass-card px-4 py-3 rounded-xl"
              >
                <div className="text-gold-500 font-bold text-lg">1+ Years</div>
                <div className="text-gray-400 text-xs">Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  )
}
