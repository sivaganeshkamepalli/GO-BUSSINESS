import { useState } from 'react'
import './Navbar.css'

const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#6C5CE7" />
    <path d="M10 16 Q16 8 22 16 Q16 24 10 16Z" fill="white" opacity="0.9" />
    <circle cx="22" cy="20" r="4" fill="#5A4BD1" />
  </svg>
)

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
)

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = ['Home', 'About Us', 'Courses', 'Projects', 'Contact']

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <LogoIcon />
          <span className="logo-text">Go Business<span className="logo-dot">.</span></span>
        </div>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link}>
              <a href="#" className="nav-link">{link}</a>
            </li>
          ))}
          <li className="mobile-cta">
            <button className="btn-try">Try for free</button>
          </li>
        </ul>

        <div className="navbar-right">
          <button className="btn-try desktop-only">Try for free</button>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
