import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Prime Infratech</title>
        <meta name="description" content="Get in touch with Prime Infratech for a free consultation and quote on your construction project." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-gold-500/40 text-gold-500 text-xs font-semibold tracking-widest uppercase mb-4 bg-gold-500/5">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold font-montserrat text-white mb-6">
              Contact <span className="gold-text">Us</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Ready to start your project? Get in touch with our expert team for a free consultation and quote.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-dark-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-montserrat text-white mb-2">
              Let's Build Something <span className="gold-text">Great</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Reach out to us through any of the channels below. Our team responds within 24 hours.
            </p>

            <div className="space-y-4 mb-6">
              {[
                { icon: FiPhone, label: 'Phone', value: '+91 95546 79032', href: 'tel:+919554679032' },
                { icon: FiMail, label: 'Email', value: 'primeinfratech0295@gmail.com', href: 'mailto:primeinfratech0295@gmail.com' },
                { icon: FiMapPin, label: 'Address', value: 'Raidopur, Azamgarh', href: '#' },
                { icon: FiClock, label: 'Working Hours', value: 'Mon–Sat: 10:00 AM – 6:00 PM', href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 p-4 glass-card hover:border-gold-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <Icon size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">{label}</div>
                    <div className="text-white text-sm">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919554679032?text=Hello%20Prime%20Infratech%2C%20I%20need%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 transition-all font-semibold"
            >
              <FaWhatsapp size={22} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 glass-card overflow-hidden border border-gold-500/20"
          >
            <div className="h-80 bg-dark-900 flex items-center justify-center relative">
              <div className="text-center">
                <FiMapPin size={40} className="text-gold-500 mx-auto mb-3" />
                <p className="text-gray-400">Raidopur, Azamgarh</p>
                <a
                  href="https://maps.google.com/?q=Raidopur+Azamgarh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center gap-2 mt-4 text-sm px-6 py-2.5"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
