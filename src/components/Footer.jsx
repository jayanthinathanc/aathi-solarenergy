
const quickLinks = [
  { label: 'Why Solar?', href: '#why-solar' },
  { label: 'Packages', href: '#packages' },
  { label: 'About Us', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Book Free Survey', href: '#contact' },
]

export default function Footer() {
  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{ background: '#0a1a04', color: 'rgba(255,255,255,0.7)' }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="Aathi Solar Energy" className="w-15 h-15 object-contain "></img>
              <div>
                <div className="text-white font-extrabold text-lg uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Aathi Solar Energy
                </div>
              </div>
            </div>
            <div className="text-xs my-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Exclusive in Tirunelveli & Tenkasi.</div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Tamil Nadu's trusted residential solar partner. Based in Ravanasamudram, we primarily serve Tirunelveli and Tenkasi — and install across all of Tamil Nadu. Survey to switch-on, fully handled.
            </p>
            {/* Google rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(s => (
                  <svg key={s} className="w-3.5 h-3.5" fill="#F5A623" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-white">5.0</span>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>on Google · 100+ Reviews</span>
            </div>
            {/* Social */}
            <div className="flex gap-2.5">
              {[
                { label: 'Facebook', href: 'https://www.facebook.com/share/19cmjiFrzp/', src: '/facebook.webp' },
                { label: 'WhatsApp', href: 'https://wa.me/918056976800?text=Hi%2C%20I%27m%20interested%20in%20rooftop%20solar%20for%20my%20home.%20Please%20share%20details.', src: '/WhatsApp.webp' },
                { label: 'Youtube', href: 'https://www.youtube.com/@ponniahmh', src: '/Youtube.webp' },
                { label: 'Instagram', href: 'https://www.instagram.com/aathisolarenergy', src: '/instagram.webp' },
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  target={s.label === 'WhatsApp' ? '_blank' : undefined}
                  rel={s.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110 overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <img src={s.src} alt={s.label} className="w-5 h-5 object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider pb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <button onClick={() => go(l.href)}
                    className="text-sm flex items-center gap-2 hover:text-white transition-colors text-left"
                    style={{ color: 'rgba(255,255,255,0.6)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                    <svg className="w-3 h-3 shrink-0" fill="none" stroke="rgba(255,255,255,0.35)" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider pb-4">We Install</h4>
            <ul className="flex flex-col gap-2.5">
              {['2 kW Home Solar System', '3 kW Home Solar System', '5 kW Home Solar System', 'Net Metering Setup', 'PM Surya Ghar Filing', 'After-Sales Support'].map(s => (
                <li key={s} className="text-sm flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  <svg className="w-3 h-3 shrink-0" fill="#F5A623" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider pb-4">Contact Us</h4>
            <div className="flex flex-col gap-4">
              {[
                { icon: '📍', lines: ['1/82/A1, Pillaiyar Kovil Street,', 'Ravanasamudram – 627 424,', 'Tamil Nadu, India'] },
                { icon: '📞', lines: ['80569 76800'], href: 'tel:+918056976800' },
                { icon: '📧', lines: ['ponniah@aathisolarenergy.com'], href: 'mailto:ponniah@aathisolarenergy.com' },
                { icon: '🕐', lines: ['Mon – Sat: 8:00 AM – 7:00 PM', 'Sunday: By appointment'] },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-base shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    {item.lines.map(line => (
                      item.href ? (
                        <a key={line} href={item.href}
                          className="block text-sm hover:text-white transition-colors"
                          style={{ color: 'rgba(255,255,255,0.6)' }}>{line}</a>
                      ) : (
                        <div key={line} className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{line}</div>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            © 2026 Aathi Solar Energy, Ravanasamudram. All rights reserved.
          </p>

          <div className="flex gap-4 text-xs mr-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
            <span>Site developed by Jayanthinathan</span>
            {/* <span>Privacy Policy</span> */}
            {/* <span>Terms of Service</span> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
