import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Residential Solar',
    desc: 'Power your home with clean energy. Reduce electricity bills by up to 90% with our tailor-made rooftop solar systems for houses and apartments.',
    features: ['1kW – 10kW capacity', 'Net metering support', 'TNEB subsidy eligible'],
    color: '#2E5A1C',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Commercial Solar',
    desc: 'Slash your commercial electricity costs significantly. Perfect for offices, shops, malls, and educational institutions across Tamil Nadu.',
    features: ['10kW – 500kW systems', 'Accelerated depreciation', 'ROI in 3–4 years'],
    color: '#1F5FD6',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: 'Industrial Solar',
    desc: 'Large-scale solar power plants for factories, warehouses, and industrial facilities. Designed for maximum energy generation and savings.',
    features: ['500kW – 5MW+', 'Ground-mounted & rooftop', 'OPEX / CAPEX models'],
    color: '#2E5A1C',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
    ),
    title: 'Solar Water Pumps',
    desc: 'Replace diesel pumps with efficient solar water pumping systems. Ideal for agriculture, irrigation, and rural water supply needs.',
    features: ['1HP – 15HP pumps', 'Submersible & surface', 'PM KUSUM scheme'],
    color: '#1F5FD6',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Off-Grid Solutions',
    desc: 'Complete energy independence with battery storage systems. Perfect for remote areas, farms, resorts, and backup power needs.',
    features: ['Lithium & lead-acid', '24/7 power supply', 'Hybrid inverter systems'],
    color: '#2E5A1C',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'AMC & Maintenance',
    desc: 'Keep your solar system at peak performance with our Annual Maintenance Contracts. Periodic cleaning, monitoring, and performance audits.',
    features: ['Quarterly inspections', 'Performance monitoring', 'Emergency support'],
    color: '#1F5FD6',
  },
]

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="services" className="py-12 lg:py-16" style={{ background: '#F6F9F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14">
          <div className="section-tag mx-auto w-fit">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            Our Services
          </div>
          <h2 className="section-title mb-4">Complete Solar Solutions<br /><span style={{ color: '#1F5FD6' }}>Under One Roof</span></h2>
          <p className="section-subtitle mx-auto text-center" style={{ color: '#5F6B5A' }}>
            From consultation to installation and beyond — we handle every aspect of your solar journey
            with expert care and premium products.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              className="card-hover bg-white rounded-2xl p-7 flex flex-col gap-4 group"
              style={{ border: '1px solid #E6EFE0' }}>
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                style={{ background: `${svc.color}15`, color: svc.color }}
                onMouseEnter={e => e.currentTarget.style.background = svc.color}
                onMouseLeave={e => e.currentTarget.style.background = `${svc.color}15`}>
                <div className="group-hover:text-white transition-colors duration-300" style={{ color: svc.color }}>
                  {svc.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1A1F16' }}>{svc.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5F6B5A' }}>{svc.desc}</p>
              </div>
              <ul className="flex flex-col gap-1.5 mt-auto">
                {svc.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm font-medium" style={{ color: '#5F6B5A' }}>
                    <svg className="w-4 h-4 flex-shrink-0" fill={svc.color} viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-1.5 text-sm font-semibold mt-2 transition-colors"
                style={{ color: svc.color, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                Learn More
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
