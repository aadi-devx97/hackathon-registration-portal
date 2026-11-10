
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API_BASE_URL from '../config/api'

function Dashboard() {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [registration, setRegistration] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchDashboardData() {
      const token = localStorage.getItem('token')

      if (!token) {
        navigate('/login', { replace: true })
        return
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      }

      try {
        // Fetch user profile
        const userResponse = await fetch(`${API_BASE_URL}/user/me`, {
          headers,
        })

        const userData = await userResponse.json()

        if (!userResponse.ok) {
          throw new Error(userData.message || 'Unable to fetch your profile.')
        }

        setUser(userData.user)

        // Fetch hackathon registration
        const registrationResponse = await fetch(
          `${API_BASE_URL}/hackathon/my-entry`,
          { headers }
        )

        const registrationData = await registrationResponse.json()

        if (registrationResponse.status === 404) {
          setRegistration(null)
        } else if (!registrationResponse.ok) {
          throw new Error(
            registrationData.message || 'Unable to fetch registration details.'
          )
        } else {
          setRegistration(registrationData.registration)
        }
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [navigate])

  function handleLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/login', { replace: true })
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-ivory">
        <p className="text-forest">Loading your dashboard...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-ivory px-6">
        <p className="text-center text-red-600">{error}</p>
        <button
          onClick={handleLogout}
          className="bg-forest px-6 py-3 text-ivory"
        >
          Back to Login
        </button>
      </main>
    )
  }

  if (!user) return null

  return (
    <main className="min-h-screen bg-ivory">
      {/* Header */}
      <header className="border-b border-sage/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="font-display text-2xl font-semibold text-forest">
            MatruCare AI
          </Link>

          <button
            onClick={handleLogout}
            className="text-sm font-medium text-forest underline underline-offset-4"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
            Participant Dashboard
          </p>

          <h1 className="font-display text-4xl text-forest md:text-5xl">
            Welcome, {user.fullName}.
          </h1>

          <p className="mt-4 text-muted">
            Manage your account and hackathon participation here.
          </p>
        </div>

        {/* Profile Section */}
        <section className="mt-12 border-t border-sage pt-8">
          <h2 className="font-display text-2xl text-forest">
            Your Profile
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                Full Name
              </p>
              <p className="mt-2 font-medium text-charcoal">
                {user.fullName}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                Email Address
              </p>
              <p className="mt-2 font-medium text-charcoal">
                {user.email}
              </p>
            </div>
          </div>
        </section>

        {/* Registration Status */}
        <section className="mt-16 border-t border-sage pt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
            Hackathon Participation
          </p>

          {registration ? (
            <div className="mt-6">
              <h2 className="font-display text-3xl text-forest">
                Your registration is confirmed.
              </h2>

              <p className="mt-3 text-muted">
                Here are the details of your hackathon entry.
              </p>

              <div className="mt-8 grid gap-6 border border-sage/70 p-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">
                    Project Name
                  </p>
                  <p className="mt-2 font-medium text-charcoal">
                    {registration.projectName}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">
                    Domain / Track
                  </p>
                  <p className="mt-2 font-medium text-charcoal">
                    {registration.domain}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">
                    College
                  </p>
                  <p className="mt-2 font-medium text-charcoal">
                    {registration.college}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">
                    Course
                  </p>
                  <p className="mt-2 font-medium text-charcoal">
                    {registration.course}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">
                    Branch
                  </p>
                  <p className="mt-2 font-medium text-charcoal">
                    {registration.branch}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">
                    Year
                  </p>
                  <p className="mt-2 font-medium text-charcoal">
                    {registration.year}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">
                    Mobile Number
                  </p>
                  <p className="mt-2 font-medium text-charcoal">
                    {registration.mobile}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">
                    Team Size
                  </p>
                  <p className="mt-2 font-medium text-charcoal">
                    {registration.teamSize}
                  </p>
                </div>
              </div>

              {registration.teamMembers?.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-display text-xl text-forest">
                    Team Members
                  </h3>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {registration.teamMembers.map((member, index) => (
                      <div
                        key={index}
                        className="border border-sage/70 p-5"
                      >
                        <p className="text-xs uppercase tracking-widest text-muted">
                          Member {index + 1}
                        </p>
                        <p className="mt-2 font-medium text-charcoal">
                          {member.name}
                        </p>
                        <p className="mt-1 text-sm text-muted">
                          {member.email}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={registration.pptLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-forest underline underline-offset-4"
                >
                  View Project PPT ↗
                </a>

                <a
                  href={registration.prototypeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-forest underline underline-offset-4"
                >
                  View Prototype ↗
                </a>

                {registration.demoVideoLink && (
                  <a
                    href={registration.demoVideoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-forest underline underline-offset-4"
                  >
                    View Demo Video ↗
                  </a>
                )}
              </div>
            </div>
          ) : (
            <div className="mt-6 flex flex-col justify-between gap-8 bg-[#E8E9DF] p-8 md:flex-row md:items-center">
              <div>
                <h2 className="font-display text-3xl text-forest">
                  Your next idea starts here.
                </h2>

                <p className="mt-3 max-w-lg leading-7 text-muted">
                  You haven't registered for the hackathon yet.
                  Complete your registration to participate.
                </p>
              </div>

              <Link
                to="/register"
                className="inline-block bg-forest px-7 py-4 text-center font-medium text-ivory transition-colors hover:bg-charcoal"
              >
                Register Now ↗
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

export default Dashboard
