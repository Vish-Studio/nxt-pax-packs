import { Reveal } from '@/components/reveal/reveal'

export function AppreciationSection() {
  const keyPoints = ['Brand strategy', 'Website design', 'Launch-ready builds']

  return (
    <section className="bg-green-50 py-14">
      <Reveal className="mx-auto max-w-7xl px-6 lg:px-10" y={18}>
        <div className="grid gap-8 rounded-3xl bg-white/70 px-7 py-8 sm:px-9 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-center lg:px-10">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-green-500">Design credit</p>
            </div>
            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-green-950 md:text-4xl">
              This PaxPacks website was designed by VISH studio.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-green-800/70">
              VISH studio is the independent web design team behind this site. They create focused websites, landing pages, and brand-led digital experiences for businesses that want to present their own offer clearly.
            </p>
          </div>

          <div className="rounded-2xl bg-green-950 p-6 text-white transition-transform duration-300 hover:-translate-y-0.5">
            <div className="grid gap-3">
              {keyPoints.map((item, index) => (
                <div key={item} className="group flex items-center gap-3">
                  <span
                    className="h-2 w-2 rounded-full bg-green-400 transition-transform duration-300 group-hover:scale-125"
                    style={{ transitionDelay: `${index * 40}ms` }}
                  />
                  <span className="text-sm font-semibold text-green-50">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="https://www.vish.studio"
              target="_blank"
              rel="noopener"
              className="group mt-6 flex items-center justify-between gap-5 rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-green-400"
            >
              Visit vish.studio
              <span className="text-lg leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
