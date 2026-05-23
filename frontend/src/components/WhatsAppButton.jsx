import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

const WHATSAPP_NUMBER = '919554679032'
const WHATSAPP_MESSAGE = 'Hello! I am interested in your construction services. Please provide more information.'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-dark-800 border border-green-500/30 rounded-2xl p-4 shadow-xl max-w-xs"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-green-400 font-semibold text-sm">Chat with us</span>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiX size={14} />
              </button>
            </div>
            <p className="text-gray-300 text-xs mb-3">
              Hi there! How can we help you today?
            </p>
            <button
              onClick={handleClick}
              className="w-full bg-green-500 hover:bg-green-400 text-white text-xs font-semibold py-2 px-4 rounded-full transition-colors"
            >
              Start Chat
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setShowTooltip(!showTooltip)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-colors animate-pulse-gold"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} className="text-white" />
      </motion.button>
    </div>
  )
}
