import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function VerifyOTP() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const inputRefs = useRef([])

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

    const nextIndex = Math.min(pastedDigits.length, 5)
    inputRefs.current[nextIndex]?.focus()
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
        </div>

        <form
          className="space-y-8"
          onSubmit={(event) => event.preventDefault()}
        >
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

          <button
            type="submit"
            className="w-full bg-forest px-6 py-4 font-medium text-ivory transition-colors hover:bg-charcoal"
          >
            Verify Email →
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-muted">
          Didn't receive the code?{' '}
          <button
            type="button"
            className="font-semibold text-forest underline underline-offset-4"
          >
            Resend OTP
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