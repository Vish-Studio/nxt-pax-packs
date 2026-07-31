import { ParallaxImage } from '@/components/parallax-image/parallax-image'
import { Reveal } from '@/components/reveal/reveal'

interface AboutSectionProps {
  factoryImage: string
}

export function AboutSection({ factoryImage }: AboutSectionProps) {
  return (
    <section id="about" className="grid min-h-[600px] lg:grid-cols-2">
      <Reveal className="relative h-80 overflow-hidden lg:h-auto" y={0}>
        <ParallaxImage
          src={factoryImage}
          alt="PaxPacks packaging supply products"
          className="absolute inset-0 overflow-hidden"
          speed={38}
        />
        <div className="absolute inset-0 bg-green-950/30" />
      </Reveal>

      <div className="flex flex-col justify-center bg-green-50 px-10 py-20 lg:px-16">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-500">How we help</p>
          <h2 className="mb-6 text-4xl font-extrabold leading-tight text-green-950 md:text-5xl">
            Switching from plastic<br />should be simple.
          </h2>
          <p className="mb-6 leading-relaxed text-green-800/70">
            PaxPacks helps businesses source bio packaging products that match the way they already operate. We focus on the everyday items your customers touch: carry bags, cups, mailers, takeaway boxes, bowls, lids, and trays.
          </p>
          <p className="mb-10 leading-relaxed text-green-800/70">
            Call us with your current packaging type, size, and monthly volume. We will guide you toward the closest bio option and explain what works for your use case.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: 'Match your existing plastic bag, cup, or box size' },
            { label: 'Compare materials for strength, heat, and moisture' },
            { label: 'Plan order volumes before switching suppliers' },
            { label: 'Keep customer-facing packaging practical and clean' },
          ].map(({ label }, index) => (
            <Reveal key={label} className="border-t border-green-200 pt-4" delay={index * 0.06} y={18}>
              <span className="text-sm font-medium text-green-800">{label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

