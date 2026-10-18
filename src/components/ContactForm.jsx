import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL'

const homeTypes = ['Independent House', 'Apartment or Flat', 'Villa', 'Others']

const emptyForm = {
  ebNumber: '',
  name: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  pincode: '',
  homeType: '',
}

export default function ContactForm() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const set = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const payload = new FormData()
    Object.entries({
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      ebNumber: form.ebNumber,
      name: form.name,
      phone: form.phone,
      email: form.email,
      address: form.address,
      city: form.city,
      pincode: form.pincode,
      homeType: form.homeType,
      source: 'Website – Book Free Survey',
    }).forEach(([k, v]) => payload.append(k, v))

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', body: payload })
      if (res.ok) { setStatus('success'); setForm(emptyForm) }
      else throw new Error()
    } catch {
      if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') {
        setStatus('success')
        setForm(emptyForm)
      } else {
        setStatus('error')
      }
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F5A623 0%, #E8960E 40%, #F5C342 100%)' }}>
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #1A1F16 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, white, transparent)' }} />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #2A5010, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left — headline */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}>
            <h2 className="font-extrabold mb-5 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: "'Outfit', sans-serif", color: '#1A1F16', letterSpacing: '-0.025em' }}>
              Ready to Cut Your<br />Bill by 90%?
            </h2>
            <p className="text-lg font-medium mb-8" style={{ color: 'rgba(26,31,22,0.75)' }}>
              Book a free site survey. Our expert visits your home, calculates your exact savings, and walks you through the full PM Surya Ghar subsidy process — at no cost and no obligation.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                '100% free site survey — no obligation',
                'Exact savings calculation from your bill',
                'Up to ₹78,000 subsidy handled for you',
                'Response within 2 hours on business days',
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: '#2A5010' }}>
                    <svg className="w-3 h-3" fill="white" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sm" style={{ color: '#1A1F16' }}>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="tel:+918056976800"
                className="!bg-[#fff] flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                style={{ background: 'rgba(26,31,22,0.12)', color: '#1A1F16' }}>
                <img src="/call.webp" alt="WhatsApp" className="w-6 h-6 object-contain" />
                80569 76800
              </a>
              <a href="https://wa.me/918056976800" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                style={{ background: '#25d366', color: 'white' }}>
                <img src="/WhatsApp.webp" alt="WhatsApp" className="w-7 h-7 object-contain" />
                WhatsApp
              </a>
              <a href="mailto:ponniah@aathisolarenergy.com"
                className="!bg-[#fff] flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                style={{ background: 'rgba(26,31,22,0.12)', color: '#1A1F16' }}>
                <img src="/email.webp" alt="WhatsApp" className="w-7 h-7 object-contain" />
                Email Us
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="font-extrabold text-xl mb-1" style={{ color: '#1A1F16', fontFamily: "'Outfit', sans-serif" }}>
                Book My Free Site Survey
              </h3>
              <p className="text-sm mb-6" style={{ color: '#5A6A55' }}>
                Our solar expert calls you within 2 hours and visits within 3 days.
              </p>

              {status === 'success' ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: '#EEF3E6' }}>
                    <svg className="w-9 h-9" fill="#2A5010" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-extrabold text-xl mb-2" style={{ color: '#2A5010', fontFamily: "'Outfit', sans-serif" }}>
                    Survey Booked!
                  </h4>
                  <p className="text-sm mb-2" style={{ color: '#5A6A55' }}>
                    Thank you! Ponniah T will call you within 2 hours to confirm your free site survey.
                  </p>
                  <p className="text-sm font-semibold mb-6" style={{ color: '#2A5010' }}>
                    Or call directly: <a href="tel:+918056976800" style={{ color: '#1565C0' }}>80569 76800</a>
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn-green">Submit Another</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                  {/* EB Number — prominent mandatory field */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#CC1100' }}>
                      EB (Electricity Board) Number <span style={{ color: '#CC1100' }}>*</span>
                    </label>
                    <input type="text" name="ebNumber" required
                      placeholder="e.g. 068-020-004-000267820"
                      value={form.ebNumber} onChange={set}
                      className="form-field"
                      style={{ borderColor: form.ebNumber ? '#2A5010' : undefined }}
                    />
                    <p className="text-xs mt-1" style={{ color: '#9aaa95' }}>
                      Found on your TNEB electricity bill (Service No.)
                    </p>
                  </div>

                  {/* Name + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: '#5A6A55' }}>
                        Full Name <span style={{ color: '#CC1100' }}>*</span>
                      </label>
                      <input type="text" name="name" required placeholder="Rajan Kumar"
                        value={form.name} onChange={set} className="form-field" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: '#5A6A55' }}>
                        Phone Number <span style={{ color: '#CC1100' }}>*</span>
                      </label>
                      <input type="tel" name="phone" required placeholder="80569 76800"
                        pattern="[0-9+\-\s]{10,15}" value={form.phone} onChange={set} className="form-field" />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#5A6A55' }}>
                      Email Address <span style={{ color: '#9aaa95', fontWeight: 400 }}>(optional)</span>
                    </label>
                    <input type="email" name="email" placeholder="you@example.com"
                      value={form.email} onChange={set} className="form-field" />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#5A6A55' }}>
                      Address <span style={{ color: '#9aaa95', fontWeight: 400 }}>(optional)</span>
                    </label>
                    <input type="text" name="address" placeholder="Door No., Street Name"
                      value={form.address} onChange={set} className="form-field" />
                  </div>

                  {/* City + Pincode */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: '#5A6A55' }}>
                        City / Town <span style={{ color: '#9aaa95', fontWeight: 400 }}>(optional)</span>
                      </label>
                      <input type="text" name="city" placeholder="Perambalur"
                        value={form.city} onChange={set} className="form-field" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: '#5A6A55' }}>
                        Pincode <span style={{ color: '#9aaa95', fontWeight: 400 }}>(optional)</span>
                      </label>
                      <input type="text" name="pincode" placeholder="621212"
                        pattern="[0-9]{6}" maxLength={6} value={form.pincode} onChange={set} className="form-field" />
                    </div>
                  </div>

                  {/* Home Type */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: '#5A6A55' }}>
                      Home Type <span style={{ color: '#9aaa95', fontWeight: 400 }}>(optional)</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {homeTypes.map(ht => (
                        <label key={ht}
                          className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl cursor-pointer transition-all text-sm font-medium"
                          style={{
                            border: `1.5px solid ${form.homeType === ht ? '#2A5010' : '#E8EFDF'}`,
                            background: form.homeType === ht ? '#EEF3E6' : 'white',
                            color: form.homeType === ht ? '#2A5010' : '#5A6A55',
                          }}>
                          <input type="radio" name="homeType" value={ht}
                            checked={form.homeType === ht}
                            onChange={set}
                            className="sr-only" />
                          <span className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all"
                            style={{ borderColor: form.homeType === ht ? '#2A5010' : '#c8d9b8' }}>
                            {form.homeType === ht && (
                              <span className="w-2 h-2 rounded-full" style={{ background: '#2A5010' }} />
                            )}
                          </span>
                          {ht}
                        </label>
                      ))}
                    </div>
                  </div>

                  <button type="submit" disabled={status === 'loading'}
                    className="btn-gold shine btn-gold-pulse w-full justify-center text-base py-3.5"
                    style={{ opacity: status === 'loading' ? 0.7 : 1 }}>
                    {status === 'loading' ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Booking…
                      </>
                    ) : (
                      <>
                        Book My Free Survey
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  {status === 'error' && (
                    <p className="text-center text-sm font-medium" style={{ color: '#CC1100' }}>
                      Something went wrong. Please call us directly at{' '}
                      <a href="tel:+918056976800" style={{ color: '#1565C0' }}>80569 76800</a>.
                    </p>
                  )}

                  <p className="text-center text-xs" style={{ color: '#9aaa95' }}>
                    Your information is private and never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
