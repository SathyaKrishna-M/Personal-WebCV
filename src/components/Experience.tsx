import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CERTS = [
  { name: 'Responsive Web Design',                  org: 'freeCodeCamp', color: '#00c9a7' },
  { name: 'JavaScript Algorithms & Data Structures', org: 'freeCodeCamp', color: '#f59e0b' },
  { name: 'React – Frontend Development Libraries',  org: 'freeCodeCamp', color: '#61dafb' },
]

const HIGHLIGHTS = [
  { label: 'UI/UX Focus',    sub: 'Pixel-perfect interfaces'   },
  { label: 'Performance',    sub: 'Fast & optimised apps'       },
  { label: 'Architecture',   sub: 'Scalable codebases'          },
  { label: 'Teamwork',       sub: 'Collaboration & open source' },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  const subHead = (label: string, emoji: string) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
      <div style={{ width: 30, height: 30, borderRadius: 9, background: '#00c9a7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>
        {emoji}
      </div>
      <span style={{ color: '#e2e8f0', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.07)', marginLeft: 4 }} />
    </div>
  )

  return (
    <section id="experience" ref={ref} style={{ width: '100%', padding: '96px 24px', background: '#080c15' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', width: '100%' }}>

        {/* header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 999, border: '1px solid rgba(0,201,167,0.25)', background: 'rgba(0,201,167,0.07)', color: '#00c9a7', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
            My Journey
          </span>
          <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, color: '#fff', lineHeight: 1.1 }}>Experience & Certifications</h2>
        </motion.div>

        {/* two-col grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>

          {/* ── LEFT: Experience ── */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.1 }}>
            {subHead('Experience', '💼')}

            {/* timeline entry */}
            <div style={{ position: 'relative', paddingLeft: 24, borderLeft: '2px solid rgba(0,201,167,0.18)', marginBottom: 20 }}>
              <div style={{ position: 'absolute', left: -9, top: 8, width: 16, height: 16, borderRadius: '50%', border: '2px solid #00c9a7', background: '#080c15' }} />
              <div style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)', padding: 22, transition: 'border-color 0.3s' }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,201,167,0.2)'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap', marginBottom: 14 }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: '#e2e8f0', marginBottom: 3 }}>Independent Web Developer</div>
                    <div style={{ fontSize: 13, color: '#64748b' }}>Self-Employed</div>
                  </div>
                  <span style={{ padding: '4px 12px', borderRadius: 999, border: '1px solid rgba(0,201,167,0.25)', background: 'rgba(0,201,167,0.08)', color: '#00c9a7', fontSize: 12, fontWeight: 600, flexShrink: 0 }}>
                    2023 – Present
                  </span>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {[
                    'Built 3+ production-level web apps with real users from scratch',
                    'Focused on scalable, responsive and user-friendly solutions',
                    'Collaborated with users and peers to ship high-quality products',
                    'Strong emphasis on performance optimisation and clean architecture',
                  ].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13.5, color: '#94a3b8', lineHeight: 1.6 }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#00c9a7', flexShrink: 0, marginTop: 7 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2×2 mini cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {HIGHLIGHTS.map((h, i) => (
                <motion.div key={h.label}
                  initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.35 + i * 0.07 }}
                  style={{ borderRadius: 14, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)', padding: '16px 14px', transition: 'border-color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,201,167,0.2)'}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'}>
                  <div style={{ fontWeight: 600, color: '#e2e8f0', fontSize: 13, marginBottom: 4 }}>{h.label}</div>
                  <div style={{ color: '#64748b', fontSize: 12, lineHeight: 1.5 }}>{h.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Certifications ── */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.2 }}>
            {subHead('Certifications', '🏆')}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
              {CERTS.map((c, i) => (
                <motion.div key={c.name}
                  initial={{ opacity: 0, x: 16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.09 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, borderRadius: 16, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)', padding: '16px 18px', transition: 'border-color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = `${c.color}30`}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'}>
                  <div style={{ width: 38, height: 38, borderRadius: 11, background: `${c.color}15`, border: `1px solid ${c.color}30`, color: c.color, fontWeight: 900, fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    ✓
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 600, color: '#e2e8f0', fontSize: 13, lineHeight: 1.35 }}>{c.name}</div>
                    <div style={{ color: '#64748b', fontSize: 12, marginTop: 3 }}>{c.org}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* quote */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.58 }}
              style={{ borderRadius: 16, border: '1px solid rgba(0,201,167,0.2)', background: 'rgba(0,201,167,0.05)', padding: '20px 20px 18px', position: 'relative' }}>
              <div style={{ fontSize: 32, color: 'rgba(0,201,167,0.15)', fontWeight: 900, lineHeight: 1, marginBottom: 8, fontFamily: 'Georgia, serif' }}>"</div>
              <p style={{ color: '#00c9a7', fontStyle: 'italic', fontWeight: 600, fontSize: 14, lineHeight: 1.65 }}>
                Building digital experiences that are fast, beautiful and meaningful.
              </p>
              <p style={{ color: '#64748b', fontSize: 12, marginTop: 10 }}>— Sathya Krishna</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
