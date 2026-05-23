import { Helmet } from 'react-helmet-async'
import HeroSection from '../components/home/HeroSection'
import StatsSection from '../components/home/StatsSection'
import ServicesPreview from '../components/home/ServicesPreview'
import FeaturedProjects from '../components/home/FeaturedProjects'
import WhyChooseUs from '../components/home/WhyChooseUs'
import CTASection from '../components/home/CTASection'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Prime Infratech | Premium Construction & Infrastructure</title>
        <meta name="description" content="Prime Infratech - Building Excellence, Delivering Dreams. Premium construction, architecture, interior design and infrastructure solutions." />
      </Helmet>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <FeaturedProjects />
      <WhyChooseUs />
      <CTASection />
    </>
  )
}
