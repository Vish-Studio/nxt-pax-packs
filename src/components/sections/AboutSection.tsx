import { Reveal } from '../reveal/Reveal'
import { ParallaxImage } from '../parallax/ParallaxImage'

interface AboutSectionProps {
  factoryImage: string
}

export function AboutSection({ factoryImage }: AboutSectionProps) {
  return (
    <section id="about" className="grid lg:grid-cols-2 min-h-[600px]">
      <Reveal className="relative h-80 lg:h-auto overflow-hidden" y={0}>
        <ParallaxImage
          src={factoryImage}
          alt="PaxPacks packaging supply products"
          className="absolute inset-0 overflow-hidden"
          speed={38}
        />
        <div className="absolute inset-0 bg-green-950/30" />
      </Reveal>

      <div className="bg-green-50 flex flex-col justify-center px-10 lg:px-16 py-20">
        <Reveal>
          <p className="text-green-500 text-xs font-bold uppercase tracking-widest mb-4">How we help</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-950 leading-tight mb-6">
            Switching from plastic<br />should be simple.
          </h2>
          <p className="text-green-800/70 leading-relaxed mb-6">
            PaxPacks helps businesses source bio packaging products that match the way they already operate. We focus on the everyday items your customers touch: carry bags, cups, mailers, takeaway boxes, bowls, lids, and trays.
          </p>
          <p className="text-green-800/70 leading-relaxed mb-10">
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
              <span className="text-green-800 text-sm font-medium">{label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
