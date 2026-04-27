import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import babuhubLogo from '../assets/babuhub-logo.svg'
import trackntradeLogo from '../assets/trackntrade-logo.png'
import babuhubSS from '../assets/babuhub-ss.png'
import qtSS from '../assets/qtdairy-ss.png'
import trackntradeSS from '../assets/trackntrade-ss.png'

const GH = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
const EX = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>

interface Project {
  title: string
  sub: string
  url: string
  github: string
  logo: string | null
  logoBg: string
  ss: string
  ssBg: string
  desc: string
  bullets: string[]
  tags: string[]
  accent: string
  mono: string
}

const PROJECTS: Project[] = [
  {
    title: 'Babuhub',
    sub: 'Interactive Java Learning Platform',
    url: 'https://babuhub.vercel.app',
    github: 'https://github.com/SathyaKrishna-M/JavaPrep',
    logo: babuhubLogo,
    logoBg: '#0d1a33',
    ss: babuhubSS,
    ssBg: '#0d1a33',
    desc: 'A next-generation platform for mastering Java through animated visualizations and step-by-step code execution, with a real-time memory visualizer showing stack and heap states.',
    bullets: [
      'Animated code visualization engine for step-by-step execution & variable tracking',
      'Real-time stack / heap memory visualizer and Mermaid.js diagrams across 9 Java topics',
      'Modern glassmorphism UI — Next.js 14, Framer Motion & React Flow',
    ],
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Flow', 'Mermaid.js'],
    accent: '#00c9a7',
    mono: 'BB',
  },
  {
    title: 'QT – Quality Time',
    sub: 'Encrypted Journaling App',
    url: 'https://qtdiary.vercel.app/',
    github: 'https://github.com/SathyaKrishna-M/SelfJournal',
    logo: null,
    logoBg: 'rgba(129,140,248,0.15)',
    ss: qtSS,
    ssBg: '#f5f0e8',
    desc: 'A privacy-first digital journal with zero-knowledge AES-GCM encryption. Offline-first PWA with Google Drive backup, calendar visualization, and a beautiful book-like UX.',
    bullets: [
      'Client-side AES-GCM encryption — zero plaintext ever leaves the device',
      'Offline-first PWA using IndexedDB (Dexie.js) with full-text search',
      'Google Drive encrypted backup, calendar view & Tiptap rich-text editor',
    ],
    tags: ['React 19', 'TypeScript', 'Zustand', 'Dexie.js', 'Web Crypto API', 'PWA'],
    accent: '#818cf8',
    mono: 'QT',
  },
  {
    title: 'TracknTrade',
    sub: 'Trading Analytics Dashboard',
    url: 'https://trackntrade.vercel.app',
    github: 'https://github.com/SathyaKrishna-M/TradeJournal',
    logo: trackntradeLogo,
    logoBg: '#00a374',
    ss: trackntradeSS,
    ssBg: '#0a0f0d',
    desc: 'A real-time analytics dashboard for funded traders to track equity curves, drawdown limits, P&L calendars, and performance radar charts with MT5 import and Firebase sync.',
    bullets: [
      'Real-time equity curve, drawdown tracker & performance radar (Recharts)',
      'Interactive P&L calendar with colour-coded daily indicators',
      'MT5 HTML import, Firebase real-time sync & fully responsive dark UI',
    ],
    tags: ['React 18', 'TypeScript', 'Firebase', 'Recharts', 'shadcn/ui', 'Tailwind CSS'],
    accent: '#34d399',
    mono: 'TR',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="projects" ref={ref} style={{ width: '100%', padding: '96px 24px', background: '#080c15' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', width: '100%' }}>

        {/* header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: 999, border: '1px solid rgba(0,201,167,0.25)', background: 'rgba(0,201,167,0.07)', color: '#00c9a7', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
            What I've built
          </span>
          <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 12 }}>Featured Projects</h2>
          <p style={{ color: '#64748b', fontSize: 15, maxWidth: 420, margin: '0 auto' }}>
            Production-ready apps with real users, built with modern tech stacks.
          </p>
        </motion.div>

        {/* project cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {PROJECTS.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: i * 0.13 }}
              className="proj-card"
              style={{ borderRadius: 20, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)', overflow: 'hidden', transition: 'border-color 0.3s' }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = `${p.accent}35`}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)'}
            >
              {/* top accent line */}
              <div style={{ height: 2, background: `linear-gradient(to right, ${p.accent}, transparent)` }} />

              <div className="proj-inner">
                {/* ── Screenshot panel ── */}
                <div className="proj-ss-panel" style={{ background: p.ssBg, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                  {/* browser chrome bar */}
                  <div style={{ background: 'rgba(0,0,0,0.35)', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'block', flexShrink: 0 }} />
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'block', flexShrink: 0 }} />
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'block', flexShrink: 0 }} />
                    <div style={{ flex: 1, height: 18, borderRadius: 4, background: 'rgba(255,255,255,0.08)', marginLeft: 6, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
                      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>{p.url.replace('https://', '')}</span>
                    </div>
                  </div>
                  {/* screenshot image */}
                  <div style={{ overflow: 'hidden', flex: 1 }}>
                    <img
                      src={p.ss}
                      alt={`${p.title} screenshot`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.4s ease' }}
                      onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)'}
                      onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'}
                    />
                  </div>
                </div>

                {/* ── Content panel ── */}
                <div className="proj-content" style={{ padding: '24px 24px 22px', display: 'flex', flexDirection: 'column', minWidth: 0 }}>

                  {/* title row */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
                      {/* logo / monogram */}
                      <div style={{ width: 44, height: 44, borderRadius: 12, background: p.logoBg, border: `1px solid ${p.accent}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden', padding: p.logo ? 7 : 0 }}>
                        {p.logo
                          ? <img src={p.logo} alt={p.title + ' logo'} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                          : <span style={{ fontWeight: 900, fontSize: 14, color: p.accent }}>{p.mono}</span>}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', lineHeight: 1.2, margin: 0 }}>{p.title}</h3>
                        <p style={{ fontSize: 12, color: '#64748b', margin: '3px 0 0' }}>{p.sub}</p>
                      </div>
                    </div>
                    {/* action links */}
                    <div style={{ display: 'flex', gap: 7, flexShrink: 0 }}>
                      {[
                        { href: p.github, icon: <GH />, hover: '#e2e8f0' },
                        { href: p.url, icon: <EX />, hover: p.accent },
                      ].map((btn, bi) => (
                        <a key={bi} href={btn.href} target="_blank" rel="noopener noreferrer"
                          style={{ width: 34, height: 34, borderRadius: 9, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', textDecoration: 'none', transition: 'color 0.2s, border-color 0.2s' }}
                          onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = btn.hover; el.style.borderColor = 'rgba(255,255,255,0.22)' }}
                          onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = '#64748b'; el.style.borderColor = 'rgba(255,255,255,0.1)' }}>
                          {btn.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* live url */}
                  <a href={p.url} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: 11.5, color: p.accent, textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 12, opacity: 0.8 }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
                    {p.url.replace('https://', '')}
                  </a>

                  {/* description */}
                  <p style={{ color: '#94a3b8', fontSize: 13.5, lineHeight: 1.7, marginBottom: 14 }}>{p.desc}</p>

                  {/* bullets */}
                  <ul style={{ listStyle: 'none', marginBottom: 16, display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {p.bullets.map(b => (
                      <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 13, color: '#94a3b8', lineHeight: 1.6 }}>
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: p.accent, flexShrink: 0, marginTop: 7 }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 'auto' }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ padding: '4px 9px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', color: '#64748b', fontSize: 11.5, fontWeight: 500 }}>
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* responsive styles */}
      <style>{`
        .proj-inner {
          display: flex;
          flex-direction: row;
        }
        .proj-ss-panel {
          width: 42%;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .proj-content {
          flex: 1;
        }
        @media (max-width: 680px) {
          .proj-inner { flex-direction: column; }
          .proj-ss-panel { width: 100%; min-height: 200px; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
        }
      `}</style>
    </section>
  )
}
