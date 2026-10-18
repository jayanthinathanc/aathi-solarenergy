import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'MNRE & TNREDCO Approved',
    desc: 'Fully certified and government-approved installer, ensuring you get all eligible subsidies and net metering benefits.',
    color: '#2E5A1C',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Best Price Guarantee',
    desc: 'We offer the most competitive prices in Tamil Nadu without compromising on product quality or installation standards.',
    color: '#1F5FD6',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast Installation',
    desc: 'Our expert teams complete residential installations within 2–3 days. We respect your time and minimize disruption.',
    color: '#F2711C',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Premium A-Grade Panels',
    desc: 'We only use Tier-1 solar panels from brands like Waaree, Adani, Tata, and Vikram — panels that last 25+ years.',
    color: '#2E5A1C',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: '24/7 After-Sales Support',
    desc: 'Dedicated support team available round the clock. Your system is monitored and any issues are resolved promptly.',
    color: '#1F5FD6',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Subsidy & Loan Assistance',
    desc: 'We handle all MNRE subsidy paperwork and help you get solar loans at the lowest interest rates from leading banks.',
    color: '#F2711C',
  },
]

export default function WhyUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="why-us" className="py-12 lg:py-16" style={{ background: '#E6EFE0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left">
            <div className="section-tag mx-auto lg:mx-0 w-fit">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
              Why Choose Aathi Solar
            </div>
            <h2 className="section-title mb-6">
              Tamil Nadu's Most<br />
              <span style={{ color: '#1F5FD6' }}>Trusted Solar Company</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#5F6B5A' }}>
              With over a decade of experience and 2,500+ successful installations, Aathi Solar Energy
              stands as Tamil Nadu's premier solar solutions provider. We combine cutting-edge technology
              with unmatched customer service.
            </p>

            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { val: '2-Day', sub: 'Installation' },
                { val: '25-Yr', sub: 'Panel Warranty' },
                { val: '5-Yr', sub: 'Workmanship' },
                { val: '3–4 Yr', sub: 'Payback Period' },
              ].map(m => (
                <div key={m.sub} className="bg-white rounded-xl p-4 flex items-center gap-3"
                  style={{ border: '1px solid rgba(46,90,28,0.15)' }}>
                  <div className="text-2xl font-black" style={{ color: '#2E5A1C', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{m.val}</div>
                  <div className="text-sm font-medium" style={{ color: '#5F6B5A' }}>{m.sub}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-accent shine">
              Get Your Free Assessment
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>

          {/* Right grid */}
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
                className="card-hover bg-white rounded-2xl p-5 flex gap-4"
                style={{ border: '1px solid rgba(46,90,28,0.1)' }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${r.color}12`, color: r.color }}>
                  {r.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1" style={{ color: '#1A1F16' }}>{r.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: '#5F6B5A' }}>{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
