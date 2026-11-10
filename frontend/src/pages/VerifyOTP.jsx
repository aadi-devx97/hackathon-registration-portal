
import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API_BASE_URL from '../config/api'

function VerifyOTP() {
  const navigate = useNavigate()
  const inputRefs = useRef([])

  const email = sessionStorage.getItem('verificationEmail') || ''

  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [loading, setLoading] = useState(false)
  const [resending, setResending] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  function handleChange(index, value) {
    const digits = value.replace(/\D/g, '')

    if (!digits) {
      setOtp((current) => {
        const updated = [...current]
        updated[index] = ''
        return updated
      })
      return
    }

    const updated = [...otp]
    const characters = digits.split('')

    characters.forEach((digit, offset) => {
      if (index + offset < 6) {
        updated[index + offset] = digit
      }
    })

    setOtp(updated)

    const nextIndex = Math.min(index + characters.length, 5)
    inputRefs.current[nextIndex]?.focus()
  }

  function handleKeyDown(index, event) {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }

    if (event.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }

    if (event.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  function handlePaste(event) {
    event.preventDefault()

    const pastedDigits = event.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, 6)

    if (!pastedDigits) return

    const updated = ['', '', '', '', '', '']

    pastedDigits.split('').forEach((digit, index) => {
      updated[index] = digit
    })

    setOtp(updated)

    inputRefs.current[Math.min(pastedDigits.length, 5)]?.focus()
  }

  async function handleVerify(event) {
    event.preventDefault()
    setError('')
    setMessage('')

    if (!email) {
      setError('Email not found. Please sign up again.')
      return
    }

    const otpValue = otp.join('')

    if (otpValue.length !== 6) {
      setError('Please enter all six digits.')
      return
    }

    try {
      setLoading(true)

      const response = await fetch(`${API_BASE_URL}/auth/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp: otpValue }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'OTP verification failed.')
      }

      sessionStorage.removeItem('verificationEmail')
      setMessage('Email verified successfully! Redirecting to login...')

      setTimeout(() => navigate('/login'), 1500)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function handleResend() {
    setError('')
    setMessage('')

    if (!email) {
      setError('Email not found. Please sign up again.')
      return
    }

    try {
      setResending(true)

      const response = await fetch(`${API_BASE_URL}/auth/resend-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Could not resend OTP.')
      }

      setOtp(['', '', '', '', '', ''])
      setMessage(data.message || 'A new OTP has been sent.')
    } catch (error) {
      setError(error.message)
    } finally {
      setResending(false)
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
            Email Verification
          </p>

          <h1 className="font-display text-4xl text-forest">
            Verify your email.
          </h1>

          <p className="mt-4 leading-7 text-muted">
            We've sent a verification code to your email address.
            Enter the six-digit code below to continue.
          </p>

          {email && (
            <p className="mt-3 text-sm font-medium text-forest">
              {email}
            </p>
          )}
        </div>

        <form className="space-y-8" onSubmit={handleVerify}>
          <div>
            <label className="mb-4 block text-sm font-medium text-charcoal">
              Enter your 6-digit OTP
            </label>

            <div className="grid grid-cols-6 gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(element) => {
                    inputRefs.current[index] = element
                  }}
                  type="text"
                  inputMode="numeric"
                  autoComplete={index === 0 ? 'one-time-code' : 'off'}
                  maxLength={6}
                  value={digit}
                  disabled={loading}
                  onChange={(event) =>
                    handleChange(index, event.target.value)
                  }
                  onKeyDown={(event) =>
                    handleKeyDown(index, event)
                  }
                  onPaste={handlePaste}
                  aria-label={`OTP digit ${index + 1}`}
                  className="h-14 w-full border border-sage bg-transparent text-center text-xl font-semibold text-forest outline-none focus:border-forest"
                />
              ))}
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          {message && (
            <p className="text-sm text-forest" role="status">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !email}
            className="w-full bg-forest px-6 py-4 font-medium text-ivory transition-colors hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Verifying...' : 'Verify Email →'}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-muted">
          Didn't receive the code?{' '}
          <button
            type="button"
            onClick={handleResend}
            disabled={resending || !email}
            className="font-semibold text-forest underline underline-offset-4 disabled:opacity-50"
          >
            {resending ? 'Sending...' : 'Resend OTP'}
          </button>
        </p>

        <p className="mt-4 text-center text-xs text-muted">
          Your verification code expires after 10 minutes.
        </p>

      </div>
    </main>
  )
}

export default VerifyOTP
