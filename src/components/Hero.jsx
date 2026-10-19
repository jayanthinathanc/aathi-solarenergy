import { motion } from 'framer-motion'
import CountUpPkg from 'react-countup'
import { useInView } from 'react-intersection-observer'

const CountUp = CountUpPkg.default || CountUpPkg

const subPoints = [
  {
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    text: 'Get up to ₹78,000 Central Govt. and ₹22,000 State Govt. Subsidy under PM Surya Ghar',
    color: '#F5A623',
  },
  {
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    text: 'End-to-End Installation — Survey, Design, Subsidy Filing & Net Metering',
    color: '#6de56d',
  },
  {
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: '25-Year Panel Performance Warranty — Built to Last',
    color: '#7dd3fc',
  },
]

const counters = [
  { end: 100, suffix: '+', label: 'Homes Powered' },
  { end: 78, suffix: 'K', prefix: '₹', label: 'Max Subsidy' },
  { end: 4, suffix: ' Yrs', label: 'Avg Payback' },
  { end: 25, suffix: ' Yrs', label: 'Panel Warranty' },
]

const tickerItems = [
  '☀️ PM Surya Ghar Subsidy', '🏠 100+ Homes Powered', '📍 Serving Tirunelveli & Tenkasi', '📋 Complete Subsidy Filing', '⚡ Net Metering Included',
  '🔧 Installed in 5 Days', '⭐ 5.0 Google Rated', '🌿 Zero Electricity Bill', '🛡️ 25-Year Warranty', '🌏 Installations Across Tamil Nadu',
  '☀️ PM Surya Ghar Subsidy', '🏠 100+ Homes Powered', '📍 Serving Tirunelveli & Tenkasi', '📋 Complete Subsidy Filing', '⚡ Net Metering Included',
  '🔧 Installed in 5 Days', '⭐ 5.0 Google Rated', '🌿 Zero Electricity Bill', '🛡️ 25-Year Warranty', '🌏 Installations Across Tamil Nadu',
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.14, duration: 0.75, ease: [0.16, 1, 0.3, 1] } }),
}

export default function Hero() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const goContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  const goSubsidy = () => document.querySelector('#why-solar')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="hero-section">
      {/* Animated gradient background (fallback when no video) */}
      <div className="hero-animated-bg" />
      <div className="hero-grid" />

      {/* To add real video, upload solar-hero.mp4 to /public and uncomment: */}
      <video className="hero-video-bg" autoPlay muted loop playsInline poster="/hero-poster.jpg">
          <source src="/installation.mp4" type="video/mp4" />
        </video>

      {/* <img src="/source.gif" alt="Rooftop Solar Panels" className="hero-video-bg" /> */}

      {/* Dark gradient overlay */}
      <div className="hero-gradient-overlay" />

      {/* Content */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-6 w-full flex items-center pt-28 pb-8">
        <div className="max-w-2xl xl:max-w-3xl">

          {/* Govt badge */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-7"
            style={{ background: 'rgba(245,166,35,0.18)', color: '#F5C342', border: '1px solid rgba(245,166,35,0.35)' }}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            PM Surya Ghar Subsidy Assistance
          </motion.div>

          {/* Headline */}
          <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="text-white mb-6 leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.25rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.025em' }}>
            Cut Your Electricity Bill<br />
            <span className="text-gold-gradient">by 90%</span> with Rooftop Solar
          </motion.h1>

          {/* Sub-points */}
          <motion.ul custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-col gap-3 mb-8">
            {subPoints.map(sp => (
              <li key={sp.text} className="flex items-start gap-3">
                <span style={{ color: sp.color, marginTop: '1px' }}>{sp.icon}</span>
                <span className="text-base font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {sp.text}
                </span>
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-wrap gap-4 mb-9">
            <button onClick={goContact} className="btn-gold shine btn-gold-pulse text-base py-3.5 px-8">
              Book Free Site Survey
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button onClick={goSubsidy} className="btn-outline-white text-base py-3.5 px-7">
              Check Subsidy Eligibility
            </button>
          </motion.div>

          {/* Trust strip */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(s => (
                  <svg key={s} className="w-4 h-4" fill="#F5A623" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-semibold text-sm">5.0 Rated on Google</span>
            </div>
            <span className="text-white/30">|</span>
            <span className="text-white/80 text-sm font-medium">100+ Happy Homes · Tirunelveli, Tenkasi & All Tamil Nadu</span>
          </motion.div>
        </div>
      </div>

      {/* Counter bar */}
      <div ref={ref} className="relative z-10 border-t py-6" style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {counters.map((c, i) => (
              <motion.div key={c.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="text-center">
                <div className="counter-num text-3xl md:text-4xl mb-0.5"
                  style={{ color: i % 2 === 0 ? '#F5A623' : '#7dd3fc' }}>
                  {inView ? (
                    <CountUp start={0} end={c.end} prefix={c.prefix || ''} suffix={c.suffix} duration={2.2} delay={i * 0.15} />
                  ) : `${c.prefix || ''}0${c.suffix}`}
                </div>
                <div className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>{c.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative z-10 py-2.5 ticker-wrap" style={{ background: '#2A5010' }}>
        <div className="ticker-move flex gap-10">
          {tickerItems.map((item, i) => (
            <span key={i} className="text-white/90 font-semibold text-sm">{item}</span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-36 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ display: 'none' /* shown in larger viewports */ }}>
        <span className="text-white/50 text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-8 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.2)' }}>
          <div className="scroll-dot w-full h-3 rounded-full" style={{ background: '#F5A623' }} />
        </div>
      </div>
    </section>
  )
}
