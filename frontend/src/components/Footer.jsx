import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const services = [
  'Construction', 'Architecture',
  'Road Projects', 'Infrastructure Solutions'
]

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-gold-500/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png.jpeg"
                alt="Prime Infratech Logo"
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building excellence and delivering dreams. Premium construction and infrastructure solutions with unmatched quality and precision.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: FiInstagram, href: 'https://www.instagram.com/primeinfra.tech', label: 'Instagram' },
                { icon: FaWhatsapp, href: 'https://wa.me/919554679032', label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-dark-900 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold font-montserrat mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold-gradient" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-400 hover:text-gold-500 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50 group-hover:bg-gold-500 transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold font-montserrat mb-6 relative">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold-gradient" />
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-gold-500 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50 group-hover:bg-gold-500 transition-colors" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold font-montserrat mb-6 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold-gradient" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-gold-500 mt-0.5 flex-shrink-0" size={16} />
                <span className="text-gray-400 text-sm">
                  Raidopur,<br />
                  Azamgarh, Uttar Pradesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-gold-500 flex-shrink-0" size={16} />
                <a href="tel:+919554679032" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">
                  +91 95546 79032
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-gold-500 flex-shrink-0" size={16} />
                <a href="mailto:primeinfratech0295@gmail.com" className="text-gray-400 hover:text-gold-500 transition-colors text-sm break-all">
                  primeinfratech0295@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Prime Infratech. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Designed with ❤️ for excellence
          </p>
        </div>
      </div>
    </footer>
  )
}
