function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28"
    >
      {/* Left: Hero Content */}
      <div className="max-w-xl">

        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
          MatruCare AI Hackathon 2026
        </p>

        <h1 className="font-display text-5xl leading-tight text-forest md:text-6xl">
          Ideas that challenge.
          <span className="block italic">
            Solutions that matter.
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-base leading-8 text-muted">
          Bring your team, build something meaningful, and compete
          with the next generation of innovators.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">

          <a
            href="/signup"
            className="bg-forest px-7 py-4 font-medium text-ivory transition-colors hover:bg-charcoal"
          >
            Register Now ↗
          </a>

          <a
            href="#about"
            className="border border-forest px-7 py-4 font-medium text-forest transition-colors hover:bg-sage/30"
          >
            Explore Event ↓
          </a>

        </div>
      </div>

      {/* Right: Abstract Visual */}
      <div className="relative flex min-h-80 items-center justify-center overflow-hidden rounded-2xl bg-[#E8E9DF] p-8">

        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-forest/20" />

        <div className="absolute -bottom-16 -left-12 h-56 w-56 rounded-full border border-terracotta/40" />

        <div className="relative z-10 w-full max-w-sm">

          <div className="flex items-center justify-between">
            <span className="font-display text-5xl text-forest">01</span>
            <span className="text-xs tracking-widest text-muted">
              THE NEXT CHAPTER
            </span>
          </div>

          <div className="my-6 h-px bg-forest/20" />

          <h2 className="font-display text-4xl leading-tight text-forest">
            Think.
            <br />
            Create.
            <br />
            Transform.
          </h2>

          <div className="mt-8 flex justify-end">
            <span className="text-sm font-medium text-terracotta">
              INNOVATION / 2026
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero