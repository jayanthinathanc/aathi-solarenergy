import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const highlights = [
  { icon: '📍', title: 'Local Expert Team', desc: 'Based in Ravanasamudram, we primarily serve Tirunelveli and Tenkasi districts with unmatched local knowledge — and install across all of Tamil Nadu.' },
  { icon: '💎', title: 'Transparent Pricing', desc: 'No hidden charges. You see every line item before signing. What we quote is what you pay — nothing more.' },
  { icon: '🏆', title: 'Quality Components Only', desc: 'We install only Tier-1, BIS-certified panels and proven inverters. No shortcuts, no substitutions, no compromises.' },
  { icon: '📋', title: 'Complete Paperwork Handled', desc: 'From PM Surya Ghar subsidy filing to TNEB net metering application — we manage every document so you do not have to.' },
  { icon: '🤝', title: 'After-Sales Support', desc: 'Our relationship does not end at installation. We monitor system performance and are a phone call away for any concern.' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-12 lg:py-16" style={{ background: '#F8F9FB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left">
            <div className="section-pill mb-5 mx-auto lg:mx-0 w-fit">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              About Aathi Solar
            </div>
            <h2 className="section-title mb-5">
              One Name. One Team.<br /><span style={{ color: '#1565C0' }}>From Survey to Switch-On.</span>
            </h2>
            <div className="flex flex-col gap-4 mb-7" style={{ color: '#5A6A55', lineHeight: 1.8 }}>
              <p>
                Aathi Solar Energy is a Ravanasamudram-based solar company dedicated exclusively to
                <strong style={{ color: '#2A5010' }}> residential homes and apartments</strong> across Tamil Nadu.
                We were founded with a single belief: every Tamil Nadu family deserves clean, affordable energy —
                and the path to get there should be simple, transparent, and fully supported.
              </p>
              <p>
                Under the leadership of <strong style={{ color: '#2A5010' }}>Ponniah T</strong>, our team handles
                every step in-house — free site survey, custom system design, subsidy paperwork, professional
                installation, and ongoing after-sales care. There is no subcontracting, no middlemen.
                Just our team, your roof, and a commitment to excellence.
              </p>
              <p>
                We are <strong style={{ color: '#2A5010' }}>primary experts in Tirunelveli and Tenkasi districts</strong>,
                with deep local knowledge of TNEB processes, local terrain, and community needs. Our installation
                capability extends to <strong style={{ color: '#2A5010' }}>all districts across Tamil Nadu</strong> —
                no matter where your home is, we will come to you.
              </p>
              <p>
                We have powered <strong style={{ color: '#2A5010' }}>100+ homes</strong> across the state and
                helped families save crores in electricity bills — while contributing to a greener Tamil Nadu.
              </p>
            </div>

            {/* Owner card */}
            <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: '#EEF3E6', border: '1.5px solid #D9E8CF' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center font-black text-xl text-white shrink-0"
                style={{ background: 'linear-gradient(135deg, #2A5010, #3a6d18)', fontFamily: "'Outfit', sans-serif" }}>
                PT
              </div>
              <div>
                <div className="font-extrabold text-base" style={{ color: '#2A5010', fontFamily: "'Outfit', sans-serif" }}>Ponniah T</div>
                <div className="text-sm font-semibold" style={{ color: '#5A6A55' }}>Proprietor, Aathi Solar Energy</div>
                <a href="mailto:ponniah@aathisolarenergy.com"
                  className="text-xs font-medium" style={{ color: '#1565C0' }}>
                  ponniah@aathisolarenergy.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Highlights */}
          <div className="flex flex-col gap-4">
            {/* {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, x: 32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
                className="card-lift flex items-start gap-4 bg-white rounded-2xl p-5"
                style={{ border: '1px solid #EEF3E6' }}>
                <div className="text-2xl shrink-0 mt-0.5">{h.icon}</div>
                <div>
                  <h4 className="font-bold text-sm mb-1" style={{ color: '#1A1F16' }}>{h.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: '#5A6A55' }}>{h.desc}</p>
                </div>
              </motion.div>
            ))} */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="card-lift bg-white rounded-2xl p-5"
              style={{ border: '1px solid #EEF3E6' }}>
              <div>
                <h4 className="font-bold text-sm mb-3" style={{ color: '#1A1F16' }}>Our Location</h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.83961418449!2d77.37164787399377!3d8.80113449251629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b042f62a3852165%3A0xdeb91c25e71548e4!2sAATHI%20SOLAR%20ENERGY!5e0!3m2!1sen!2sin!4v1792388677217!5m2!1sen!2sin"
                  width="100%"
                  height="360"
                  style={{ border: 0, borderRadius: '12px', display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
