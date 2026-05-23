import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  FiHome, FiFolder, FiMail, FiStar, FiImage,
  FiLogOut, FiMenu, FiX
} from 'react-icons/fi'
import { useState } from 'react'

const navItems = [
  { to: '/admin', label: 'Dashboard', icon: FiHome, end: true },
  { to: '/admin/projects', label: 'Projects', icon: FiFolder },
  { to: '/admin/contacts', label: 'Contacts', icon: FiMail },
  { to: '/admin/testimonials', label: 'Testimonials', icon: FiStar },
  { to: '/admin/gallery', label: 'Gallery', icon: FiImage },
]

export default function AdminLayout() {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  return (
    <div className="flex h-screen bg-dark-950 text-white font-poppins overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-16'
        } transition-all duration-300 bg-dark-900 border-r border-gold-500/20 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-gold-500/20 flex items-center justify-between">
          {sidebarOpen && (
            <span className="gold-text font-montserrat font-bold text-lg">
              Prime Admin
            </span>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gold-500 hover:text-gold-300 transition-colors"
          >
            {sidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-gold-500/20 text-gold-400 border border-gold-500/30'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <Icon size={18} className="flex-shrink-0" />
              {sidebarOpen && <span className="text-sm font-medium">{label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-3 border-t border-gold-500/20">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-400 hover:bg-red-500/10 transition-all w-full"
          >
            <FiLogOut size={18} className="flex-shrink-0" />
            {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-dark-900 border-b border-gold-500/20 px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-white">Admin Dashboard</h1>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center text-dark-900 font-bold text-sm">
              A
            </div>
            <span className="text-sm text-gray-400">Administrator</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
