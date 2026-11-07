import { Link } from 'react-router-dom'

function Dashboard() {
  // Temporary data for UI development
  const user = {
    name: 'Alex Johnson',
    email: 'alex@example.com',
  }

  // Temporary registration status
  const isRegistered = false

  return (
    <main className="min-h-screen bg-ivory">

      {/* Header */}
      <header className="border-b border-sage/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link to="/" className="font-display text-2xl font-semibold text-forest">
            MatruCare AI
          </Link>

          <Link
            to="/login"
            className="text-sm font-medium text-forest underline underline-offset-4"
          >
            Logout
          </Link>

        </div>
      </header>

      {/* Dashboard Content */}
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
            Participant Dashboard
          </p>

          <h1 className="font-display text-4xl text-forest md:text-5xl">
            Welcome, {user.name}.
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
                {user.name}
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

          {isRegistered ? (
            <div className="mt-6">
              <h2 className="font-display text-3xl text-forest">
                Your registration is confirmed.
              </h2>

              <p className="mt-4 text-muted">
                Your hackathon entry details will appear here.
              </p>
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