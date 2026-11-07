function About() {
  const highlights = [
    {
      number: '01',
      title: 'Think Boldly',
      description:
        'Explore challenges and develop ideas that address meaningful problems.',
    },
    {
      number: '02',
      title: 'Build Together',
      description:
        'Collaborate with your team and turn your ideas into working solutions.',
    },
    {
      number: '03',
      title: 'Showcase Your Work',
      description:
        'Present your project and demonstrate what your team has created.',
    },
  ]

  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="max-w-2xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
          About the Hackathon
        </p>

        <h2 className="font-display text-4xl leading-tight text-forest md:text-5xl">
          More than an idea.
          <span className="italic"> A chance to build it.</span>
        </h2>

        <p className="mt-6 leading-8 text-muted">
          Bring your creativity, technical skills and collaborative
          spirit together. Take an idea from concept to creation.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.number}
            className="border-t border-sage pt-6"
          >
            <span className="font-display text-3xl text-terracotta">
              {item.number}
            </span>

            <h3 className="mt-5 font-display text-2xl text-forest">
              {item.title}
            </h3>

            <p className="mt-4 leading-7 text-muted">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default About