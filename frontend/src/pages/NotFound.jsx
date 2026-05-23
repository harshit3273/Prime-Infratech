import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="gold-text font-bold font-montserrat text-9xl mb-4">404</div>
        <h1 className="text-white font-bold font-montserrat text-3xl mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-gold inline-flex items-center gap-2">
          <FiArrowLeft size={18} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
