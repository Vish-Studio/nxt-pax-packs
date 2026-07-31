import { ImageWithFallback } from '@/components/image-with-fallback/image-with-fallback'
import { ParallaxImage } from '@/components/parallax-image/parallax-image'
import { Reveal } from '@/components/reveal/reveal'

interface ImpactSectionProps {
  forestImage: string
  stats: Array<{ value: string; label: string }>
  galleryImages: string[]
}

export function ImpactSection({ forestImage, stats, galleryImages }: ImpactSectionProps) {
  return (
    <section id="impact" className="relative overflow-hidden bg-green-900 py-28">
      <div className="absolute inset-0">
        <ParallaxImage
          src={forestImage}
          alt=""
          ariaHidden
          className="absolute inset-0 overflow-hidden"
          imageClassName="opacity-20"
          speed={52}
        />
        <div className="absolute inset-0 bg-green-950/60" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-16 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-green-400">Why clients switch</p>
          <h2 className="text-4xl font-extrabold text-white md:text-5xl">Bio packaging that still works at volume.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-green-100/70">
            The goal is not a feel-good swap. It is packaging your team can stock, hand to customers, ship with, and reorder confidently.
          </p>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-3xl bg-green-700/30 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label }, index) => (
            <Reveal key={label} className="bg-green-900/60 px-10 py-12 text-center backdrop-blur-sm transition-colors hover:bg-green-800/60" delay={index * 0.07}>
              <div className="mb-2 text-5xl font-extrabold text-white lg:text-6xl">{value}</div>
              <div className="text-sm font-medium text-green-400/80">{label}</div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {galleryImages.map((url, index) => (
            <Reveal key={`${url}-${index}`} className="h-52 overflow-hidden rounded-2xl bg-green-800" delay={index * 0.08}>
              <ImageWithFallback src={url} alt="PaxPacks in action" className="h-full w-full object-cover opacity-80 transition-opacity hover:opacity-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

