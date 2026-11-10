
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API_BASE_URL from '../config/api'

function Login() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')

    try {
      setLoading(true)

      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Login failed.')
      }

      // Save the JWT and user details for authenticated requests.
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))

      navigate('/dashboard')
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

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
        <form className="space-y-6" onSubmit={handleSubmit}>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-charcoal">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full border border-sage bg-transparent px-4 py-3 outline-none transition focus:border-forest"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-forest px-6 py-4 font-medium text-ivory transition-colors hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Logging in...' : 'Login →'}
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
