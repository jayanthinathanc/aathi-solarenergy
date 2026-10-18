import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const faqs = [
  {
    q: 'Who is eligible for the PM Surya Ghar subsidy?',
    a: 'Any residential homeowner with a valid TNEB electricity connection is eligible. The central government subsidy is up to ₹78,000 for a 3 kW system (₹30,000/kW for first 2kW + ₹18,000/kW for the next 1kW). We check your eligibility during the free site survey and file the complete application on your behalf — you do not need to visit any government office.',
  },
  {
    q: 'How much will I actually save every month?',
    a: 'A correctly sized solar system typically offsets 80–90% of your electricity bill. For example, a 3 kW system generates roughly 360 units a month — enough to cover most 2–3 BHK homes. During your free survey, our engineer analyses your actual past bills and gives you an exact monthly savings figure, not just an estimate.',
  },
  {
    q: 'How long does installation take?',
    a: 'Residential installations are completed in as little as 5 working days from design approval. Our team handles everything — mounting structure, panel installation, inverter wiring, and final testing. Net metering approval from TNEB follows shortly after installation, after which you begin exporting power.',
  },
  {
    q: 'What documents do I need?',
    a: 'You need four basic documents: your latest TNEB electricity bill, Aadhaar card, property ownership proof (house document or tax receipt), and your bank account details for subsidy credit. Our team will guide you through collecting and submitting these. Most customers find it far simpler than they expected.',
  },
  {
    q: 'What maintenance does a rooftop solar system need?',
    a: 'Very little. The main maintenance task is occasional panel cleaning — typically once a month in dusty areas, or after heavy pollen/dust storms — to keep output at peak levels. Panels carry 25-year linear performance warranties. Our local team is a phone call away for any concerns, and we offer affordable Annual Maintenance Contracts.',
  },
  {
    q: 'What happens on cloudy days or at night?',
    a: 'Your home remains connected to the TNEB grid at all times. Solar powers your home during daylight hours. Any excess power generated is exported to TNEB via net metering and credited to your bill. At night, or on heavy overcast days, you draw from the grid as normal — but those daytime credits offset the grid units. The result: a dramatically lower monthly bill.',
  },
  {
    q: 'Do you serve my area? Do you install outside Tirunelveli and Tenkasi?',
    a: 'Our home ground is Tirunelveli and Tenkasi districts — we know every TNEB division, local permit process, and rooftop type here inside-out, which means faster surveys, quicker approvals, and a team that is never far away. That said, we install across all of Tamil Nadu. Wherever your home is — Chennai, Coimbatore, Madurai, Salem, Nagercoil, or any other district — we will travel to you and deliver the same quality and service. Book a free site survey and our team will visit your home, typically within 2–3 working days.',
  },
  {
    q: 'Why choose a Tirunelveli-based company over a large city installer?',
    a: 'A local team means real accountability. We are your neighbours — our engineers live and work in the same communities they install in. We understand the local TNEB offices, weather patterns (including the heavy winds in the Tirunelveli–Tenkasi corridor), and seasonal factors that affect solar yield here specifically. When you need post-installation support, you are calling a local number — not a distant call centre. And for those outside our home region, we bring that same ground-level care wherever we install.',
  },
]

export default function FAQ() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-20 lg:py-28" style={{ background: '#F8F9FB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-14">
          {/* Left sticky label */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <div className="section-pill w-fit mb-5">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                FAQ
              </div>
              <h2 className="section-title mb-5">
                Frequently<br /><span style={{ color: '#1565C0' }}>Asked Questions</span>
              </h2>
              <p className="section-sub mb-8">
                Everything you need to know about rooftop solar, PM Surya Ghar subsidy, and going solar in Tamil Nadu.
              </p>

              {/* Quick contact */}
              <div className="rounded-2xl p-5 flex flex-col gap-4" style={{ background: '#EEF3E6', border: '1.5px solid #D9E8CF' }}>
                <p className="font-semibold text-sm" style={{ color: '#2A5010' }}>
                  Still have questions? Talk to our solar expert directly.
                </p>
                <a href="tel:+918056976800" className="btn-green justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                  Call 80569 76800
                </a>
                <a href="https://wa.me/918056976800?text=Hi%2C%20I%20have%20a%20question%20about%20rooftop%20solar."
                  target="_blank" rel="noopener noreferrer"
                  className="justify-center flex items-center gap-2 py-2.5 px-4 rounded-lg font-semibold text-sm transition-all"
                  style={{ background: '#25d366', color: 'white' }}>
                  <img src="/WhatsApp.webp" alt="WhatsApp" className="w-6 h-6 object-contain" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right accordion */}
          <div ref={ref} className="lg:col-span-3 flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden"
                style={{ border: open === i ? '1.5px solid #2A5010' : '1.5px solid #EEF3E6' }}>
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={open === i}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <span className="font-semibold text-sm leading-snug pr-4" style={{ color: '#1A1F16' }}>
                    {faq.q}
                  </span>
                  <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: open === i ? '#2A5010' : '#EEF3E6',
                      transform: open === i ? 'rotate(45deg)' : 'none',
                    }}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke={open === i ? 'white' : '#5A6A55'} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m-8-8h16"/>
                    </svg>
                  </div>
                </button>
                <div className={`faq-body ${open === i ? 'open' : ''}`}>
                  <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: '#5A6A55' }}>
                    {faq.a}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
