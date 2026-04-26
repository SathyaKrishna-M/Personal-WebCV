import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STACK = [
  { label: 'HTML5',      bg: '#e34c26', fg: '#fff', text: 'H5'  },
  { label: 'CSS3',       bg: '#264de4', fg: '#fff', text: 'C3'  },
  { label: 'JavaScript', bg: '#f7df1e', fg: '#1a1a1a', text: 'JS'  },
  { label: 'TypeScript', bg: '#3178c6', fg: '#fff', text: 'TS'  },
  { label: 'React',      bg: '#20232a', fg: '#61dafb', text: '⚛'   },
  { label: 'Next.js',    bg: '#fff',    fg: '#000',    text: 'N'   },
  { label: 'Tailwind',   bg: '#0ea5e9', fg: '#fff', text: 'TW'  },
  { label: 'Firebase',   bg: '#ff6d00', fg: '#fff', text: '🔥'  },
  { label: 'Git',        bg: '#f05032', fg: '#fff', text: 'G'   },
  { label: 'Vercel',     bg: '#000',    fg: '#fff', text: '▲'   },
  { label: 'Framer',     bg: '#0055ff', fg: '#fff', text: 'FM'  },
  { label: 'Zustand',    bg: '#764abc', fg: '#fff', text: 'Z'   },
]

const CATS = [
  { name: 'Frontend',           color: '#00c9a7', skills: ['HTML5','CSS3','JavaScript','TypeScript','React.js','Next.js','Vite','React Router'] },
  { name: 'Styling & Animation',color: '#818cf8', skills: ['Tailwind CSS','Responsive Design','Glassmorphism','Dark UI','Framer Motion','CSS Animations'] },
  { name: 'State & Data',       color: '#34d399', skills: ['React Context','Zustand','IndexedDB','Dexie.js','Firebase Firestore','Firebase Auth'] },
  { name: 'Tools & DevOps',     color: '#f59e0b', skills: ['Git','GitHub','VS Code','Vercel','PWA','ESLint','Performance Optimization','Debugging'] },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="skills" ref={ref} style={{ width: '100%', padding: '96px 24px', background: '#0b0f1a' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', width: '100%' }}>

        {/* header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 999, border: '1px solid rgba(0,201,167,0.25)', background: 'rgba(0,201,167,0.07)', color: '#00c9a7', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
            What I work with
          </span>
          <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 12 }}>Skills & Tech Stack</h2>
          <p style={{ color: '#64748b', fontSize: 15, maxWidth: 400, margin: '0 auto' }}>
            Tools and technologies I use to ship modern, performant web applications.
          </p>
        </motion.div>

        {/* tech icon strip */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
          style={{ borderRadius: 20, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)', padding: '32px 28px', marginBottom: 28 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
            {STACK.map((t, i) => (
              <motion.div key={t.label}
                initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.15 + i * 0.04 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, cursor: 'default' }}
                onMouseEnter={e => (e.currentTarget.querySelector('.icon') as HTMLElement).style.transform = 'scale(1.15) translateY(-2px)'}
                onMouseLeave={e => (e.currentTarget.querySelector('.icon') as HTMLElement).style.transform = 'scale(1)'}
              >
                <div className="icon" style={{ width: 46, height: 46, borderRadius: 12, background: t.bg, color: t.fg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 900, border: '1px solid rgba(255,255,255,0.08)', transition: 'transform 0.2s', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                  {t.text}
                </div>
                <span style={{ fontSize: 11, color: '#64748b', fontWeight: 500 }}>{t.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* category cards — 2×2 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 16 }}>
          {CATS.map((cat, ci) => (
            <motion.div key={cat.name}
              initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25 + ci * 0.07 }}
              style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)', padding: '22px 20px', transition: 'border-color 0.3s' }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = `${cat.color}30`}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: cat.color, flexShrink: 0 }} />
                <span style={{ fontWeight: 700, color: '#e2e8f0', fontSize: 13, letterSpacing: '0.02em' }}>{cat.name}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.skills.map(s => (
                  <span key={s} style={{ padding: '5px 11px', borderRadius: 8, border: `1px solid ${cat.color}25`, background: `${cat.color}0a`, color: cat.color, fontSize: 12, fontWeight: 500 }}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
