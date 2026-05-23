import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-dark-950 flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-gold-gradient flex items-center justify-center shadow-2xl shadow-gold-500/30">
              <span className="text-dark-900 font-bold font-montserrat text-4xl">P</span>
            </div>
            <div className="text-center">
              <div className="gold-text font-montserrat font-bold text-2xl">PRIME INFRATECH</div>
              <div className="text-gray-500 text-xs tracking-widest uppercase mt-1">Building Today. Empowering Tomorrow.</div>
            </div>
            <div className="loader" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
