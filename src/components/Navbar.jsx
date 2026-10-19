import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Why Solar', href: '#why-solar' },
  { label: 'Packages', href: '#packages' },
  { label: 'System Types', href: '#systems' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]



export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => go('#hero')} className="flex items-center gap-2.5 bg-transparent border-none cursor-pointer">
            <img src="/logo.png" alt="Aathi Solar Energy" className="w-15 h-15 object-contain "></img>
            <div className="text-left">
              <div className={`font-extrabold leading-tight tracking-tight transition-colors ${scrolled ? 'text-green-900' : 'text-white'}`}
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: scrolled ? '1.2rem' : '1.25rem', color: scrolled ? '#2A5010' : 'white' }}>
                Aathi Solar Energy
              </div>
              {/* <div className={`text-xs leading-none font-medium ${scrolled ? 'text-muted' : 'text-white/65'}`}
                style={{ color: scrolled ? '#5A6A55' : 'rgba(255,255,255,0.65)' }}>
                Rooftop Solar for Homes
              </div> */}
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(l => (
              <button key={l.href} onClick={() => go(l.href)} className="nav-link">{l.label}</button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+918056976800"
              className={`text-sm font-semibold flex items-center gap-1.5 transition-colors ${scrolled ? 'text-green' : 'text-white'}`}
              style={{ color: scrolled ? '#2A5010' : 'white' }}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              80569 76800
            </a>
            <button onClick={() => go('#contact')} className="btn-gold shine btn-gold-pulse text-sm py-2.5 px-5">
              Book Free Survey
            </button>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"
            className="lg:hidden p-2.5 rounded-xl transition-colors"
            style={{ background: scrolled ? '#EEF3E6' : 'rgba(255,255,255,0.15)' }}>
            {[0,1,2].map(i => (
              <div key={i} className={`w-5 h-0.5 transition-all ${scrolled ? 'bg-green-900' : 'bg-white'} ${i === 1 ? 'my-1' : ''} ${menuOpen && i === 0 ? 'rotate-45 translate-y-1.5' : ''} ${menuOpen && i === 1 ? 'opacity-0' : ''} ${menuOpen && i === 2 ? '-rotate-45 -translate-y-1.5' : ''}`}
                style={{ backgroundColor: scrolled ? '#2A5010' : 'white' }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 flex flex-col"
            style={{ background: '#0f2207', paddingTop: '5rem' }}>
            <button className="absolute top-5 right-5 text-white" onClick={() => setMenuOpen(false)} aria-label="Close">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <div className="flex flex-col px-6 gap-1">
              {navLinks.map((l, i) => (
                <motion.button key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => go(l.href)}
                  className="text-white text-xl font-semibold py-3.5 text-left bg-transparent border-none"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  {l.label}
                </motion.button>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
                className="flex flex-col gap-3 pt-5">
                <a href="tel:+918056976800" className="btn-outline-white justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                  80569 76800
                </a>
                <button onClick={() => go('#contact')} className="btn-gold justify-center shine">
                  Book Free Site Survey
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
