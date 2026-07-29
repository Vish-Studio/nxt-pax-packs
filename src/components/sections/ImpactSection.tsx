import { Reveal } from '../reveal/Reveal'
import { ParallaxImage } from '../parallax/ParallaxImage'

interface ImpactSectionProps {
  forestImage: string
  stats: Array<{ value: string; label: string }>
  galleryImages: string[]
}

export function ImpactSection({ forestImage, stats, galleryImages }: ImpactSectionProps) {
  return (
    <section id="impact" className="relative py-28 bg-green-900 overflow-hidden">
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
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center mb-16">
          <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-3">Why clients switch</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Bio packaging that still works at volume.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-green-100/70">
            The goal is not a feel-good swap. It is packaging your team can stock, hand to customers, ship with, and reorder confidently.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-green-700/30 rounded-3xl overflow-hidden">
          {stats.map(({ value, label }, index) => (
            <Reveal key={label} className="bg-green-900/60 backdrop-blur-sm px-10 py-12 text-center hover:bg-green-800/60 transition-colors" delay={index * 0.07}>
              <div className="text-5xl lg:text-6xl font-extrabold text-white mb-2">{value}</div>
              <div className="text-green-400/80 text-sm font-medium">{label}</div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {galleryImages.map((url, i) => (
            <Reveal key={`${url}-${i}`} className="rounded-2xl overflow-hidden h-52 bg-green-800" delay={i * 0.08}>
              <img src={url} alt="PaxPacks in action" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
