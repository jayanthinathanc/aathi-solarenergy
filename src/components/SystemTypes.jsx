import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

/* ── SVG Illustrations ─────────────────────────────── */

function SolarPanelArray({ color = '#1565C0', rows = 2, cols = 3 }) {
  const w = 34, h = 24, gx = 6, gy = 5
  const totalW = cols * w + (cols - 1) * gx
  const totalH = rows * h + (rows - 1) * gy
  return (
    <g>
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          const x = c * (w + gx), y = r * (h + gy)
          return (
            <g key={`${r}-${c}`}>
              <rect x={x} y={y} width={w} height={h} rx="2" fill={color} opacity="0.15" stroke={color} strokeWidth="1.5" />
              <line x1={x + w / 3} y1={y} x2={x + w / 3} y2={y + h} stroke={color} strokeWidth="0.8" opacity="0.6" />
              <line x1={x + (2 * w) / 3} y1={y} x2={x + (2 * w) / 3} y2={y + h} stroke={color} strokeWidth="0.8" opacity="0.6" />
              <line x1={x} y1={y + h / 2} x2={x + w} y2={y + h / 2} stroke={color} strokeWidth="0.8" opacity="0.6" />
              {Array.from({ length: rows * cols }).map((_, i) => null)}
            </g>
          )
        })
      )}
    </g>
  )
}

function OffGridSVG() {
  return (
    <svg viewBox="0 0 380 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Sun */}
      <circle cx="38" cy="32" r="16" fill="#F5A623" opacity="0.9" />
      {[0,45,90,135,180,225,270,315].map(a => {
        const r = (a * Math.PI) / 180
        return <line key={a} x1={38 + 19 * Math.cos(r)} y1={32 + 19 * Math.sin(r)}
          x2={38 + 24 * Math.cos(r)} y2={32 + 24 * Math.sin(r)}
          stroke="#F5A623" strokeWidth="2" strokeLinecap="round" />
      })}

      {/* Solar Panels */}
      <g transform="translate(10, 58)">
        <SolarPanelArray color="#2A5010" rows={2} cols={3} />
      </g>
      <text x="36" y="148" textAnchor="middle" fontSize="9" fill="#2A5010" fontWeight="700">SOLAR PANELS</text>

      {/* Arrow: Panels → Charge Controller */}
      <line x1="130" y1="100" x2="158" y2="100" stroke="#2A5010" strokeWidth="2" strokeDasharray="4,3" />
      <polygon points="158,96 166,100 158,104" fill="#2A5010" />
      <text x="144" y="94" textAnchor="middle" fontSize="7.5" fill="#5A6A55">DC</text>

      {/* Charge Controller box */}
      <rect x="166" y="80" width="52" height="40" rx="6" fill="#EEF3E6" stroke="#2A5010" strokeWidth="1.5" />
      <text x="192" y="97" textAnchor="middle" fontSize="7.5" fill="#2A5010" fontWeight="700">CHARGE</text>
      <text x="192" y="108" textAnchor="middle" fontSize="7.5" fill="#2A5010" fontWeight="700">CONTROLLER</text>
      <text x="192" y="138" textAnchor="middle" fontSize="9" fill="#2A5010" fontWeight="600">MPPT / PWM</text>

      {/* Arrow down: Charge Controller → Battery */}
      <line x1="192" y1="120" x2="192" y2="150" stroke="#CC1100" strokeWidth="2" strokeDasharray="4,3" />
      <polygon points="188,150 192,158 196,150" fill="#CC1100" />
      <text x="204" y="138" textAnchor="start" fontSize="7.5" fill="#5A6A55">DC</text>

      {/* Battery Bank */}
      <rect x="158" y="158" width="68" height="42" rx="6" fill="#fff5e6" stroke="#CC1100" strokeWidth="1.5" />
      <rect x="180" y="155" width="8" height="4" rx="1" fill="#CC1100" />
      <rect x="164" y="166" width="18" height="26" rx="3" fill="#CC1100" opacity="0.25" stroke="#CC1100" strokeWidth="1" />
      <rect x="185" y="166" width="18" height="26" rx="3" fill="#CC1100" opacity="0.25" stroke="#CC1100" strokeWidth="1" />
      <rect x="206" y="166" width="14" height="26" rx="3" fill="#CC1100" opacity="0.15" stroke="#CC1100" strokeWidth="1" />
      <text x="192" y="213" textAnchor="middle" fontSize="9" fill="#CC1100" fontWeight="700">BATTERY BANK</text>

      {/* Arrow: Battery → Inverter */}
      <line x1="226" y1="179" x2="254" y2="179" stroke="#1565C0" strokeWidth="2" strokeDasharray="4,3" />
      <polygon points="254,175 262,179 254,183" fill="#1565C0" />
      <text x="240" y="172" textAnchor="middle" fontSize="7.5" fill="#5A6A55">DC</text>

      {/* Inverter box */}
      <rect x="262" y="158" width="52" height="42" rx="6" fill="#e8f0fe" stroke="#1565C0" strokeWidth="1.5" />
      <text x="288" y="177" textAnchor="middle" fontSize="7.5" fill="#1565C0" fontWeight="700">SOLAR</text>
      <text x="288" y="188" textAnchor="middle" fontSize="7.5" fill="#1565C0" fontWeight="700">INVERTER</text>
      <text x="288" y="213" textAnchor="middle" fontSize="9" fill="#1565C0" fontWeight="600">DC → AC</text>

      {/* Arrow: Inverter → Home */}
      <line x1="314" y1="179" x2="342" y2="179" stroke="#F5A623" strokeWidth="2" />
      <polygon points="342,175 350,179 342,183" fill="#F5A623" />
      <text x="328" y="172" textAnchor="middle" fontSize="7.5" fill="#5A6A55">AC</text>

      {/* House */}
      <polygon points="360,156 380,170 340,170" fill="#2A5010" opacity="0.15" stroke="#2A5010" strokeWidth="1.5" />
      <rect x="346" y="170" width="28" height="22" fill="#2A5010" opacity="0.08" stroke="#2A5010" strokeWidth="1.5" />
      <rect x="354" y="178" width="12" height="14" rx="1" fill="#2A5010" opacity="0.2" />
      <text x="360" y="207" textAnchor="middle" fontSize="9" fill="#2A5010" fontWeight="700">YOUR HOME</text>

      {/* No Grid label */}
      <rect x="148" y="15" width="84" height="22" rx="4" fill="#fff5e6" stroke="#CC1100" strokeWidth="1" />
      <text x="190" y="30" textAnchor="middle" fontSize="9" fill="#CC1100" fontWeight="700">✗ No Grid Connection</text>
    </svg>
  )
}

function OnGridSVG() {
  return (
    <svg viewBox="0 0 380 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Sun */}
      <circle cx="38" cy="32" r="16" fill="#F5A623" opacity="0.9" />
      {[0,45,90,135,180,225,270,315].map(a => {
        const r = (a * Math.PI) / 180
        return <line key={a} x1={38 + 19 * Math.cos(r)} y1={32 + 19 * Math.sin(r)}
          x2={38 + 24 * Math.cos(r)} y2={32 + 24 * Math.sin(r)}
          stroke="#F5A623" strokeWidth="2" strokeLinecap="round" />
      })}

      {/* Solar Panels */}
      <g transform="translate(10, 58)">
        <SolarPanelArray color="#1565C0" rows={2} cols={3} />
      </g>
      <text x="36" y="148" textAnchor="middle" fontSize="9" fill="#1565C0" fontWeight="700">SOLAR PANELS</text>

      {/* Arrow: Panels → Inverter */}
      <line x1="130" y1="100" x2="168" y2="100" stroke="#1565C0" strokeWidth="2" strokeDasharray="4,3" />
      <polygon points="168,96 176,100 168,104" fill="#1565C0" />
      <text x="149" y="93" textAnchor="middle" fontSize="7.5" fill="#5A6A55">DC</text>

      {/* Grid Inverter */}
      <rect x="176" y="76" width="56" height="48" rx="6" fill="#e8f0fe" stroke="#1565C0" strokeWidth="1.5" />
      <text x="204" y="96" textAnchor="middle" fontSize="7.5" fill="#1565C0" fontWeight="700">GRID-TIE</text>
      <text x="204" y="108" textAnchor="middle" fontSize="7.5" fill="#1565C0" fontWeight="700">INVERTER</text>
      <circle cx="204" cy="120" r="4" fill="#1565C0" opacity="0.4" />
      <text x="204" y="140" textAnchor="middle" fontSize="9" fill="#1565C0" fontWeight="600">DC → AC</text>

      {/* Arrow: Inverter → Meter */}
      <line x1="232" y1="100" x2="262" y2="100" stroke="#2A5010" strokeWidth="2" />
      <polygon points="262,96 270,100 262,104" fill="#2A5010" />
      <text x="247" y="93" textAnchor="middle" fontSize="7.5" fill="#5A6A55">AC</text>

      {/* Bi-directional meter */}
      <rect x="270" y="76" width="48" height="48" rx="6" fill="#EEF3E6" stroke="#2A5010" strokeWidth="1.5" />
      <circle cx="294" cy="96" r="12" fill="none" stroke="#2A5010" strokeWidth="1.5" />
      <line x1="294" y1="91" x2="300" y2="99" stroke="#2A5010" strokeWidth="1.5" strokeLinecap="round" />
      <text x="294" y="113" textAnchor="middle" fontSize="6.5" fill="#2A5010" fontWeight="700">BI-DIR</text>
      <text x="294" y="122" textAnchor="middle" fontSize="6.5" fill="#2A5010" fontWeight="700">METER</text>
      <text x="294" y="140" textAnchor="middle" fontSize="8" fill="#2A5010" fontWeight="600">NET METERING</text>

      {/* TNEB Grid tower */}
      <g transform="translate(330, 60)">
        <line x1="18" y1="0" x2="18" y2="55" stroke="#5A6A55" strokeWidth="2" />
        <line x1="6" y1="15" x2="30" y2="15" stroke="#5A6A55" strokeWidth="1.5" />
        <line x1="10" y1="30" x2="26" y2="30" stroke="#5A6A55" strokeWidth="1.5" />
        <line x1="4" y1="15" x2="10" y2="30" stroke="#5A6A55" strokeWidth="1" />
        <line x1="32" y1="15" x2="26" y2="30" stroke="#5A6A55" strokeWidth="1" />
        <circle cx="6" cy="15" r="2.5" fill="#F5A623" />
        <circle cx="30" cy="15" r="2.5" fill="#F5A623" />
        <circle cx="10" cy="30" r="2.5" fill="#F5A623" />
        <circle cx="26" cy="30" r="2.5" fill="#F5A623" />
      </g>
      <text x="348" y="130" textAnchor="middle" fontSize="8" fill="#5A6A55" fontWeight="600">TNEB GRID</text>

      {/* Arrows between meter and grid — bidirectional */}
      <line x1="318" y1="95" x2="330" y2="90" stroke="#2A5010" strokeWidth="1.5" />
      <polygon points="326,86 334,89 329,94" fill="#2A5010" />
      <line x1="330" y1="105" x2="318" y2="108" stroke="#1565C0" strokeWidth="1.5" strokeDasharray="3,2" />
      <polygon points="322,105 314,109 318,113" fill="#1565C0" />

      {/* Arrows meter → home */}
      <line x1="294" y1="124" x2="294" y2="152" stroke="#F5A623" strokeWidth="2" />
      <polygon points="290,152 294,160 298,152" fill="#F5A623" />

      {/* House */}
      <polygon points="294,165 316,178 272,178" fill="#2A5010" opacity="0.12" stroke="#2A5010" strokeWidth="1.5" />
      <rect x="278" y="178" width="32" height="22" fill="#2A5010" opacity="0.08" stroke="#2A5010" strokeWidth="1.5" />
      <rect x="286" y="184" width="16" height="16" rx="1" fill="#2A5010" opacity="0.2" />
      <text x="294" y="215" textAnchor="middle" fontSize="9" fill="#2A5010" fontWeight="700">YOUR HOME</text>

      {/* Export credit label */}
      <rect x="60" y="15" width="110" height="22" rx="4" fill="#EEF3E6" stroke="#2A5010" strokeWidth="1" />
      <text x="115" y="30" textAnchor="middle" fontSize="9" fill="#2A5010" fontWeight="700">✓ Export Credits — Net Metering</text>
    </svg>
  )
}

function HybridSVG() {
  return (
    <svg viewBox="0 0 380 230" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Sun */}
      <circle cx="38" cy="28" r="16" fill="#F5A623" opacity="0.9" />
      {[0,45,90,135,180,225,270,315].map(a => {
        const r = (a * Math.PI) / 180
        return <line key={a} x1={38 + 19 * Math.cos(r)} y1={28 + 19 * Math.sin(r)}
          x2={38 + 24 * Math.cos(r)} y2={28 + 24 * Math.sin(r)}
          stroke="#F5A623" strokeWidth="2" strokeLinecap="round" />
      })}

      {/* Solar Panels */}
      <g transform="translate(8, 52)">
        <SolarPanelArray color="#2A5010" rows={2} cols={3} />
      </g>
      <text x="36" y="144" textAnchor="middle" fontSize="9" fill="#2A5010" fontWeight="700">SOLAR PANELS</text>

      {/* Arrow: Panels → Hybrid Inverter */}
      <line x1="126" y1="100" x2="158" y2="100" stroke="#2A5010" strokeWidth="2" strokeDasharray="4,3" />
      <polygon points="158,96 166,100 158,104" fill="#2A5010" />
      <text x="142" y="93" textAnchor="middle" fontSize="7" fill="#5A6A55">DC</text>

      {/* Hybrid Inverter — central hub */}
      <rect x="166" y="68" width="64" height="64" rx="8" fill="#EEF3E6" stroke="#2A5010" strokeWidth="2" />
      <text x="198" y="90" textAnchor="middle" fontSize="8" fill="#2A5010" fontWeight="800">HYBRID</text>
      <text x="198" y="102" textAnchor="middle" fontSize="8" fill="#2A5010" fontWeight="800">INVERTER</text>
      <circle cx="198" cy="115" r="8" fill="#2A5010" opacity="0.2" stroke="#2A5010" strokeWidth="1" />
      <text x="198" y="119" textAnchor="middle" fontSize="7" fill="#2A5010" fontWeight="700">⚡</text>
      <text x="198" y="144" textAnchor="middle" fontSize="7.5" fill="#2A5010" fontWeight="600">SMART CONTROL</text>

      {/* Arrow: Hybrid Inverter → Battery */}
      <line x1="198" y1="132" x2="198" y2="158" stroke="#CC1100" strokeWidth="2" strokeDasharray="4,3" />
      <polygon points="194,158 198,166 202,158" fill="#CC1100" />
      <text x="210" y="152" textAnchor="start" fontSize="7" fill="#5A6A55">DC</text>

      {/* Battery */}
      <rect x="166" y="166" width="64" height="38" rx="6" fill="#fff5e6" stroke="#CC1100" strokeWidth="1.5" />
      <rect x="186" y="163" width="8" height="4" rx="1" fill="#CC1100" />
      <rect x="172" y="174" width="16" height="22" rx="3" fill="#CC1100" opacity="0.25" stroke="#CC1100" strokeWidth="1" />
      <rect x="190" y="174" width="16" height="22" rx="3" fill="#CC1100" opacity="0.25" stroke="#CC1100" strokeWidth="1" />
      <rect x="208" y="174" width="14" height="22" rx="3" fill="#CC1100" opacity="0.15" stroke="#CC1100" strokeWidth="1" />
      <text x="198" y="218" textAnchor="middle" fontSize="8.5" fill="#CC1100" fontWeight="700">BATTERY BACKUP</text>

      {/* Arrow: Hybrid Inverter → Grid/Meter */}
      <line x1="230" y1="100" x2="260" y2="100" stroke="#1565C0" strokeWidth="2" />
      <polygon points="260,96 268,100 260,104" fill="#1565C0" />
      <text x="245" y="93" textAnchor="middle" fontSize="7" fill="#5A6A55">AC</text>

      {/* Meter box */}
      <rect x="268" y="78" width="46" height="44" rx="6" fill="#e8f0fe" stroke="#1565C0" strokeWidth="1.5" />
      <circle cx="291" cy="97" r="11" fill="none" stroke="#1565C0" strokeWidth="1.5" />
      <line x1="291" y1="93" x2="297" y2="100" stroke="#1565C0" strokeWidth="1.5" strokeLinecap="round" />
      <text x="291" y="113" textAnchor="middle" fontSize="6.5" fill="#1565C0" fontWeight="700">NET</text>
      <text x="291" y="120" textAnchor="middle" fontSize="6.5" fill="#1565C0" fontWeight="700">METER</text>
      <text x="291" y="136" textAnchor="middle" fontSize="7.5" fill="#1565C0" fontWeight="600">TNEB GRID</text>

      {/* Grid tower */}
      <g transform="translate(326, 55)">
        <line x1="18" y1="0" x2="18" y2="50" stroke="#5A6A55" strokeWidth="2" />
        <line x1="6" y1="12" x2="30" y2="12" stroke="#5A6A55" strokeWidth="1.5" />
        <line x1="10" y1="26" x2="26" y2="26" stroke="#5A6A55" strokeWidth="1.5" />
        <line x1="4" y1="12" x2="10" y2="26" stroke="#5A6A55" strokeWidth="1" />
        <line x1="32" y1="12" x2="26" y2="26" stroke="#5A6A55" strokeWidth="1" />
        <circle cx="6" cy="12" r="2.5" fill="#F5A623" />
        <circle cx="30" cy="12" r="2.5" fill="#F5A623" />
        <circle cx="10" cy="26" r="2.5" fill="#F5A623" />
        <circle cx="26" cy="26" r="2.5" fill="#F5A623" />
      </g>
      {/* Bidirectional arrow to grid */}
      <line x1="314" y1="92" x2="327" y2="87" stroke="#2A5010" strokeWidth="1.5" />
      <polygon points="323,83 331,86 326,91" fill="#2A5010" />
      <line x1="327" y1="104" x2="314" y2="107" stroke="#1565C0" strokeWidth="1.5" strokeDasharray="3,2" />

      {/* Arrow: Meter → Home */}
      <line x1="291" y1="122" x2="291" y2="150" stroke="#F5A623" strokeWidth="2" />
      <polygon points="287,150 291,158 295,150" fill="#F5A623" />

      {/* House */}
      <polygon points="291,161 313,174 269,174" fill="#2A5010" opacity="0.12" stroke="#2A5010" strokeWidth="1.5" />
      <rect x="275" y="174" width="32" height="22" fill="#2A5010" opacity="0.08" stroke="#2A5010" strokeWidth="1.5" />
      <rect x="283" y="180" width="16" height="16" rx="1" fill="#2A5010" opacity="0.2" />
      <text x="291" y="212" textAnchor="middle" fontSize="9" fill="#2A5010" fontWeight="700">YOUR HOME</text>

      {/* Best of both label */}
      <rect x="58" y="10" width="118" height="20" rx="4" fill="rgba(245,166,35,0.15)" stroke="#F5A623" strokeWidth="1" />
      <text x="117" y="24" textAnchor="middle" fontSize="9" fill="#E8960E" fontWeight="700">✓ Grid + Battery — Best of Both</text>
    </svg>
  )
}

/* ── Data ──────────────────────────────────────────── */
const systems = [
  {
    id: 'offgrid',
    label: 'Off-Grid System',
    tagline: 'Complete Energy Independence',
    color: '#CC1100',
    bgGrad: 'linear-gradient(135deg, #fff5f5 0%, #ffe8e0 100%)',
    borderColor: '#CC1100',
    pill: { bg: 'rgba(204,17,0,0.08)', text: '#CC1100', label: 'No Grid Required' },
    Illustration: OffGridSVG,
    description:
      'An off-grid solar system operates entirely independently from the electricity grid. Solar panels charge a battery bank during the day; the battery powers your home at night and on cloudy days through a solar inverter. Ideal for locations with frequent power cuts or no grid access at all.',
    bestFor: ['Homes in remote areas', 'Locations with 8+ hr power cuts', 'Farm houses & weekend homes', 'Places with no TNEB connection'],
    components: ['Solar Panels', 'MPPT Charge Controller', 'Battery Bank (Lithium / Lead-Acid)', 'Solar Inverter'],
    pros: ['Complete energy independence', 'Works during power cuts', 'No TNEB bill', 'Ideal for remote locations'],
    cons: ['Higher initial cost (batteries)', 'Battery replacement every 5–10 yrs', 'Limited by battery capacity at night'],
    subsidy: false,
    subsidyNote: 'No PM Surya Ghar subsidy (grid connection required)',
  },
  {
    id: 'ongrid',
    label: 'On-Grid System',
    tagline: 'Most Popular — Save Up to 90%',
    color: '#2A5010',
    bgGrad: 'linear-gradient(135deg, #EEF3E6 0%, #d8eacf 100%)',
    borderColor: '#2A5010',
    pill: { bg: 'rgba(42,80,16,0.1)', text: '#2A5010', label: '★ Most Recommended' },
    Illustration: OnGridSVG,
    description:
      'An on-grid (grid-tied) solar system connects your home to the TNEB power grid. Solar powers your home during the day; excess energy is exported to TNEB and you earn bill credits (net metering). At night or on heavy overcast days, you draw from the grid — the credits offset this. No batteries needed, lowest cost, and eligible for full PM Surya Ghar subsidy.',
    bestFor: ['All residential homes with TNEB connection', 'Monthly bills above ₹1,000', 'Homes with consistent daytime usage', 'Budget-conscious homeowners'],
    components: ['Solar Panels (Tier-1)', 'Grid-Tie Inverter', 'Bi-directional Net Meter', 'TNEB Grid Connection'],
    pros: ['Lowest upfront cost', 'PM Surya Ghar subsidy eligible (up to ₹78,000)', 'Net metering — earn credits', 'Zero battery maintenance', '3–4 year payback'],
    cons: ['Does not work during power cuts (safety)', 'Requires TNEB grid connection'],
    subsidy: true,
    subsidyNote: 'Eligible for PM Surya Ghar subsidy up to ₹78,000',
  },
  {
    id: 'hybrid',
    label: 'Hybrid System',
    tagline: 'Best of Both Worlds',
    color: '#1565C0',
    bgGrad: 'linear-gradient(135deg, #e8f0fe 0%, #d0e4fd 100%)',
    borderColor: '#1565C0',
    pill: { bg: 'rgba(21,101,192,0.1)', text: '#1565C0', label: 'Premium Choice' },
    Illustration: HybridSVG,
    description:
      'A hybrid solar system combines the benefits of both on-grid and off-grid systems. It connects to the TNEB grid for net metering while also including battery storage for backup power during outages. A smart hybrid inverter manages solar, battery, and grid automatically — prioritising solar, then battery, then grid.',
    bestFor: ['Homes needing 24/7 power reliability', 'Areas with frequent power cuts', 'Critical equipment users (medical, WFH)', 'Future-proof energy investment'],
    components: ['Solar Panels (Tier-1)', 'Hybrid Inverter (Smart)', 'Battery Bank (Lithium preferred)', 'Bi-directional Net Meter'],
    pros: ['Works during power cuts (unlike on-grid)', 'Net metering still active', 'Smart energy management', 'Battery as backup, not primary', 'Subsidy applicable on solar portion'],
    cons: ['Higher cost than on-grid (battery cost)', 'More complex system setup'],
    subsidy: true,
    subsidyNote: 'Subsidy applicable on the solar panel portion',
  },
]

function SystemCard({ sys, index, inView }) {
  const [open, setOpen] = useState(false)
  const Ill = sys.Illustration

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="system-card bg-white rounded-3xl overflow-hidden"
      style={{ border: `2px solid ${open ? sys.borderColor : '#EEF3E6'}`, transition: 'border-color 0.3s, box-shadow 0.35s, transform 0.35s' }}>

      {/* Illustration header */}
      <div className="relative px-6 pt-6 pb-2" style={{ background: sys.bgGrad }}>
        {/* Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold px-3 py-1 rounded-full"
            style={{ background: sys.pill.bg, color: sys.pill.text }}>
            {sys.pill.label}
          </span>
          {sys.subsidy && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ background: 'rgba(245,166,35,0.15)', color: '#E8960E' }}>
              Subsidy Eligible ✓
            </span>
          )}
        </div>
        {/* SVG diagram */}
        <div className="w-full" style={{ height: '180px' }}>
          <Ill />
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-extrabold text-xl mb-1" style={{ color: sys.color, fontFamily: "'Outfit', sans-serif" }}>
          {sys.label}
        </h3>
        <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#9aaa95' }}>
          {sys.tagline}
        </p>
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#5A6A55' }}>
          {sys.description}
        </p>

        {/* Subsidy note */}
        <div className="flex items-start gap-2 p-3 rounded-xl mb-4"
          style={{ background: sys.subsidy ? 'rgba(42,80,16,0.06)' : 'rgba(204,17,0,0.05)', border: `1px solid ${sys.subsidy ? '#D9E8CF' : 'rgba(204,17,0,0.15)'}` }}>
          <svg className="w-4 h-4 mt-0.5 shrink-0" fill={sys.subsidy ? '#2A5010' : '#CC1100'} viewBox="0 0 24 24">
            <path d={sys.subsidy
              ? 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
              : 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'} />
          </svg>
          <span className="text-xs font-semibold" style={{ color: sys.subsidy ? '#2A5010' : '#CC1100' }}>
            {sys.subsidyNote}
          </span>
        </div>

        {/* Expand / collapse */}
        <button onClick={() => setOpen(o => !o)}
          className="flex items-center gap-2 text-sm font-bold transition-colors mb-3"
          style={{ color: sys.color, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          {open ? 'Hide Details' : 'See Components, Pros & Cons'}
          <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            style={{ transform: open ? 'rotate(180deg)' : 'none' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Expandable detail */}
        <div className={`faq-body ${open ? 'open' : ''}`}>
          <div className="flex flex-col gap-5 pt-2 pb-1">
            {/* Best for */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#9aaa95' }}>Best For</p>
              <ul className="flex flex-col gap-1.5">
                {sys.bestFor.map(b => (
                  <li key={b} className="flex items-center gap-2 text-xs" style={{ color: '#5A6A55' }}>
                    <svg className="w-3.5 h-3.5 shrink-0" fill={sys.color} viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            {/* Key components */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#9aaa95' }}>Key Components</p>
              <div className="flex flex-wrap gap-1.5">
                {sys.components.map(c => (
                  <span key={c} className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: `${sys.color}10`, color: sys.color, border: `1px solid ${sys.color}25` }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
            {/* Pros / Cons */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#2A5010' }}>✓ Pros</p>
                <ul className="flex flex-col gap-1">
                  {sys.pros.map(p => (
                    <li key={p} className="text-xs" style={{ color: '#5A6A55' }}>• {p}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#CC1100' }}>✗ Cons</p>
                <ul className="flex flex-col gap-1">
                  {sys.cons.map(c => (
                    <li key={c} className="text-xs" style={{ color: '#5A6A55' }}>• {c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full justify-center mt-4 flex items-center gap-2 py-2.5 px-4 rounded-xl font-bold text-sm transition-all shine"
          style={{ background: sys.color, color: 'white', border: 'none', cursor: 'pointer' }}>
          Get {sys.label} Quote
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </button>
      </div>
    </motion.div>
  )
}

export default function SystemTypes() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="systems" className="py-12 lg:py-16" style={{ background: '#F8F9FB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-14">
          <div className="section-pill mx-auto w-fit mb-4">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
            </svg>
            Solar System Types
          </div>
          <h2 className="section-title mb-4">
            Which Solar System<br /><span style={{ color: '#1565C0' }}>Is Right for Your Home?</span>
          </h2>
          <p className="section-sub mx-auto max-w-2xl">
            Every home has different energy needs. We help you choose the perfect system —
            from fully independent off-grid setups to grid-connected on-grid and smart hybrid systems.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {systems.map((sys, i) => (
            <SystemCard key={sys.id} sys={sys} index={i} inView={inView} />
          ))}
        </div>

        {/* Comparison note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55 }}
          className="text-center mt-12">
          <p className="text-sm font-medium mb-4" style={{ color: '#5A6A55' }}>
            Not sure which system suits your home? Our engineers will assess your needs during the
            <strong style={{ color: '#2A5010' }}> free site survey</strong> and recommend the right choice.
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold shine btn-gold-pulse">
            Book Free Survey & Expert Advice
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
