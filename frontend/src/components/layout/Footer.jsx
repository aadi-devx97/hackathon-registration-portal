function Footer() {
  return (
    <footer id="contact" className="bg-forest text-ivory">

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
              <a href="#home" className="hover:text-ivory">Home</a>
              <a href="#about" className="hover:text-ivory">About</a>
              <a href="#contact" className="hover:text-ivory">Contact</a>
              <a href="/login" className="hover:text-ivory">Login</a>
              <a href="/signup" className="hover:text-ivory">Sign up</a>
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
              <p className="mb-3 text-xs uppercase tracking-widest text-sage">
                Follow us
              </p>

              <p className="text-sm text-sage">
                Official social links to be added.
              </p>
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