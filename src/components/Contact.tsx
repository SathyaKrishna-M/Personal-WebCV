import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const GH = () => <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>

const SOCIALS = [
  { icon: <GH />, label: 'GitHub', handle: 'SathyaKrishna-M', href: 'https://github.com/SathyaKrishna-M', bg: '#24292e' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText('sathyamaragani@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const cardStyle: React.CSSProperties = {
    borderRadius: 16,
    border: '1px solid rgba(255,255,255,0.07)',
    background: 'rgba(255,255,255,0.025)',
    transition: 'border-color 0.3s',
  }

  return (
    <section id="contact" ref={ref} style={{ width: '100%', padding: '96px 24px', background: '#0b0f1a' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', width: '100%' }}>

        {/* header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 999, border: '1px solid rgba(0,201,167,0.25)', background: 'rgba(0,201,167,0.07)', color: '#00c9a7', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
            Let's connect
          </span>
          <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 12 }}>Get In Touch</h2>
          <p style={{ color: '#64748b', fontSize: 15, maxWidth: 400, margin: '0 auto' }}>
            Open to new opportunities. Have a project, question, or just want to say hi? Reach out!
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>

          {/* Left: email + location */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

            {/* email card */}
            <div style={{ ...cardStyle, padding: '24px 22px' }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,201,167,0.25)'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(0,201,167,0.1)', border: '1px solid rgba(0,201,167,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00c9a7" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 12, color: '#64748b', marginBottom: 3 }}>Email me at</div>
                  <div style={{ fontWeight: 600, color: '#e2e8f0', fontSize: 14 }}>sathyamaragani@gmail.com</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <a href="mailto:sathyamaragani@gmail.com"
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '11px 0', borderRadius: 11, background: '#00c9a7', color: '#0b0f1a', fontWeight: 700, fontSize: 13, textDecoration: 'none', transition: 'background 0.2s', fontFamily: 'inherit' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#00dbb6'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = '#00c9a7'}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send Email
                </a>
                <button onClick={copy}
                  style={{ width: 44, borderRadius: 11, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', cursor: 'pointer', color: copied ? '#00c9a7' : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.2s, border-color 0.2s', fontFamily: 'inherit' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.18)' }}
                  onMouseLeave={e => { if (!copied) (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)' }}>
                  {copied
                    ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    : <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>}
                </button>
              </div>
            </div>

            {/* location */}
            <div style={{ ...cardStyle, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 14 }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,201,167,0.2)'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'}>
              <div style={{ width: 38, height: 38, borderRadius: 11, background: 'rgba(0,201,167,0.08)', border: '1px solid rgba(0,201,167,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00c9a7" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div style={{ fontSize: 12, color: '#64748b', marginBottom: 3 }}>Based in</div>
                <div style={{ fontWeight: 600, color: '#e2e8f0', fontSize: 14 }}>Hyderabad, Telangana</div>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#00c9a7', fontWeight: 600 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00c9a7', animation: 'pulse 2s infinite' }} />
                Available
              </div>
            </div>
          </motion.div>

          {/* Right: social links */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {SOCIALS.map((s, i) => (
              <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + i * 0.08 }}
                style={{ ...cardStyle, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', cursor: 'pointer' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.14)'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.04)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.025)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0, transition: 'transform 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.08)'}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)'}>
                  {s.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 600, color: '#e2e8f0', fontSize: 14 }}>{s.label}</div>
                  <div style={{ color: '#64748b', fontSize: 12, marginTop: 2 }}>{s.handle}</div>
                </div>
                <div style={{ marginLeft: 'auto', color: '#475569' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </div>
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }`}</style>
    </section>
  )
}
