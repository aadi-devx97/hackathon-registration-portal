function Prizes() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="max-w-2xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
          Rewards & Recognition
        </p>

        <h2 className="font-display text-4xl leading-tight text-forest md:text-5xl">
          Great ideas deserve
          <span className="italic"> recognition.</span>
        </h2>

        <p className="mt-6 leading-8 text-muted">
          Bring your best work to the table. Official prize
          details and rewards will be announced by the organisers.
        </p>
      </div>

      <div className="mt-14 overflow-hidden rounded-2xl bg-forest p-8 text-ivory md:p-14">

        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sage">
              The opportunity
            </p>

            <h3 className="mt-6 max-w-xl font-display text-4xl leading-tight md:text-5xl">
              Your work.
              <br />
              Your moment.
              <br />
              Your recognition.
            </h3>
          </div>

          <div className="max-w-xs border-t border-sage/40 pt-5">
            <p className="text-sm leading-7 text-sage">
              Prize details to be announced.
              Stay tuned for official updates.
            </p>
          </div>

        </div>

        <div className="mt-14 flex items-center justify-between border-t border-sage/40 pt-5">
          <span className="text-xs tracking-widest text-sage">
            MATRUCARE AI HACKATHON
          </span>

          <span className="font-display text-2xl">2026</span>
        </div>

      </div>
    </section>
  )
}

export default Prizes