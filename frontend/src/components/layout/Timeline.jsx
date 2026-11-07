function Timeline() {
  const events = [
    {
      number: '01',
      title: 'Registrations Open',
      description: 'Registration begins. Assemble your team and submit your entry.',
      date: 'DATE TO BE ANNOUNCED',
    },
    {
      number: '02',
      title: 'Registration Closes',
      description: 'The final opportunity to submit your hackathon registration.',
      date: 'DATE TO BE ANNOUNCED',
    },
    {
      number: '03',
      title: 'Project Development',
      description: 'Work with your team and bring your project idea to life.',
      date: 'DATE TO BE ANNOUNCED',
    },
    {
      number: '04',
      title: 'Final Showcase',
      description: 'Present your work and demonstrate your solution.',
      date: 'DATE TO BE ANNOUNCED',
    },
  ]

  return (
    <section className="bg-[#E8E9DF]">
      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
            The Journey
          </p>

          <h2 className="font-display text-4xl leading-tight text-forest md:text-5xl">
            From first idea to
            <span className="italic"> final showcase.</span>
          </h2>

          <p className="mt-6 leading-8 text-muted">
            Every great project has a journey. Here's how the
            hackathon unfolds.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">

          {events.map((event) => (
            <article
              key={event.number}
              className="border-t border-forest/20 pt-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl text-terracotta">
                  {event.number}
                </span>

                <span className="text-xs tracking-wider text-muted">
                  {event.date}
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl text-forest">
                {event.title}
              </h3>

              <p className="mt-3 max-w-md leading-7 text-muted">
                {event.description}
              </p>
            </article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Timeline