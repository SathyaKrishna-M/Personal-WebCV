import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { n: '3+', label: 'Production Apps' },
  { n: '2+', label: 'Years Coding' },
  { n: '3', label: 'Certifications' },
  { n: '100%', label: 'Passion' },
]

const TAGS = [
  '📍 Hyderabad, Telangana',
  '🎓 B.Tech AI & Data Science',
  '💼 Independent Developer',
  '✅ Open to Opportunities',
]

const card: React.CSSProperties = {
  borderRadius: 16,
  border: '1px solid rgba(255,255,255,0.07)',
  background: 'rgba(255,255,255,0.03)',
  padding: '28px 24px',
  textAlign: 'center',
  transition: 'border-color 0.3s, background 0.3s',
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="about" ref={ref} style={{ width: '100%', padding: '96px 24px', background: '#0b0f1a' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', width: '100%' }}>

        {/* header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 999, border: '1px solid rgba(0,201,167,0.25)', background: 'rgba(0,201,167,0.07)', color: '#00c9a7', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
            Get to know me
          </span>
          <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, color: '#fff', lineHeight: 1.1 }}>About Me</h2>
        </motion.div>

        {/* bio block — centered */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.5 }}
          style={{ maxWidth: 680, margin: '0 auto 48px', textAlign: 'center' }}>
          <p style={{ color: '#94a3b8', fontSize: 17, lineHeight: 1.8, marginBottom: 16 }}>
            I'm a <strong style={{ color: '#e2e8f0', fontWeight: 700 }}>motivated and detail-oriented Web Developer</strong> with hands-on experience building modern, responsive, and user-focused web applications.
          </p>
          <p style={{ color: '#94a3b8', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            I specialise in the <span style={{ color: '#00c9a7', fontWeight: 600 }}>React ecosystem</span> with TypeScript, turning complex problems into elegant, user-friendly products. Currently pursuing a B.Tech in AI & Data Science, I bridge technical depth with design thinking.
          </p>

          {/* tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginTop: 28 }}>
            {TAGS.map(t => (
              <span key={t} style={{ padding: '7px 16px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)', color: '#94a3b8', fontSize: 13, fontWeight: 500 }}>
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
          {STATS.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 + i * 0.08 }}
              style={card}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,201,167,0.25)'; (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,201,167,0.04)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)' }}
            >
              <div style={{ fontSize: 42, fontWeight: 900, color: '#00c9a7', lineHeight: 1, marginBottom: 8 }}>{s.n}</div>
              <div style={{ fontSize: 13, color: '#64748b', fontWeight: 500 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* achievements */}
        <motion.div initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}
          style={{ marginTop: 32, ...card, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '24px' }}
          onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,201,167,0.25)'; (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,201,167,0.04)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)' }}
        >
          <div style={{ fontSize: 13, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Achievement</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 24 }}>🏆</span>
            <span style={{ fontSize: 18, color: '#e2e8f0', fontWeight: 600 }}>AlgoMath Datathon 2026 Winner</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
