import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhySolar from './components/WhySolar'
import Packages from './components/Packages'
import SystemTypes from './components/SystemTypes'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhySolar />
      <Packages />
      <SystemTypes />
      <About />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingButtons />
    </div>
  )
}
