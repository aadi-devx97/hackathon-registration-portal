function FinalCTA() {
  return (
    <section className="bg-[#E8E9DF]">
      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
              Your journey starts here
            </p>

            <h2 className="font-display text-4xl leading-tight text-forest md:text-6xl">
              Have an idea?
              <span className="block italic">
                Make it happen.
              </span>
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-muted">
              Gather your team, bring your creativity, and take
              the first step towards building something meaningful.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/signup"
              className="bg-forest px-7 py-4 font-medium text-ivory transition-colors hover:bg-charcoal"
            >
              Register Now ↗
            </a>

            <a
              href="/login"
              className="border border-forest px-7 py-4 font-medium text-forest transition-colors hover:bg-sage/30"
            >
              Login
            </a>
          </div>

        </div>

        <div className="mt-16 border-t border-sage pt-5">
          <p className="text-xs tracking-widest text-muted">
            DON'T JUST IMAGINE IT. BUILD IT.
          </p>
        </div>

      </div>
    </section>
  )
}

export default FinalCTA