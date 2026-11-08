import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-sage/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Brand */}
        <Link to="/" className="font-display text-2xl font-semibold text-forest">
          MatruCare AI
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>

          <Link
            to="/signup"
            className="rounded-md bg-forest px-5 py-3 text-ivory"
          >
            Sign up
          </Link>
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

          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>

          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>

          <Link to="/login" onClick={() => setIsMenuOpen(false)}>
            Login
          </Link>

          <Link
            to="/signup"
            onClick={() => setIsMenuOpen(false)}
            className="font-semibold text-forest"
          >
            Sign up →
          </Link>

        </div>
      )}         
    </header>
  )
}

export default Navbar