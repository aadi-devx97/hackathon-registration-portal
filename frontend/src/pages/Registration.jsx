import { useState } from 'react'

function Registration() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    college: '',
    course: '',
    branch: '',
    year: '',
    domain: '',
    projectName: '',
    pptLink: '',
    prototypeLink: '',
    demoVideoLink: '',
    teamSize: '1',
    teamMembers: [],
  })

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))
  }

  return (
    <main className="min-h-screen bg-ivory px-6 py-20">
      <div className="mx-auto max-w-4xl">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
          Hackathon Registration
        </p>

        <h1 className="mt-4 font-display text-4xl text-forest">
          Bring your idea to life.
        </h1>

        <p className="mt-4 leading-7 text-muted">
          Tell us about yourself, your team and the project
          you want to build.
        </p>

        <form className="mt-16 space-y-16">

          {/* Personal Details */}
          <section>
            <h2 className="border-b border-sage pb-4 font-display text-2xl text-forest">
              01. Personal Details
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm font-medium">
                  Full Name
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  minLength={3}
                  className="w-full border border-sage bg-transparent px-4 py-3 outline-none focus:border-forest"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
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

              <div className="md:col-span-2">
                <label htmlFor="mobile" className="mb-2 block text-sm font-medium">
                  Mobile Number
                </label>

                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  required
                  pattern="[6-9][0-9]{9}"
                  title="Enter a valid 10-digit Indian mobile number"
                  className="w-full border border-sage bg-transparent px-4 py-3 outline-none focus:border-forest"
                />
              </div>

            </div>
          </section>

          {/* Academic Details */}
          <section>
            <h2 className="border-b border-sage pb-4 font-display text-2xl text-forest">
              02. Academic Details
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div>
                <label htmlFor="college" className="mb-2 block text-sm font-medium">
                  College Name
                </label>

                <input
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Enter your college name"
                  required
                  className="w-full border border-sage bg-transparent px-4 py-3 outline-none focus:border-forest"
                />
              </div>

              <div>
                <label htmlFor="course" className="mb-2 block text-sm font-medium">
                  Course
                </label>

                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full border border-sage bg-ivory px-4 py-3 outline-none focus:border-forest"
                >
                  <option value="">Select course</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="BCA">BCA</option>
                  <option value="MCA">MCA</option>
                  <option value="BSc">BSc</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="branch" className="mb-2 block text-sm font-medium">
                  Branch
                </label>

                <select
                  id="branch"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                  className="w-full border border-sage bg-ivory px-4 py-3 outline-none focus:border-forest"
                >
                  <option value="">Select branch</option>
                  <option value="CSE">Computer Science (CSE)</option>
                  <option value="IT">Information Technology (IT)</option>
                  <option value="ECE">Electronics (ECE)</option>
                  <option value="ME">Mechanical (ME)</option>
                  <option value="CE">Civil (CE)</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="year" className="mb-2 block text-sm font-medium">
                  Year of Study
                </label>

                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="w-full border border-sage bg-ivory px-4 py-3 outline-none focus:border-forest"
                >
                  <option value="">Select year</option>
                  <option value="1st">1st Year</option>
                  <option value="2nd">2nd Year</option>
                  <option value="3rd">3rd Year</option>
                  <option value="4th">4th Year</option>
                </select>
              </div>

            </div>
          </section>

        </form>
      </div>
    </main>
  )
}

export default Registration