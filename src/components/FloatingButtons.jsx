import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      {/* WhatsApp */}
      <a href="https://wa.me/918056976800?text=Hi%2C%20I%27m%20interested%20in%20rooftop%20solar%20for%20my%20home.%20Please%20share%20details."
        target="_blank" rel="noopener noreferrer"
        className="wa-float" aria-label="Chat on WhatsApp" title="Chat on WhatsApp">
        <img src="/WhatsApp.webp" alt="WhatsApp" className="w-7 h-7 object-contain" />
      </a>

      {/* Call */}
      <a href="tel:+918056976800" className="call-float" aria-label="Call us" title="Call 80569 76800">
        <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
        </svg>
      </a>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="back-top show" aria-label="Back to top" title="Back to top">
            <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7"/>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
