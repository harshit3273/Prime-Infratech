import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiFolder, FiMail, FiStar, FiImage, FiUsers, FiTrendingUp } from 'react-icons/fi'
import { statsAPI } from '../../api/services'

const defaultStats = [
  { icon: FiFolder, label: 'Total Projects', value: '—', color: 'text-gold-500', bg: 'bg-gold-500/10 border-gold-500/20' },
  { icon: FiMail, label: 'Contact Messages', value: '—', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { icon: FiStar, label: 'Testimonials', value: '—', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
  { icon: FiImage, label: 'Gallery Images', value: '—', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
]

export default function AdminDashboard() {
  const [stats, setStats] = useState(defaultStats)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    statsAPI.get()
      .then(({ data }) => {
        setStats([
          { ...defaultStats[0], value: data.projects ?? 0 },
          { ...defaultStats[1], value: data.contacts ?? 0 },
          { ...defaultStats[2], value: data.testimonials ?? 0 },
          { ...defaultStats[3], value: data.gallery ?? 0 },
        ])
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold font-montserrat text-white">Dashboard Overview</h2>
        <p className="text-gray-400 text-sm mt-1">Welcome back! Here's what's happening with your website.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map(({ icon: Icon, label, value, color, bg }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`glass-card p-5 border ${bg}`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl ${bg} border flex items-center justify-center`}>
                <Icon size={18} className={color} />
              </div>
              <FiTrendingUp size={14} className="text-gray-600" />
            </div>
            <div className={`font-bold font-montserrat text-3xl ${color} mb-1`}>
              {loading ? <div className="w-8 h-6 bg-white/10 rounded animate-pulse" /> : value}
            </div>
            <div className="text-gray-400 text-sm">{label}</div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="glass-card p-6 border border-white/10">
        <h3 className="text-white font-semibold font-montserrat mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Add Project', href: '/admin/projects', color: 'border-gold-500/30 text-gold-400 hover:bg-gold-500/10' },
            { label: 'View Messages', href: '/admin/contacts', color: 'border-blue-500/30 text-blue-400 hover:bg-blue-500/10' },
            { label: 'Add Testimonial', href: '/admin/testimonials', color: 'border-purple-500/30 text-purple-400 hover:bg-purple-500/10' },
            { label: 'Upload Images', href: '/admin/gallery', color: 'border-green-500/30 text-green-400 hover:bg-green-500/10' },
          ].map(({ label, href, color }) => (
            <a
              key={label}
              href={href}
              className={`border rounded-xl px-4 py-3 text-sm font-medium text-center transition-all ${color}`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
