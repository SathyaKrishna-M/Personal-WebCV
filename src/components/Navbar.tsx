import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'

const NAV_LINKS = ['About', 'Projects', 'Skills', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const goto = (id: string) => {
    setOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'background 0.3s, box-shadow 0.3s',
        background: scrolled ? 'rgba(11,15,26,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer' }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: '#00c9a7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Code2 size={17} color="#0b0f1a" />
          </div>
          <span style={{ fontWeight: 800, fontSize: 16, color: '#fff', letterSpacing: 0.2 }}>
            Sathya<span style={{ color: '#00c9a7' }}>Krishna</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden-mobile">
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => goto(l)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', fontSize: 14, fontWeight: 500, padding: '4px 0', transition: 'color 0.2s', fontFamily: 'inherit' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#00c9a7')}
              onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
            >
              {l}
            </button>
          ))}
          <button onClick={() => goto('Contact')}
            style={{ padding: '8px 20px', borderRadius: 10, border: '1.5px solid #00c9a7', background: 'transparent', color: '#00c9a7', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,201,167,0.1)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile burger */}
        <button onClick={() => setOpen(v => !v)} className="show-mobile"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', padding: 4 }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(11,15,26,0.96)', backdropFilter: 'blur(16px)' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '12px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {NAV_LINKS.map(l => (
                <button key={l} onClick={() => goto(l)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', fontSize: 15, fontWeight: 500, textAlign: 'left', padding: '10px 0', fontFamily: 'inherit', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  {l}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
      `}</style>
    </motion.header>
  )
}
