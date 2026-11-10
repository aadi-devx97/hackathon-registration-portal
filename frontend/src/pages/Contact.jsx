
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API_BASE_URL from '../config/api'

function Contact() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setSuccess('')

    const token = localStorage.getItem('token')

    if (!token) {
      navigate('/login', { replace: true })
      return
    }

    try {
      setLoading(true)

      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.status === 401) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/login', { replace: true })
        return
      }

      if (!response.ok) {
        throw new Error(data.message || 'Unable to send your message.')
      }

      setSuccess(data.message || 'Your message has been sent successfully.')

      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

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
            to="/dashboard"
            className="text-sm text-forest underline underline-offset-4"
          >
            ← Back to Dashboard
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

            {error && (
              <div className="mt-6 border border-red-300 bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            {success && (
              <div className="mt-6 border border-green-300 bg-green-50 p-4 text-sm text-green-800">
                {success}
              </div>
            )}

            <form
              className="mt-8 space-y-6"
              onSubmit={handleSubmit}
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
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  minLength={10}
                  className="w-full resize-y border border-sage bg-transparent px-4 py-3 outline-none focus:border-forest"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-forest px-7 py-4 font-medium text-ivory transition-colors hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {loading ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Contact
