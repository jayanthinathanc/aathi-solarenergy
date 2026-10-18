import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const categories = ['All', 'Solar Panels', 'Inverters', 'Batteries', 'Accessories']

const products = [
  {
    category: 'Solar Panels',
    badge: 'Best Seller',
    name: 'Monocrystalline Solar Panel',
    spec: '400W – 550W',
    brand: 'Waaree / Adani / Tata',
    features: ['25-year performance warranty', 'High efficiency 21.3%', 'Anti-PID technology', 'IEC certified'],
    price: 'From ₹18,000',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <rect x="8" y="8" width="64" height="64" rx="4" fill="#E6EFE0" />
        <g stroke="#2E5A1C" strokeWidth="1.5">
          <line x1="8" y1="29" x2="72" y2="29" /><line x1="8" y1="50" x2="72" y2="50" />
          <line x1="29" y1="8" x2="29" y2="72" /><line x1="50" y1="8" x2="50" y2="72" />
        </g>
        <circle cx="40" cy="40" r="10" fill="#1F5FD6" opacity="0.15" />
        <circle cx="40" cy="40" r="5" fill="#1F5FD6" opacity="0.6" />
      </svg>
    ),
    color: '#2E5A1C',
  },
  {
    category: 'Solar Panels',
    badge: 'Premium',
    name: 'Bifacial Solar Panel',
    spec: '500W – 700W',
    brand: 'Vikram / Renewsys',
    features: ['Bifacial gain up to 30%', 'Frameless glass design', 'Snow & wind resistant', 'N-Type cell technology'],
    price: 'From ₹24,000',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <rect x="8" y="8" width="64" height="64" rx="4" fill="#E6EFE0" stroke="#1F5FD6" strokeWidth="1.5" />
        <rect x="8" y="8" width="64" height="64" rx="4" fill="url(#bifacialGrad)" opacity="0.15" />
        <g stroke="#1F5FD6" strokeWidth="1.5">
          <line x1="8" y1="27" x2="72" y2="27" /><line x1="8" y1="46" x2="72" y2="46" /><line x1="8" y1="65" x2="72" y2="65" />
          <line x1="27" y1="8" x2="27" y2="72" /><line x1="46" y1="8" x2="46" y2="72" /><line x1="65" y1="8" x2="65" y2="72" />
        </g>
        <defs><linearGradient id="bifacialGrad" x1="0" y1="0" x2="80" y2="80"><stop stopColor="#1F5FD6"/><stop offset="1" stopColor="#2E5A1C"/></linearGradient></defs>
      </svg>
    ),
    color: '#1F5FD6',
  },
  {
    category: 'Inverters',
    badge: 'Top Rated',
    name: 'On-Grid String Inverter',
    spec: '3kW – 100kW',
    brand: 'Solis / Fronius / Growatt',
    features: ['98.6% peak efficiency', 'WiFi monitoring', 'Wide MPPT range', '10-year warranty'],
    price: 'From ₹22,000',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <rect x="15" y="10" width="50" height="60" rx="6" fill="#E6EFE0" stroke="#F2711C" strokeWidth="1.5" />
        <rect x="22" y="18" width="36" height="20" rx="3" fill="#F2711C" opacity="0.15" />
        <circle cx="40" cy="28" r="6" fill="#F2711C" opacity="0.4" />
        <circle cx="40" cy="28" r="3" fill="#F2711C" />
        <line x1="28" y1="48" x2="52" y2="48" stroke="#5F6B5A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="28" y1="55" x2="45" y2="55" stroke="#5F6B5A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="25" cy="62" r="3" fill="#2E5A1C" /><circle cx="35" cy="62" r="3" fill="#2E5A1C" /><circle cx="45" cy="62" r="3" fill="#5F6B5A" />
      </svg>
    ),
    color: '#F2711C',
  },
  {
    category: 'Inverters',
    badge: 'Popular',
    name: 'Hybrid Solar Inverter',
    spec: '3kW – 20kW',
    brand: 'Luminous / Livguard / Genus',
    features: ['Battery + Grid + Solar', 'Zero export mode', 'AI-powered management', 'Remote monitoring'],
    price: 'From ₹35,000',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <rect x="12" y="8" width="56" height="64" rx="6" fill="#E6EFE0" stroke="#2E5A1C" strokeWidth="1.5" />
        <rect x="20" y="15" width="40" height="24" rx="3" fill="#2E5A1C" opacity="0.1" />
        <path d="M32 27 L40 18 L40 27 L48 27 L40 36 L40 27 Z" fill="#2E5A1C" />
        <rect x="20" y="46" width="12" height="6" rx="2" fill="#1F5FD6" opacity="0.5" />
        <rect x="34" y="46" width="12" height="6" rx="2" fill="#F2711C" opacity="0.5" />
        <rect x="48" y="46" width="12" height="6" rx="2" fill="#2E5A1C" opacity="0.5" />
        <line x1="26" y1="60" x2="54" y2="60" stroke="#5F6B5A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: '#2E5A1C',
  },
  {
    category: 'Batteries',
    badge: 'New',
    name: 'Lithium Iron Phosphate Battery',
    spec: '5kWh – 50kWh',
    brand: 'Luminous / BattX / LOOM Solar',
    features: ['6000+ cycle life', 'BMS protection', '95% depth of discharge', '10-year warranty'],
    price: 'From ₹55,000',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <rect x="16" y="18" width="48" height="54" rx="6" fill="#E6EFE0" stroke="#1F5FD6" strokeWidth="1.5" />
        <rect x="30" y="12" width="20" height="10" rx="3" fill="#5F6B5A" />
        <rect x="22" y="28" width="36" height="10" rx="2" fill="#1F5FD6" opacity="0.4" />
        <rect x="22" y="42" width="28" height="10" rx="2" fill="#1F5FD6" opacity="0.25" />
        <path d="M36 56 L40 50 L40 56 L44 56 L40 62 L40 56 Z" fill="#F2711C" />
      </svg>
    ),
    color: '#1F5FD6',
  },
  {
    category: 'Accessories',
    badge: 'Essential',
    name: 'Solar Monitoring System',
    spec: 'WiFi / GPRS / LAN',
    brand: 'Solis / Growatt / SolarEdge',
    features: ['Real-time monitoring', 'Mobile & web app', 'Fault alerts', 'Performance reports'],
    price: 'From ₹4,500',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <rect x="18" y="24" width="44" height="30" rx="4" fill="#E6EFE0" stroke="#2E5A1C" strokeWidth="1.5" />
        <rect x="24" y="30" width="32" height="18" rx="2" fill="#2E5A1C" opacity="0.1" />
        <path d="M28 45 L34 37 L40 42 L46 34 L52 38" stroke="#2E5A1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="32" y1="54" x2="32" y2="60" stroke="#5F6B5A" strokeWidth="1.5" />
        <line x1="48" y1="54" x2="48" y2="60" stroke="#5F6B5A" strokeWidth="1.5" />
        <line x1="24" y1="60" x2="56" y2="60" stroke="#5F6B5A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: '#2E5A1C',
  },
]

export default function Products() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory)

  return (
    <section id="products" className="py-12 lg:py-16" style={{ background: '#E6EFE0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12">
          <div className="section-tag mx-auto w-fit">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
            Our Products
          </div>
          <h2 className="section-title mb-4">
            Premium Solar Products<br /><span style={{ color: '#1F5FD6' }}>At Best Prices</span>
          </h2>
          <p className="section-subtitle mx-auto text-center" style={{ color: '#5F6B5A' }}>
            We source only Tier-1, BIS-certified solar products that meet the highest quality standards.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: activeCategory === cat ? '#2E5A1C' : 'white',
                color: activeCategory === cat ? 'white' : '#5F6B5A',
                border: activeCategory === cat ? '1.5px solid #2E5A1C' : '1.5px solid #E6EFE0',
                cursor: 'pointer',
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="card-hover bg-white rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(46,90,28,0.1)' }}>
              {/* Product illustration */}
              <div className="h-44 flex items-center justify-center p-8 relative"
                style={{ background: `${product.color}08` }}>
                <div className="w-28 h-28">{product.icon}</div>
                <div className="product-badge absolute top-4 right-4">{product.badge}</div>
              </div>
              {/* Info */}
              <div className="p-6">
                <div className="text-xs font-semibold mb-1" style={{ color: product.color }}>{product.category}</div>
                <h3 className="font-bold text-base mb-1" style={{ color: '#1A1F16' }}>{product.name}</h3>
                <div className="text-sm font-semibold mb-1" style={{ color: '#5F6B5A' }}>{product.spec}</div>
                <div className="text-xs mb-3" style={{ color: '#5F6B5A' }}>Brand: {product.brand}</div>
                <ul className="flex flex-col gap-1.5 mb-4">
                  {product.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs" style={{ color: '#5F6B5A' }}>
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill={product.color} viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid #E6EFE0' }}>
                  <div className="font-black" style={{ color: product.color, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {product.price}
                  </div>
                  <button
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-xs font-semibold px-4 py-2 rounded-lg transition-all shine-effect"
                    style={{ background: product.color, color: 'white', border: 'none', cursor: 'pointer' }}>
                    Get Quote
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
