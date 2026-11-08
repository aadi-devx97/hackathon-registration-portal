import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-sage/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Brand */}
        <a href="/" className="font-display text-2xl font-semibold text-forest">
          MatruCare AI
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <Link to="/contact">Contact</Link>
          <a href="/login">Login</a>
          <a
            href="/signup"
            className="rounded-md bg-forest px-5 py-3 text-ivory"
          >
            Sign up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-forest md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>

      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="flex flex-col gap-4 border-t border-sage/60 px-6 py-5 md:hidden">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <a href="/login">Login</a>
          <a href="/signup" className="font-semibold text-forest">Sign up →</a>
        </div>
      )}
    </header>
  )
}

export default Navbar