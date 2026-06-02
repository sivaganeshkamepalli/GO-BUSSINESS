import './Footer.css'

const LogoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#6C5CE7" />
    <path d="M10 16 Q16 8 22 16 Q16 24 10 16Z" fill="white" opacity="0.9" />
    <circle cx="22" cy="20" r="4" fill="#5A4BD1" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
)

const FOOTER_COLS = [
  {
    heading: 'Company',
    links: ['About', 'Premium', 'Blog', 'Referral Program'],
  },
  {
    heading: 'Help and Support',
    links: ['Contact Us', 'Knowledge Center', 'Premium Support'],
  },
  {
    heading: 'Learning',
    links: ['Learn Hub', 'Tutorials', 'Communities'],
  },
  {
    heading: 'Resources',
    links: ['Third-Party Tools', 'Illustrations', 'Stock Photos'],
  },
  {
    heading: 'Legal',
    links: ['Privacy Policy', 'Terms & Conditions', 'EULA'],
  },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-cols">
          {FOOTER_COLS.map(col => (
            <div key={col.heading} className="footer-col">
              <h4 className="footer-heading">{col.heading.toUpperCase()}</h4>
              <ul className="footer-list">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-logo">
            <LogoIcon />
            <span className="footer-brand">Go Business<span className="footer-dot">.</span></span>
          </div>
          <p className="footer-copyright">© 2024 Go Business, Inc. All rights reserved.</p>
          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href="#" className="social-icon" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" className="social-icon" aria-label="Instagram"><InstagramIcon /></a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
