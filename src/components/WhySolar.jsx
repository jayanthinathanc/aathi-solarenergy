import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: 'Up to ₹78,000 Govt. Subsidy',
    desc: 'PM Surya Ghar scheme offers ₹30,000/kW for first 2kW and ₹18,000/kW for next 1kW. We file the entire application for you.',
    color: '#F5A623',
    bg: 'rgba(245,166,35,0.08)',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: 'Save 80–90% Every Month',
    desc: 'A well-sized system eliminates most of your electricity bill. Hundreds of Tamil Nadu families now pay under ₹300/month.',
    color: '#2A5010',
    bg: 'rgba(42,80,16,0.08)',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: 'Payback in Just 3–4 Years',
    desc: 'With subsidy applied, most 3kW systems pay for themselves in under 4 years and then generate free power for 20+ more years.',
    color: '#1565C0',
    bg: 'rgba(21,101,192,0.08)',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
      </svg>
    ),
    title: 'Net Metering Included',
    desc: 'Export excess power to TNEB and earn bill credits. On sunny days your meter runs backward — you get paid for your solar.',
    color: '#2A5010',
    bg: 'rgba(42,80,16,0.08)',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
    ),
    title: 'Increases Property Value',
    desc: 'Homes with solar installations command 3–5% higher resale value. Solar is a home improvement that pays dividends.',
    color: '#1565C0',
    bg: 'rgba(21,101,192,0.08)',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: '25-Year Panel Warranty',
    desc: 'We install only Tier-1 panels with a 25-year linear performance guarantee — they keep generating at 80%+ efficiency for decades.',
    color: '#F5A623',
    bg: 'rgba(245,166,35,0.08)',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
      </svg>
    ),
    title: 'Protection from Rising Tariffs',
    desc: 'TNEB tariffs have risen 40% in a decade. Solar locks in your energy cost at near-zero, shielding you from future hikes.',
    color: '#CC1100',
    bg: 'rgba(204,17,0,0.08)',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    ),
    title: 'Clean Green Energy',
    desc: 'A 3kW system prevents ~3 tonnes of CO₂ per year — equivalent to planting 150 trees. Give your family cleaner air.',
    color: '#2A5010',
    bg: 'rgba(42,80,16,0.08)',
  },
]

export default function WhySolar() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="why-solar" className="py-20 lg:py-28" style={{ background: '#F8F9FB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-14">
          <div className="section-pill mx-auto w-fit mb-4">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
            Why Go Solar?
          </div>
          <h2 className="section-title mb-4">
            8 Reasons Your Home<br /><span style={{ color: '#1565C0' }}>Needs Solar Today</span>
          </h2>
          <p className="section-sub mx-auto max-w-xl">
            With rising electricity costs and generous government subsidies, there has never been a better time for Tamil Nadu homeowners to go solar.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 + i * 0.07, duration: 0.6 }}
              className="card-lift bg-white rounded-2xl p-6 flex flex-col gap-4"
              style={{ border: '1px solid #EEF3E6' }}>
              <div className="w-13 h-13 rounded-2xl flex items-center justify-center"
                style={{ background: r.bg, color: r.color, width: '3.25rem', height: '3.25rem' }}>
                {r.icon}
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1.5 leading-snug" style={{ color: '#1A1F16' }}>{r.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#5A6A55' }}>{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-14 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: 'linear-gradient(135deg, #EEF3E6 0%, #dceedd 100%)', border: '1.5px solid #D9E8CF' }}>
          <div>
            <h3 className="font-extrabold text-xl mb-1" style={{ color: '#2A5010', fontFamily: "'Outfit', sans-serif" }}>
              Find Out Your Exact Savings
            </h3>
            <p className="text-sm" style={{ color: '#5A6A55' }}>
              Share your electricity bill and we will calculate your exact monthly savings, subsidy amount, and payback period — for free.
            </p>
          </div>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold shine shrink-0">
            Get My Savings Report
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
