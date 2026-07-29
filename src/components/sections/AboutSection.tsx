import { Reveal } from '../reveal/Reveal'

interface AboutSectionProps {
  factoryImage: string
}

export function AboutSection({ factoryImage }: AboutSectionProps) {
  return (
    <section id="about" className="grid lg:grid-cols-2 min-h-[600px]">
      <Reveal className="relative h-80 lg:h-auto overflow-hidden" y={0}>
        <img src={factoryImage} alt="PaxPacks manufacturing team" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-green-950/30" />
      </Reveal>

      <div className="bg-green-50 flex flex-col justify-center px-10 lg:px-16 py-20">
        <Reveal>
          <p className="text-green-500 text-xs font-bold uppercase tracking-widest mb-4">Who we are</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-950 leading-tight mb-6">
            Bio packaging,<br />built for business.
          </h2>
          <p className="text-green-800/70 leading-relaxed mb-6">
            PaxPacks was founded on a single belief: sustainable packaging should be the default, not the premium. We source and supply exclusively bio-based products — from plant starch bags to bagasse containers — so every order you place is good for the planet.
          </p>
          <p className="text-green-800/70 leading-relaxed mb-10">
            Every product we carry is third-party certified compostable. We don't sell conventional packaging — bio is all we do.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: '🌿', label: 'Plant-based feedstocks only' },
            { icon: '🌾', label: 'Cassava, sugarcane & PLA only' },
            { icon: '🔬', label: 'Third-party certified compostable' },
            { icon: '🚚', label: 'Delivered in 5–7 business days' },
          ].map(({ icon, label }, index) => (
            <Reveal key={label} className="flex items-center gap-3" delay={index * 0.06} y={18}>
              <span className="text-xl">{icon}</span>
              <span className="text-green-800 text-sm font-medium">{label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
