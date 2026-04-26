export default function Footer() {
  return (
    <footer style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.06)', background: '#080c15', padding: '28px 24px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: '#00c9a7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0b0f1a" strokeWidth="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <span style={{ fontWeight: 800, color: '#fff', fontSize: 14 }}>
            Sathya<span style={{ color: '#00c9a7' }}>Krishna</span>
          </span>
        </div>
        <span style={{ color: '#475569', fontSize: 13 }}>
          Built with React · TypeScript · Tailwind · Framer Motion
        </span>
        <span style={{ color: '#475569', fontSize: 13 }}>
          © {new Date().getFullYear()} Sathya Krishna
        </span>
      </div>
    </footer>
  )
}
