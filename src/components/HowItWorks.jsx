import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Free Site Survey',
    desc: 'We visit your home, assess roof area, shading, tilt, and analyse your past electricity bills to understand your energy consumption pattern.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
      </svg>
    ),
    detail: '100% free, no obligation',
    color: '#2A5010',
  },
  {
    num: '02',
    title: 'Custom System Design',
    desc: 'Our engineers use AI-assisted solar sizing tools to analyse roof area, sun exposure, and your consumption — and recommend the perfect system size.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    detail: 'AI-powered solar sizing',
    color: '#1565C0',
  },
  {
    num: '03',
    title: 'Subsidy & Approvals',
    desc: 'We file your PM Surya Ghar application, handle all TNEB/DISCOM documentation, and manage net metering approvals — fully on your behalf.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    detail: 'Up to ₹78,000 subsidy',
    color: '#F5A623',
  },
  {
    num: '04',
    title: 'Installation',
    desc: 'Our certified installation team completes the full rooftop solar system — panels, inverter, cabling, and mounting — in as little as 5 days.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    detail: 'Done in 5 days',
    color: '#CC1100',
  },
  {
    num: '05',
    title: 'Net Metering & Switch-On',
    desc: 'Once metering is approved by TNEB, your system goes live. Export excess power, earn credits, and start saving from day one — forever.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    detail: 'Start saving from day 1',
    color: '#2A5010',
  },
]

export default function HowItWorks() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  const lineRef = useRef(null)

  useEffect(() => {
    if (inView && lineRef.current) {
      lineRef.current.classList.add('animated')
    }
  }, [inView])

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-16">
          <div className="section-pill mx-auto w-fit mb-4">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
            How It Works
          </div>
          <h2 className="section-title mb-4">
            Solar on Your Roof<br /><span style={{ color: '#1565C0' }}>in 5 Easy Steps</span>
          </h2>
          <p className="section-sub mx-auto max-w-xl">
            We handle the complexity so you can focus on what matters. From first call to switch-on, we walk with you every step.
          </p>

          {/* AI callout */}
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: 'rgba(21,101,192,0.1)', color: '#1565C0', border: '1px solid rgba(21,101,192,0.2)' }}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a2 2 0 012 2v1a2 2 0 01-2 2 2 2 0 01-2-2V4a2 2 0 012-2zm0 14a2 2 0 012 2v1a2 2 0 01-2 2 2 2 0 01-2-2v-1a2 2 0 012-2zM4 11a2 2 0 012-2h1a2 2 0 012 2 2 2 0 01-2 2H6a2 2 0 01-2-2zm14 0a2 2 0 012-2h-1a2 2 0 00-2 2 2 2 0 002 2h1a2 2 0 002-2z"/>
            </svg>
            AI-Powered Solar Sizing — smart analysis of your roof, sun exposure & usage
          </div>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div ref={ref} className="hidden lg:block">
          <div className="relative">
            {/* Progress line */}
            {/* <div className="timeline-line"> */}
              {/* <div ref={lineRef} className="timeline-line-fill" /> */}
            {/* </div> */}

            <div className="grid grid-cols-5 gap-4 relative">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 32 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.12, duration: 0.6 }}
                  className="flex flex-col items-center text-center relative z-10">
                  {/* Circle */}
                  <div className="w-16 h-16 rounded-full flex flex-col items-center justify-center mb-4 relative"
                    style={{ background: step.color, boxShadow: `0 8px 24px ${step.color}40` }}>
                    <div style={{ color: 'white' }}>{step.icon}</div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-black"
                      style={{ background: '#0f2207', border: '2px solid white', fontFamily: "'Outfit', sans-serif" }}>
                      {i + 1}
                    </div>
                  </div>
                  <div className="step-card w-full">
                    <h3 className="font-bold text-sm mb-2" style={{ color: '#1A1F16' }}>{step.title}</h3>
                    <p className="text-xs leading-relaxed mb-3" style={{ color: '#5A6A55' }}>{step.desc}</p>
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: `${step.color}12`, color: step.color }}>
                      ✓ {step.detail}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden flex flex-col gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              className="flex gap-4">
              {/* Left - circle + line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: step.color, boxShadow: `0 4px 16px ${step.color}40` }}>
                  <div className="text-white">{step.icon}</div>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 mt-3" style={{ background: '#D9E8CF', minHeight: '2rem' }} />
                )}
              </div>
              {/* Right */}
              <div className="step-card flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-black" style={{ color: step.color, fontFamily: "'Outfit', sans-serif" }}>{step.num}</span>
                  <h3 className="font-bold text-base" style={{ color: '#1A1F16' }}>{step.title}</h3>
                </div>
                <p className="text-sm leading-relaxed mb-2" style={{ color: '#5A6A55' }}>{step.desc}</p>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{ background: `${step.color}12`, color: step.color }}>
                  ✓ {step.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-14">
          <p className="text-base font-medium mb-4" style={{ color: '#5A6A55' }}>
            The whole process is designed to be hassle-free for you.
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold btn-gold-pulse shine text-base py-3.5 px-9">
            Start My Solar Journey — Free Survey
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
