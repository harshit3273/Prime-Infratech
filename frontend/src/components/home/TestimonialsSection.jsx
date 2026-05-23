import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FiStar } from 'react-icons/fi'
import SectionHeader from '../SectionHeader'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'CEO, TechCorp India',
    rating: 5,
    text: 'Prime Infratech delivered our corporate office beyond expectations. The quality of work, attention to detail, and professionalism is unmatched. Highly recommended!',
    initials: 'RK',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Homeowner, Noida',
    rating: 5,
    text: 'Our dream home became a reality thanks to Prime Infratech. From design to completion, every step was handled with care and expertise. Truly a luxury experience.',
    initials: 'PS',
  },
  {
    id: 3,
    name: 'Amit Verma',
    role: 'Director, Verma Group',
    rating: 5,
    text: 'We have worked with many construction companies, but Prime Infratech stands out for their commitment to quality and timely delivery. Our go-to partner for all projects.',
    initials: 'AV',
  },
  {
    id: 4,
    name: 'Sunita Patel',
    role: 'Interior Designer',
    rating: 5,
    text: 'As an interior designer, I collaborate with Prime Infratech regularly. Their execution is flawless and they understand the vision perfectly. A true professional team.',
    initials: 'SP',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Testimonials"
          title="What Our"
          highlight="Clients Say"
          subtitle="Don't just take our word for it — hear from the clients who trusted us with their most important projects."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {testimonials.map(({ id, name, role, rating, text, initials }) => (
            <SwiperSlide key={id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 h-full"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <FiStar key={i} size={16} className="text-gold-500 fill-gold-500" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                  "{text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-dark-900 font-bold text-sm flex-shrink-0">
                    {initials}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{name}</div>
                    <div className="text-gray-500 text-xs">{role}</div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
