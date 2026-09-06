import type { Metadata } from 'next'
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  // 2026-09-04: added after Javari Verify found no canonical on this origin.
  // Without one, the same page at the apex, at www, with a trailing slash and
  // with tracking parameters is treated as four competing pages and the ranking
  // is split between them.
  metadataBase: new URL('https://javariarena.com'),
  // './' resolves per page rather than pinning every route to the homepage,
  // which is the defect found on craudiovizai.com where /apps, /contact and
  // /features all declared themselves duplicates of the home page.
  alternates: { canonical: './' }, title: 'Javari Model Arena', description: 'Compare 300+ AI models side by side — benchmark outputs, find the best model.' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#0a0a0f' }}>
        {/* 2026-09-10: WCAG 2.4.1. Without this a keyboard user traverses the
            entire navigation on every page before reaching anything. Visually
            hidden until focused, which is the point - it is for people who are
            not using a mouse, and it appears the moment they tab. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:outline focus:outline-2"
        >
          Skip to main content
        </a>

        <div style={{ background: 'rgba(0,0,0,0.85)', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
          <a href="https://craudiovizai.com" style={{ color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>
            <span>🤖</span> <span style={{ color: '#8b5cf6' }}>Javari Model Arena</span> <span style={{ color: '#374151', fontSize: 11 }}>· EIN 39-3646201</span>
          </a>
          <a href="https://craudiovizai.com/auth/signup" style={{ background: '#8b5cf6', color: '#fff', borderRadius: 7, padding: '6px 16px', fontSize: 12, fontWeight: 700, textDecoration: 'none' }}>Start Free →</a>
        </div>
        {children}
      </body>
    </html>
  )
}
