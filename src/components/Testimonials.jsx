import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const reviews = [
  {
    initials: 'KR',
    name: 'Karthik R.',
    place: 'Perambalur',
    stars: 5,
    text: '"Our electricity bill dropped from ₹3,200 to under ₹300 every month. The Aathi Solar team handled the entire PM Surya Ghar subsidy process for us — we did not have to visit any office or fill a single form. Zero hassle, maximum savings."',
    savings: '₹2,900/month saved',
    system: '3 kW System',
    color: '#2A5010',
  },
  {
    initials: 'PS',
    name: 'Priya S.',
    place: 'Tiruchirappalli',
    stars: 5,
    text: '"I was worried about the installation process but the team was incredibly professional. They surveyed my flat on Saturday and the 3 kW system was fully operational by the following Thursday. Transparent pricing from day one — no surprises."',
    savings: '₹2,400/month saved',
    system: '3 kW System',
    color: '#1565C0',
  },
  {
    initials: 'SM',
    name: 'Senthil Kumar M.',
    place: 'Coimbatore',
    stars: 5,
    text: '"I was sceptical about the ₹78,000 subsidy actually coming through, but Aathi Solar managed the entire application and the full subsidy was credited within the timeline they promised. Their after-sales support is genuinely excellent."',
    savings: '₹3,100/month saved',
    system: '5 kW System',
    color: '#F5A623',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(s => (
        <svg key={s} className="w-4 h-4" fill="#F5A623" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1)
      setCurrent(c => (c + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  const go = (idx) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }

  return (
    <section id="reviews" className="py-12 lg:py-16" style={{ background: '#0f2207' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
            style={{ background: 'rgba(245,166,35,0.15)', color: '#F5C342', border: '1px solid rgba(245,166,35,0.3)' }}>
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
            </svg>
            Customer Reviews
          </div>
          <h2 className="font-extrabold mb-4 text-white"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.02em' }}>
            Loved by 100+ Homeowners
          </h2>
          {/* Google badge */}
          <div className="google-badge mx-auto w-fit">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span>⭐ 5.0 Google Rating</span>
            <span style={{ color: '#5A6A55' }}>· Verified Reviews</span>
          </div>
        </motion.div>

        {/* Desktop — 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.6 }}
              className="card-lift review-card flex flex-col gap-4">
              <Stars />
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#3A3A3A' }}>{r.text}</p>
              <div className="pt-3 flex items-center justify-between" style={{ borderTop: '1px solid #EEF3E6' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: r.color }}>
                    {r.initials}
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: '#1A1F16' }}>{r.name}</div>
                    <div className="text-xs" style={{ color: '#5A6A55' }}>{r.place}, Tamil Nadu</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold" style={{ color: '#2A5010' }}>{r.savings}</div>
                  <div className="text-xs" style={{ color: '#5A6A55' }}>{r.system}</div>
                </div>
              </div>
              {/* Verified tag */}
              <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: '#1565C0' }}>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                Verified on Google
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.35 }}
              className="review-card flex flex-col gap-4">
              <Stars />
              <p className="text-sm leading-relaxed" style={{ color: '#3A3A3A' }}>{reviews[current].text}</p>
              <div className="pt-3 flex items-center justify-between" style={{ borderTop: '1px solid #EEF3E6' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: reviews[current].color }}>
                    {reviews[current].initials}
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: '#1A1F16' }}>{reviews[current].name}</div>
                    <div className="text-xs" style={{ color: '#5A6A55' }}>{reviews[current].place}, Tamil Nadu</div>
                  </div>
                </div>
                <div className="text-xs font-bold" style={{ color: '#2A5010' }}>{reviews[current].savings}</div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-2 mt-5">
            {reviews.map((_, i) => (
              <button key={i} onClick={() => go(i)}
                className="rounded-full transition-all"
                style={{ width: i === current ? '24px' : '8px', height: '8px', background: i === current ? '#2A5010' : '#D9E8CF', border: 'none', cursor: 'pointer' }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
