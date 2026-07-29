import { ImageWithFallback } from '../ImageWithFallback'
import { Reveal } from '../reveal/Reveal'

interface HeroSectionProps {
  heroImage: string
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  const proofPoints = [
    { value: '2.4M+', label: 'units shipped annually' },
    { value: '180 days', label: 'average biodegradation' },
    { value: '98%', label: 'client reorder rate' },
  ]

  return (
    <section className="relative isolate overflow-hidden bg-green-950 text-white">
      <ImageWithFallback
        src={heroImage}
        alt="Biodegradable packaging products arranged in natural light"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-950 via-green-950/80 to-green-950/25" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-green-950 via-green-950/70 to-transparent" />

      <div className="mx-auto flex min-h-[calc(100svh-2.5rem)] max-w-7xl flex-col justify-end px-6 pb-8 pt-24 sm:px-8 sm:pt-28 lg:px-10 lg:pb-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
          <Reveal className="max-w-4xl" y={20}>
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm font-semibold text-green-100">
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span>EN 13432 certified</span>
              <span className="h-px w-8 bg-green-200/40" />
              <span>ASTM D6400 compliant</span>
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              PaxPacks
              <span className="block text-green-200">biodegradable packaging.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-green-50/85 sm:mt-6 sm:text-lg sm:leading-8">
              Premium plant-based bags, cups, mailers, and food containers for businesses that need certified compostable packaging at commercial volume.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
              <a href="tel:+6512345678" className="rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-950/25 transition hover:-translate-y-0.5 hover:bg-green-400 sm:px-7 sm:py-3.5">
                Call Now
              </a>
              <a href="#products" className="rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-green-200 hover:bg-white/15 sm:px-7 sm:py-3.5">
                Explore Products
              </a>
            </div>
          </Reveal>

          <Reveal className="hidden border-l border-white/20 pl-5 text-green-50/85 sm:block lg:pl-7" delay={0.12} y={20}>
            <p className="text-sm font-semibold text-green-200">Built for daily operations</p>
            <p className="mt-3 text-sm leading-7">
              Durable in transit, compostable after use, and ready to replace common plastic SKUs without slowing procurement.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-3 border-y border-white/20 sm:mt-12">
          {proofPoints.map((item, index) => (
            <Reveal key={item.label} className="border-r border-white/20 px-3 py-4 first:pl-0 last:border-r-0 sm:px-6 sm:py-5 sm:first:pl-0" delay={index * 0.08} y={18}>
              <div className="text-xl font-semibold text-white sm:text-3xl">{item.value}</div>
              <div className="mt-1 text-xs leading-4 text-green-100/75 sm:text-sm">{item.label}</div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-5 flex items-center gap-3 text-sm font-medium text-green-100/80 sm:mt-7" delay={0.18} y={16}>
          <span className="h-px w-10 bg-green-200/50" />
          <span>Plant starch, PLA, cassava, and bagasse formats</span>
        </Reveal>
      </div>
    </section>
  )
}
