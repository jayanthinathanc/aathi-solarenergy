import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const packages = [
  {
    kw: '2 kW',
    tag: 'Starter',
    ideal: 'For 1–2 BHK Homes',
    bill: 'Monthly bill up to ₹1,500',
    units: '~240 units/month',
    cost: '₹1,40,000',
    subsidy: '₹60,000',
    effective: '₹80,000',
    space: '~200 sq.ft rooftop',
    popular: false,
    color: '#1565C0',
    gradient: 'linear-gradient(135deg, #EEF3E6, #dce8f5)',
  },
  {
    kw: '3 kW',
    tag: 'Most Popular',
    ideal: 'For 2–3 BHK Homes',
    bill: 'Monthly bill ₹1,500–₹3,000',
    units: '~360 units/month',
    cost: '₹2,00,000',
    subsidy: '₹78,000',
    effective: '₹1,22,000',
    space: '~300 sq.ft rooftop',
    popular: true,
    color: '#2A5010',
    gradient: 'linear-gradient(135deg, #2A5010, #3a6d18)',
  },
  {
    kw: '5 kW',
    tag: 'Premium',
    ideal: 'For 3–4 BHK / Large Homes',
    bill: 'Monthly bill ₹3,000+',
    units: '~600 units/month',
    cost: '₹3,20,000',
    subsidy: '₹78,000',
    effective: '₹2,42,000',
    space: '~500 sq.ft rooftop',
    popular: false,
    color: '#CC1100',
    gradient: 'linear-gradient(135deg, #fff5ee, #ffe8df)',
  },
]

const included = [
  'Tier-1 Solar Panels',
  'String Inverter',
  'Mounting Structure',
  'Net Metering Setup',
  'Subsidy Filing',
  'Professional Installation',
  '25-Yr Panel Warranty',
  'After-Sales Support',
]

export default function Packages() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="packages" className="py-12 lg:py-16 bg-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-14">
          <div className="section-pill mx-auto w-fit mb-4">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
            Solar Packages
          </div>
          <h2 className="section-title mb-4">
            Solar Packages<br /><span style={{ color: '#1565C0' }}>For Every Home</span>
          </h2>
          <p className="section-sub mx-auto max-w-xl">
            Choose the right size for your family's needs. All packages include complete end-to-end service — from survey to switch-on.
          </p>
          <p className="text-sm font-semibold mt-3" style={{ color: '#CC1100' }}>
            * Indicative prices. Final quote provided after free site survey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.kw}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.13, duration: 0.65 }}
              className={`package-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <div className="popular-badge">⭐ Most Popular</div>}

              {/* Header */}
              <div className="rounded-xl p-5 mb-5" style={{ background: pkg.gradient }}>
                <div className="flex items-end justify-between mb-2">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-1"
                      style={{ color: pkg.popular ? 'rgba(255,255,255,0.75)' : pkg.color }}>
                      {pkg.tag}
                    </div>
                    <div className="font-black" style={{ fontSize: '2.5rem', color: pkg.popular ? 'white' : pkg.color, fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>
                      {pkg.kw}
                    </div>
                    <div className="text-sm font-semibold mt-1" style={{ color: pkg.popular ? 'rgba(255,255,255,0.85)' : '#5A6A55' }}>
                      {pkg.ideal}
                    </div>
                  </div>
                  {/* Sun icon */}
                  <svg viewBox="0 0 60 60" fill="none" className="w-14 h-14 opacity-30">
                    {[0,45,90,135,180,225,270,315].map(a => {
                      const r = (a * Math.PI) / 180
                      return <line key={a} x1={30 + 22 * Math.cos(r)} y1={30 + 22 * Math.sin(r)}
                        x2={30 + 28 * Math.cos(r)} y2={30 + 28 * Math.sin(r)}
                        stroke={pkg.popular ? 'white' : pkg.color} strokeWidth="3" strokeLinecap="round"/>
                    })}
                    <circle cx="30" cy="30" r="16" fill={pkg.popular ? 'white' : pkg.color} opacity="0.9"/>
                  </svg>
                </div>
                <div className="text-xs font-medium" style={{ color: pkg.popular ? 'rgba(255,255,255,0.75)' : '#5A6A55' }}>
                  {pkg.bill}
                </div>
                <div className="text-xs font-medium" style={{ color: pkg.popular ? 'rgba(255,255,255,0.75)' : '#5A6A55' }}>
                  Generates {pkg.units} | Needs {pkg.space}
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-5 p-4 rounded-xl" style={{ background: '#F8F9FB' }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm" style={{ color: '#5A6A55' }}>Approx. Cost</span>
                  <span className="font-bold" style={{ color: '#1A1F16' }}>{pkg.cost}</span>
                </div>
                <div className="flex justify-between items-center mb-2 pb-2" style={{ borderBottom: '1px dashed #D9E8CF' }}>
                  <span className="text-sm font-semibold" style={{ color: '#2A5010' }}>Govt. Subsidy</span>
                  <span className="font-bold" style={{ color: '#2A5010' }}>– {pkg.subsidy}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold" style={{ color: '#1A1F16' }}>Your Effective Cost</span>
                  <span className="text-lg font-black" style={{ color: pkg.popular ? '#2A5010' : pkg.color, fontFamily: "'Outfit', sans-serif" }}>
                    {pkg.effective}
                  </span>
                </div>
              </div>

              {/* Included */}
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: '#5A6A55' }}>Everything Included:</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {included.map(item => (
                    <div key={item} className="flex items-center gap-1.5 text-xs" style={{ color: '#5A6A55' }}>
                      <svg className="w-3.5 h-3.5 shrink-0" fill="#2A5010" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full justify-center shine ${pkg.popular ? 'btn-gold' : 'btn-green'}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
                Get Exact Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Subsidy note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-sm mt-8 font-medium"
          style={{ color: '#5A6A55' }}>
          Not sure which size is right for you?{' '}
          <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-bold underline bg-transparent border-none cursor-pointer"
            style={{ color: '#2A5010' }}>
            Book a free survey
          </button>
          {' '}and we will size it perfectly from your electricity bill.
        </motion.p>
      </div>
    </section>
  )
}
