import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const projects = [
  { type: 'Residential', kw: '5 kW', location: 'Chennai', color: '#2E5A1C', savings: '₹4,500/mo' },
  { type: 'Commercial', kw: '50 kW', location: 'Coimbatore', color: '#1F5FD6', savings: '₹42,000/mo' },
  { type: 'Industrial', kw: '500 kW', location: 'Tirupur', color: '#F2711C', savings: '₹4.2L/mo' },
  { type: 'Residential', kw: '3 kW', location: 'Madurai', color: '#2E5A1C', savings: '₹2,800/mo' },
  { type: 'Agricultural', kw: '7.5 HP', location: 'Salem', color: '#1F5FD6', savings: '₹6,000/mo' },
  { type: 'Commercial', kw: '100 kW', location: 'Trichy', color: '#F2711C', savings: '₹85,000/mo' },
  { type: 'Industrial', kw: '1 MW', location: 'Hosur', color: '#2E5A1C', savings: '₹8.5L/mo' },
  { type: 'Residential', kw: '10 kW', location: 'Vellore', color: '#1F5FD6', savings: '₹8,200/mo' },
  { type: 'Commercial', kw: '25 kW', location: 'Erode', color: '#F2711C', savings: '₹21,000/mo' },
]

function ProjectCard({ project, i, inView }) {
  const icons = {
    Residential: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    Commercial: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    Industrial: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    Agricultural: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
    ),
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: i * 0.07, duration: 0.5 }}
      className="card-hover bg-white rounded-2xl overflow-hidden group cursor-pointer"
      style={{ border: '1px solid rgba(46,90,28,0.1)' }}>
      {/* Illustration area */}
      <div className="h-40 relative flex items-end overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}30 100%)` }}>
        {/* Solar panel illustration */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <svg viewBox="0 0 200 120" fill="none" className="w-full h-full">
            {[0,1,2,3].map(col => [0,1].map(row => (
              <rect key={`${col}-${row}`} x={20 + col * 45} y={10 + row * 50} width="38" height="42" rx="3"
                fill={project.color} stroke={project.color} strokeWidth="1" />
            )))}
            {[0,1,2,3].map(col => [0,1].map(row => (
              <g key={`g-${col}-${row}`}>
                <line x1={20 + col * 45 + 12} y1={10 + row * 50} x2={20 + col * 45 + 12} y2={10 + row * 50 + 42} stroke="white" strokeWidth="0.8" opacity="0.5" />
                <line x1={20 + col * 45 + 26} y1={10 + row * 50} x2={20 + col * 45 + 26} y2={10 + row * 50 + 42} stroke="white" strokeWidth="0.8" opacity="0.5" />
                <line x1={20 + col * 45} y1={10 + row * 50 + 14} x2={20 + col * 45 + 38} y2={10 + row * 50 + 14} stroke="white" strokeWidth="0.8" opacity="0.5" />
                <line x1={20 + col * 45} y1={10 + row * 50 + 28} x2={20 + col * 45 + 38} y2={10 + row * 50 + 28} stroke="white" strokeWidth="0.8" opacity="0.5" />
              </g>
            )))}
          </svg>
        </div>
        {/* Type badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white"
          style={{ background: project.color }}>
          <div style={{ color: 'white' }}>{icons[project.type]
            ? <span className="w-3 h-3 inline-block">{React.cloneElement(icons[project.type], { className: 'w-3 h-3' })}</span>
            : null}
          </div>
          {project.type}
        </div>
        {/* Capacity badge */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-black text-white"
          style={{ background: 'rgba(0,0,0,0.4)' }}>
          {project.kw}
        </div>
        {/* Savings overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `${project.color}cc` }}>
          <div className="text-white text-center">
            <div className="text-xs font-semibold mb-1">Monthly Savings</div>
            <div className="text-2xl font-black">{project.savings}</div>
          </div>
        </div>
      </div>
      {/* Info */}
      <div className="p-4 flex items-center justify-between">
        <div>
          <div className="font-bold text-sm" style={{ color: '#1A1F16' }}>{project.type} Solar</div>
          <div className="text-xs flex items-center gap-1 mt-0.5" style={{ color: '#5F6B5A' }}>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            {project.location}, Tamil Nadu
          </div>
        </div>
        <div className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `${project.color}15`, color: project.color }}>
          Saves {project.savings}
        </div>
      </div>
    </motion.div>
  )
}

import React from 'react'

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [filter, setFilter] = useState('All')

  const types = ['All', 'Residential', 'Commercial', 'Industrial', 'Agricultural']
  const filtered = filter === 'All' ? projects : projects.filter(p => p.type === filter)

  return (
    <section id="gallery" className="py-12 lg:py-16" style={{ background: '#F6F9F3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12">
          <div className="section-tag mx-auto w-fit">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            Our Projects
          </div>
          <h2 className="section-title mb-4">
            Installed Across<br /><span style={{ color: '#1F5FD6' }}>Tamil Nadu</span>
          </h2>
          <p className="section-subtitle mx-auto text-center" style={{ color: '#5F6B5A' }}>
            A glimpse of our successful solar installations — from homes to mega industrial plants.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {types.map(t => (
            <button key={t} onClick={() => setFilter(t)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: filter === t ? '#2E5A1C' : 'white',
                color: filter === t ? 'white' : '#5F6B5A',
                border: filter === t ? '1.5px solid #2E5A1C' : '1.5px solid #E6EFE0',
                cursor: 'pointer',
              }}>
              {t}
            </button>
          ))}
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={`${project.type}-${i}`} project={project} i={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary shine-effect">
            View All Projects & Get Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
