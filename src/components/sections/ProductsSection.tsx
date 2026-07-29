import { Reveal } from '../reveal/Reveal'

interface Product {
  name: string
  tag: string
  desc: string
  img: string
  stat: string
  statLabel: string
}

interface ProductsSectionProps {
  products: Product[]
  activeProduct: number
  onSelectProduct: (index: number) => void
}

export function ProductsSection({ products, activeProduct, onSelectProduct }: ProductsSectionProps) {
  const active = products[activeProduct]

  return (
    <section id="products" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-green-500 text-xs font-bold uppercase tracking-widest mb-3">What we carry</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-green-950 leading-tight">
              Every format.<br />
              Zero compromise.
            </h2>
          </div>
          <p className="text-green-700/60 max-w-xs text-sm leading-relaxed">
            From checkout bags to food containers — 100% bio-based, certified compostable, ready at volume.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0" delay={0.08}>
            {products.map((p, i) => (
              <button
                key={p.name}
                onClick={() => onSelectProduct(i)}
                className={`flex-shrink-0 lg:flex-shrink text-left px-5 py-4 rounded-2xl transition-all font-medium text-sm ${activeProduct === i ? 'bg-green-900 text-white shadow-lg shadow-green-900/20' : 'bg-green-50 text-green-800 hover:bg-green-100'}`}
              >
                <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${activeProduct === i ? 'text-green-400' : 'text-green-500'}`}>
                  {p.tag}
                </div>
                {p.name}
              </button>
            ))}
          </Reveal>

          <Reveal className="lg:col-span-3 grid sm:grid-cols-2 gap-5" delay={0.16}>
            <div className="relative rounded-3xl overflow-hidden bg-green-100 h-64 sm:h-auto sm:row-span-2">
              <img src={active.img} alt={active.name} className="w-full h-full object-cover transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-950/70 to-transparent p-5">
                <div className="text-3xl font-extrabold text-white">{active.stat}</div>
                <div className="text-green-300 text-xs font-semibold">{active.statLabel}</div>
              </div>
            </div>

            <div className="rounded-3xl bg-green-900 text-white p-7 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-green-700 text-green-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  {active.tag}
                </span>
                <h3 className="text-2xl font-extrabold mb-3">{active.name}</h3>
                <p className="text-green-200/70 text-sm leading-relaxed">{active.desc}</p>
              </div>
              <a href="tel:+6512345678" className="mt-6 inline-block text-center bg-green-500 hover:bg-green-400 text-white font-bold text-sm py-3 px-6 rounded-full transition-colors">
                Call about this product
              </a>
            </div>

            <div className="rounded-3xl bg-green-50 border border-green-100 p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl flex-shrink-0">✓</div>
              <div>
                <div className="font-bold text-green-900 text-sm">Certified Compostable</div>
                <div className="text-green-600/60 text-xs mt-0.5">EN 13432 · ASTM D6400 · OK Compost</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
