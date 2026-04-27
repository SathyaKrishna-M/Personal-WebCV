import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const ROLES = ['Web Developer', 'React Developer', 'Frontend Engineer', 'UI/UX Enthusiast']

const GH = () => <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
const ML = () => <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>

function useTypewriter(words: string[], speed = 80, pause = 2200) {
  const [text, setText] = useState('')
  const [wi, setWi] = useState(0)
  const [ci, setCi] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[wi]
    const t = setTimeout(() => {
      if (!del) {
        setText(w.slice(0, ci + 1))
        if (ci + 1 === w.length) setTimeout(() => setDel(true), pause)
        else setCi(c => c + 1)
      } else {
        setText(w.slice(0, ci - 1))
        if (ci - 1 === 0) { setDel(false); setWi(i => (i + 1) % words.length); setCi(0) }
        else setCi(c => c - 1)
      }
    }, del ? speed / 2 : speed)
    return () => clearTimeout(t)
  }, [ci, del, wi, words, speed, pause])
  return text
}

function Particles() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current!; const ctx = c.getContext('2d')!
    let id: number; let W = (c.width = window.innerWidth); let H = (c.height = window.innerHeight)
    const pts = Array.from({ length: 50 }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.2 + 0.3, dx: (Math.random() - .5) * .22, dy: (Math.random() - .5) * .22, o: Math.random() * .35 + .05 }))
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      pts.forEach(p => { ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(0,201,167,${p.o})`; ctx.fill(); p.x += p.dx; p.y += p.dy; if (p.x < 0 || p.x > W) p.dx *= -1; if (p.y < 0 || p.y > H) p.dy *= -1 })
      id = requestAnimationFrame(draw)
    }
    draw()
    const rs = () => { W = c.width = window.innerWidth; H = c.height = window.innerHeight }
    window.addEventListener('resize', rs)
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', rs) }
  }, [])
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
}

const SOCIALS = [
  { icon: <GH />, href: 'https://github.com/SathyaKrishna-M', label: 'GitHub' },
  { icon: <ML />, href: 'mailto:sathyamaragani@gmail.com', label: 'Email' },
]

export default function Hero() {
  const role = useTypewriter(ROLES)

  return (
    <section id="hero" style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <Particles />

      {/* glow */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(0,201,167,0.07) 0%, transparent 100%)', pointerEvents: 'none' }} />

      {/* dot grid */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'radial-gradient(circle, rgba(0,201,167,0.1) 1px, transparent 1px)', backgroundSize: '44px 44px', maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)' }} />

      {/* content */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 760, margin: '0 auto', padding: '0 24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* badge */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 999, border: '1px solid rgba(0,201,167,0.3)', background: 'rgba(0,201,167,0.07)', color: '#00c9a7', fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', marginBottom: 28 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#00c9a7', animation: 'pulse 2s infinite' }} />
          Available for Work
        </motion.div>

        {/* name */}
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.65 }}
          style={{ fontSize: 'clamp(48px, 8vw, 88px)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.03em', color: '#fff', marginBottom: 18 }}>
          Sathya{' '}
          <span style={{ color: '#00c9a7', display: 'inline' }}>Krishna</span>
        </motion.h1>

        {/* typewriter */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontSize: 'clamp(18px,3vw,24px)', color: '#94a3b8', fontWeight: 500, marginBottom: 18, minHeight: 36 }}>
          <span style={{ color: '#00c9a7', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9em' }}>{'>'}</span>
          <span>{role}</span>
          <span style={{ display: 'inline-block', width: 2, height: 26, background: '#00c9a7', animation: 'blink 1s step-end infinite' }} />
        </motion.div>

        {/* tagline */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          style={{ color: '#64748b', fontSize: 16, lineHeight: 1.7, maxWidth: 440, marginBottom: 36 }}>
          Building digital experiences that are fast, beautiful and meaningful — turning ideas into production-ready web apps.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
          style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}>
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ padding: '12px 28px', borderRadius: 12, background: '#00c9a7', color: '#0b0f1a', fontWeight: 700, fontSize: 14, border: 'none', cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.2s, transform 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#00dbb6'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#00c9a7'; e.currentTarget.style.transform = 'translateY(0)' }}>
            View Projects
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ padding: '12px 28px', borderRadius: 12, border: '1.5px solid rgba(255,255,255,0.12)', background: 'transparent', color: '#e2e8f0', fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit', transition: 'border-color 0.2s, background 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,201,167,0.4)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'transparent' }}>
            Contact Me
          </button>
        </motion.div>

        {/* socials */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          {SOCIALS.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              style={{ width: 42, height: 42, borderRadius: 11, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', transition: 'color 0.2s, border-color 0.2s, background 0.2s', textDecoration: 'none' }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.color = '#00c9a7'; el.style.borderColor = 'rgba(0,201,167,0.35)'; el.style.background = 'rgba(0,201,167,0.08)' }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.color = '#64748b'; el.style.borderColor = 'rgba(255,255,255,0.1)'; el.style.background = 'rgba(255,255,255,0.04)' }}>
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', color: '#475569' }}>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>

      {/* bottom gradient */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 140, background: 'linear-gradient(to bottom, transparent, #0b0f1a)', pointerEvents: 'none' }} />

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  )
}
