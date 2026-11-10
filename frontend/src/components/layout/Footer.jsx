import { Link } from 'react-router-dom'

function Footer() {
  const socialLinks = [
    {
      name: 'Website',
      url: 'https://matrucareai.online/',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/matrucare-ai/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/matrucareai/',
    },
  ]

  return (
    <footer className="bg-forest text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="font-display text-3xl">
              MatruCare AI
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-7 text-sage">
              Ideas that challenge. Solutions that matter.
              Build something meaningful with us.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest">
              Explore
            </h3>

            <div className="flex flex-col items-start gap-3 text-sm text-sage">
              <a href="/#home" className="transition-colors hover:text-ivory">
                Home
              </a>

              <a href="/#about" className="transition-colors hover:text-ivory">
                About
              </a>

              <Link to="/contact" className="transition-colors hover:text-ivory">
                Contact
              </Link>

              <Link to="/login" className="transition-colors hover:text-ivory">
                Login
              </Link>

              <Link to="/signup" className="transition-colors hover:text-ivory">
                Sign up
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest">
              Get in touch
            </h3>

            <a
              href="mailto:matrucareai@gmail.com"
              className="text-sm text-sage transition-colors hover:text-ivory"
            >
              matrucareai@gmail.com
            </a>

            <div className="mt-7">
              <p className="mb-4 text-xs uppercase tracking-widest text-sage">
                Connect with us
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage underline-offset-4 transition-colors hover:text-ivory hover:underline"
                  >
                    {social.name} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-sage/30 pt-6 text-xs text-sage sm:flex-row">
          <p>
            © {new Date().getFullYear()} MatruCare AI. All rights reserved.
          </p>

          <p>
            Built for ideas that make a difference.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer