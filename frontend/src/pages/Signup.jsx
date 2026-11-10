
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API_BASE_URL from '../config/api'

function Signup() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
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

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    try {
      setLoading(true)

      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.status === 503 && data.message?.includes('Account created')) {
        sessionStorage.setItem('verificationEmail', formData.email)

        navigate('/verify-otp', {
          state: {
            emailDeliveryFailed: true,
            message: data.message,
          },
        })

        return
      }

      if (!response.ok) {
        throw new Error(data.message || 'Signup failed.')
      }

      sessionStorage.setItem('verificationEmail', formData.email)

      navigate('/verify-otp', {
        state: {
          emailDeliveryFailed: false,
        },
      })
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-ivory px-6 py-16">
      <div className="w-full max-w-md">

        <Link to="/" className="font-display text-2xl font-semibold text-forest">
          MatruCare AI
        </Link>

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

        <form className="space-y-6" onSubmit={handleSubmit}>

          <div>
            <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-charcoal">
              Full Name
            </label>

            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              minLength={3}
              pattern="[A-Za-z ]+"
              title="Name should contain letters and spaces only"
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
              placeholder="Create a password"
              required
              minLength={8}
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
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              required
              minLength={8}
              className="w-full border border-sage bg-transparent px-4 py-3 outline-none transition focus:border-forest"
            />
          </div>

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
            {loading ? 'Creating Account...' : 'Create Account →'}
          </button>

        </form>

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
