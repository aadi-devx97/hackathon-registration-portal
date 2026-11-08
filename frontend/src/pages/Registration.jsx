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

  function handleTeamSizeChange(event) {
    const size = Number(event.target.value)

    setFormData((previousData) => ({
      ...previousData,
      teamSize: event.target.value,

      teamMembers:
        size === 1
          ? []
          : Array.from(
              { length: size },
              (_, index) =>
                previousData.teamMembers[index] || {
                  name: '',
                  email: '',
                }
            ),
    }))
  }

  function handleTeamMemberChange(index, field, value) {
    setFormData((previousData) => {
      const updatedMembers = [...previousData.teamMembers]

      updatedMembers[index] = {
        ...updatedMembers[index],
        [field]: value,
      }

      return {
        ...previousData,
        teamMembers: updatedMembers,
      }
    })
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

        <form 
          className="mt-16 space-y-16"
          onSubmit={(event) => event.preventDefault()}
        >

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
                  pattern="[A-Za-z ]+"
                  title="Name should contain letters and spaces only"
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

          {/* Project Details */}
          <section>
            <h2 className="border-b border-sage pb-4 font-display text-2xl text-forest">
              03. Project Details
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              {/* Project Name */}
              <div className="md:col-span-2">
                <label htmlFor="projectName" className="mb-2 block text-sm font-medium">
                  Project Name
                </label>

                <input
                  id="projectName"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  placeholder="Give your project a name"
                  minLength={5}
                  required
                  className="w-full border border-sage bg-transparent px-4 py-3 outline-none focus:border-forest"
                />
              </div>

              {/* Domain */}
              <div>
                <label htmlFor="domain" className="mb-2 block text-sm font-medium">
                  Domain / Track
                </label>

                <select
                  id="domain"
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  required
                  className="w-full border border-sage bg-ivory px-4 py-3 outline-none focus:border-forest"
                >
                  <option value="">Select domain</option>
                  <option value="AI/ML">AI / ML</option>
                  <option value="Web Development">Web Development</option>
                  <option value="IoT">Internet of Things (IoT)</option>
                  <option value="Cyber Security">Cyber Security</option>
                  <option value="Blockchain">Blockchain</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* PPT Link */}
              <div>
                <label htmlFor="pptLink" className="mb-2 block text-sm font-medium">
                  Project PPT Link
                </label>

                <input
                  id="pptLink"
                  name="pptLink"
                  type="url"
                  value={formData.pptLink}
                  onChange={handleChange}
                  placeholder="https://drive.google.com/..."
                  required
                  className="w-full border border-sage bg-transparent px-4 py-3 outline-none focus:border-forest"
                />
              </div>

              {/* Prototype Link */}
              <div className="md:col-span-2">
                <label htmlFor="prototypeLink" className="mb-2 block text-sm font-medium">
                  Prototype Link
                </label>

                <input
                  id="prototypeLink"
                  name="prototypeLink"
                  type="url"
                  value={formData.prototypeLink}
                  onChange={handleChange}
                  placeholder="GitHub, Figma or live demo URL"
                  required
                  className="w-full border border-sage bg-transparent px-4 py-3 outline-none focus:border-forest"
                />
              </div>

              {/* Optional Demo Video */}
              <div className="md:col-span-2">
                <label htmlFor="demoVideoLink" className="mb-2 block text-sm font-medium">
                  Demo Video Link
                  <span className="ml-2 text-xs font-normal text-muted">
                    (Optional)
                  </span>
                </label>

                <input
                  id="demoVideoLink"
                  name="demoVideoLink"
                  type="url"
                  value={formData.demoVideoLink}
                  onChange={handleChange}
                  placeholder="YouTube or Google Drive link"
                  className="w-full border border-sage bg-transparent px-4 py-3 outline-none focus:border-forest"
                />
              </div>

            </div>
          </section>

          {/* Team Details */}
          <section>
            <h2 className="border-b border-sage pb-4 font-display text-2xl text-forest">
              04. Team Details
            </h2>

            <div className="mt-8 max-w-md">
              <label
                htmlFor="teamSize"
                className="mb-2 block text-sm font-medium"
              >
                Team Size
              </label>

              <select
                id="teamSize"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleTeamSizeChange}
                required
                className="w-full border border-sage bg-ivory px-4 py-3 outline-none focus:border-forest"
              >
                <option value="1">1 — Solo</option>
                <option value="2">2 Members</option>
                <option value="3">3 Members</option>
                <option value="4">4 Members</option>
                <option value="5">5 Members</option>
              </select>
            </div>

            {formData.teamMembers.length > 0 && (
              <div className="mt-10 space-y-8">

                <div>
                  <h3 className="font-display text-xl text-forest">
                    Team Member Information
                  </h3>

                  <p className="mt-2 text-sm text-muted">
                    Enter the name and email address of each team member.
                  </p>
                </div>

                {formData.teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="border-t border-sage pt-6"
                  >
                    <p className="mb-6 font-display text-lg text-forest">
                      Member {index + 1}
                    </p>

                    <div className="grid gap-6 md:grid-cols-2">

                      <div>
                        <label
                          htmlFor={`memberName-${index}`}
                          className="mb-2 block text-sm font-medium"
                        >
                          Member Name
                        </label>

                        <input
                          id={`memberName-${index}`}
                          type="text"
                          value={member.name}
                          onChange={(event) =>
                            handleTeamMemberChange(
                              index,
                              'name',
                              event.target.value
                            )
                          }
                          placeholder="Enter member name"
                          required
                          className="w-full border border-sage bg-transparent px-4 py-3 outline-none focus:border-forest"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor={`memberEmail-${index}`}
                          className="mb-2 block text-sm font-medium"
                        >
                          Member Email
                        </label>

                        <input
                          id={`memberEmail-${index}`}
                          type="email"
                          value={member.email}
                          onChange={(event) =>
                            handleTeamMemberChange(
                              index,
                              'email',
                              event.target.value
                            )
                          }
                          placeholder="member@example.com"
                          required
                          className="w-full border border-sage bg-transparent px-4 py-3 outline-none focus:border-forest"
                        />
                      </div>

                    </div>
                  </div>
                ))}

              </div>
            )}

            {formData.teamSize === '1' && (
              <p className="mt-6 text-sm text-muted">
                You're registering as a solo participant. No additional
                team-member details are required.
              </p>
            )}
          </section>

          {/* Form Submission */}
          <div className="border-t border-sage pt-8">

            <p className="mb-6 max-w-2xl text-sm leading-6 text-muted">
              Please review your personal, academic and project details
              before submitting your hackathon registration.
            </p>

            <button
              type="submit"
              className="w-full bg-forest px-7 py-4 font-medium text-ivory transition-colors hover:bg-charcoal sm:w-auto"
            >
              Submit Registration →
            </button>

          </div>

        </form>
      </div>
    </main>
  )
}

export default Registration