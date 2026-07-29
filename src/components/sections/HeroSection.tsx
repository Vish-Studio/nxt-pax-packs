import { ParallaxImage } from '../parallax/ParallaxImage'
import { Reveal } from '../reveal/Reveal'

interface HeroSectionProps {
  heroImage: string
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  const proofPoints = [
    { value: 'Bags', label: 'retail and grocery carry formats' },
    { value: 'Cups', label: 'hot, cold, and lid pairings' },
    { value: 'Boxes', label: 'takeaway and delivery containers' },
  ]

  return (
    <section className="relative isolate overflow-hidden bg-green-950 text-white lg:h-svh">
      <ParallaxImage
        src={heroImage}
        alt="Biodegradable packaging products arranged in natural light"
        className="absolute inset-0 -z-20 overflow-hidden"
        speed={44}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-950 via-green-950/80 to-green-950/25" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-green-950 via-green-950/70 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col justify-end px-6 pb-8 pt-28 sm:px-8 sm:pt-32 lg:h-full lg:px-10 lg:pb-10 lg:pt-28 xl:pt-32">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
          <Reveal className="max-w-3xl" y={20}>
            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold text-green-100 lg:text-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span>Bio product sourcing</span>
              <span className="h-px w-8 bg-green-200/40" />
              <span>Bulk supply for businesses</span>
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Replace plastic packaging
              <span className="block text-green-200">without slowing business.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-green-50/85 sm:mt-6 lg:text-lg lg:leading-8">
              Source biodegradable bags, cups, mailers, and takeaway containers matched to your current SKUs, order volume, and daily operations.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-7">
              <a href="tel:+6512345678" className="rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-950/25 transition hover:-translate-y-0.5 hover:bg-green-400 sm:px-7 sm:py-3.5">
                Call for Pricing
              </a>
              <a href="#products" className="rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-green-200 hover:bg-white/15 sm:px-7 sm:py-3.5">
                Explore Products
              </a>
            </div>
          </Reveal>

          <Reveal className="hidden border-l border-white/20 pl-5 text-green-50/85 sm:block lg:pl-7" delay={0.12} y={20}>
            <p className="text-sm font-semibold text-green-200">What we do</p>
            <p className="mt-3 text-sm leading-7">
              We help shops, restaurants, distributors, and ecommerce teams source practical bio alternatives to everyday plastic packaging.
            </p>
          </Reveal>
        </div>

        <div className="mt-7 grid grid-cols-3 border-y border-white/20 sm:mt-10 lg:mt-8">
          {proofPoints.map((item, index) => (
            <Reveal key={item.label} className="border-r border-white/20 px-3 py-4 first:pl-0 last:border-r-0 sm:px-6 sm:py-4 sm:first:pl-0" delay={index * 0.08} y={18}>
              <div className="text-xl font-semibold text-white sm:text-2xl lg:text-3xl">{item.value}</div>
              <div className="mt-1 text-xs leading-4 text-green-100/75 sm:text-sm">{item.label}</div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-5 flex items-center gap-3 text-sm font-medium text-green-100/80 sm:mt-6" delay={0.18} y={16}>
          <span className="h-px w-10 bg-green-200/50" />
          <span>Plant starch, PLA, cassava, kraft, and bagasse formats</span>
        </Reveal>
      </div>
    </section>
  )
}
