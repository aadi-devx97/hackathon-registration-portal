import { Link } from 'react-router-dom'

function Signup() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ivory px-6 py-16">

      <div className="w-full max-w-md">

        {/* Brand */}
        <Link to="/" className="font-display text-2xl font-semibold text-forest">
          MatruCare AI
        </Link>

        {/* Heading */}
        <div className="mb-10 mt-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
            Join the Hackathon
          </p>

          <h1 className="font-display text-4xl text-forest">
            Create your account.
          </h1>

          <p className="mt-4 leading-7 text-muted">
            Start your journey. Bring your ideas and build something meaningful.
          </p>
        </div>

        {/* Signup Form */}
        <form className="space-y-6">

          <div>
            <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-charcoal">
              Full Name
            </label>

            <input
              id="fullName"
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              required
              className="w-full border border-sage bg-transparent px-4 py-3 outline-none transition focus:border-forest"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-charcoal">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full border border-sage bg-transparent px-4 py-3 outline-none transition focus:border-forest"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-charcoal">
              Password
            </label>

            <input
              id="password"
              type="password"
              name="password"
              placeholder="Create a password"
              required
              className="w-full border border-sage bg-transparent px-4 py-3 outline-none transition focus:border-forest"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-charcoal">
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Re-enter your password"
              required
              className="w-full border border-sage bg-transparent px-4 py-3 outline-none transition focus:border-forest"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-forest px-6 py-4 font-medium text-ivory transition-colors hover:bg-charcoal"
          >
            Create Account →
          </button>

        </form>

        {/* Login Link */}
        <p className="mt-8 text-center text-sm text-muted">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-forest underline underline-offset-4">
            Login
          </Link>
        </p>

        <p className="mt-8 text-center text-xs text-muted">
          By continuing, you agree to participate under the event's guidelines.
        </p>

      </div>
    </main>
  )
}

export default Signup