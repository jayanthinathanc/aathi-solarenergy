import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const stats = [
  { end: 2500, suffix: '+', label: 'Successful Installations', icon: '🏠', desc: 'Across Tamil Nadu' },
  { end: 50, suffix: ' MW+', label: 'Solar Capacity Installed', icon: '⚡', desc: 'Clean energy generated' },
  { end: 10, suffix: '+', label: 'Years of Experience', icon: '📅', desc: 'In the solar industry' },
  { end: 98, suffix: '%', label: 'Customer Satisfaction', icon: '⭐', desc: 'Verified reviews' },
  { end: 500, suffix: '+', label: 'Industrial Clients', icon: '🏭', desc: 'Businesses powered' },
  { end: 1200, suffix: '+', label: 'Crore ₹ Savings', icon: '💰', desc: 'Client savings to date' },
]

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-20 gradient-cta relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #F2711C, transparent)' }} />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, white, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.25)' }}>
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
            Numbers That Speak
          </div>
          <h2 className="text-white font-extrabold mb-3" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Trusted by Thousands Across Tamil Nadu
          </h2>
          <p className="text-white/70 text-lg">Our impact in numbers — built over a decade of solar expertise</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card rounded-2xl p-5 text-center flex flex-col items-center gap-2">
              <div className="text-3xl">{s.icon}</div>
              <div className="text-3xl font-black text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1 }}>
                {inView ? (
                  <CountUp end={s.end} suffix={s.suffix} duration={2.5} delay={i * 0.1} />
                ) : `0${s.suffix}`}
              </div>
              <div className="text-xs font-bold text-white/90 leading-tight text-center">{s.label}</div>
              <div className="text-xs text-white/50">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
