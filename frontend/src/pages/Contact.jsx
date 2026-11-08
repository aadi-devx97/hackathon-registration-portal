import { Link } from 'react-router-dom'

function Contact() {
  return (
    <main className="min-h-screen bg-ivory px-6 py-16">

      <div className="mx-auto max-w-6xl">

        {/* Brand */}        
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-display text-2xl font-semibold text-forest"
          >
            MatruCare AI
          </Link>

          <Link
            to="/"
            className="text-sm text-forest underline underline-offset-4"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Page Heading */}
        <div className="mb-14 mt-20 max-w-2xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
            Get in Touch
          </p>

          <h1 className="font-display text-4xl leading-tight text-forest md:text-6xl">
            Let's start a
            <span className="italic"> conversation.</span>
          </h1>

          <p className="mt-6 leading-8 text-muted">
            Have a question about the hackathon? Send us a message
            and our team will get back to you.
          </p>

        </div>

        {/* Contact Layout */}
        <div className="grid gap-16 md:grid-cols-2">

          {/* Contact Information */}
          <div className="border-t border-sage pt-6">

            <h2 className="font-display text-2xl text-forest">
              We're here to help.
            </h2>

            <p className="mt-4 max-w-sm leading-7 text-muted">
              For questions and enquiries regarding the
              MatruCare AI Hackathon, reach out to us.
            </p>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">
                Email Us
              </p>

              <a
                href="mailto:matrucareai@gmail.com"
                className="mt-3 inline-block text-lg text-forest underline underline-offset-4"
              >
                matrucareai@gmail.com
              </a>
            </div>

          </div>

          {/* Contact Form */}
          <div className="border-t border-sage pt-6">

            <h2 className="font-display text-2xl text-forest">
              Send a message
            </h2>

            <form
              className="mt-8 space-y-6"
              onSubmit={(event) => event.preventDefault()}
            >

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-charcoal"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  minLength={3}
                  className="w-full border border-sage bg-transparent px-4 py-3 outline-none focus:border-forest"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-charcoal"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full border border-sage bg-transparent px-4 py-3 outline-none focus:border-forest"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-charcoal"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help you?"
                  required
                  minLength={10}
                  className="w-full resize-y border border-sage bg-transparent px-4 py-3 outline-none focus:border-forest"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-forest px-7 py-4 font-medium text-ivory transition-colors hover:bg-charcoal sm:w-auto"
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>

      </div>
    </main>
  )
}

export default Contact