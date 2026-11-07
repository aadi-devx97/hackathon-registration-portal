import { Link } from 'react-router-dom'

function Login() {
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
            Welcome Back
          </p>

          <h1 className="font-display text-4xl text-forest">
            Good to see you again.
          </h1>

          <p className="mt-4 leading-7 text-muted">
            Sign in to continue your hackathon journey.
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-6">

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
              placeholder="Enter your password"
              required
              className="w-full border border-sage bg-transparent px-4 py-3 outline-none transition focus:border-forest"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-forest px-6 py-4 font-medium text-ivory transition-colors hover:bg-charcoal"
          >
            Login →
          </button>

        </form>

        {/* Signup Link */}
        <p className="mt-8 text-center text-sm text-muted">
          Don't have an account?{' '}
          <Link to="/signup" className="font-semibold text-forest underline underline-offset-4">
            Sign up
          </Link>
        </p>

      </div>
    </main>
  )
}

export default Login