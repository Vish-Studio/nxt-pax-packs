'use client'

import { ImageWithFallback } from '@/components/image-with-fallback/image-with-fallback'
import { Reveal } from '@/components/reveal/reveal'

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
    <section id="products" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-green-500">What you can buy</p>
            <h2 className="text-4xl font-extrabold leading-tight text-green-950 md:text-5xl">
              Replace plastic SKUs<br />
              with bio alternatives.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-green-700/60">
            Choose the product family you need, then call us for sizing, material, lead time, and volume pricing.
          </p>
        </Reveal>

        <Reveal className="mb-8 grid gap-3 md:grid-cols-3" delay={0.06}>
          {[
            'Bulk carton supply for stores and food teams',
            'Bio materials suited to daily customer use',
            'Fast product matching before you order',
          ].map((item) => (
            <div key={item} className="border-t border-green-100 pt-4 text-sm font-semibold text-green-800">
              {item}
            </div>
          ))}
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="flex flex-row gap-2 overflow-x-auto pb-2 lg:col-span-2 lg:flex-col lg:overflow-visible lg:pb-0" delay={0.08}>
            {products.map((product, index) => (
              <button
                key={product.name}
                onClick={() => onSelectProduct(index)}
                className={`flex-shrink-0 rounded-2xl px-5 py-4 text-left text-sm font-medium transition-all lg:flex-shrink ${
                  activeProduct === index ? 'bg-green-900 text-white shadow-lg shadow-green-900/20' : 'bg-green-50 text-green-800 hover:bg-green-100'
                }`}
              >
                <div className={`mb-1 text-xs font-bold uppercase tracking-wider ${activeProduct === index ? 'text-green-400' : 'text-green-500'}`}>
                  {product.tag}
                </div>
                {product.name}
              </button>
            ))}
          </Reveal>

          <Reveal className="grid gap-5 sm:grid-cols-2 lg:col-span-3" delay={0.16}>
            <div className="relative h-64 overflow-hidden rounded-3xl bg-green-100 sm:row-span-2 sm:h-auto">
              <ImageWithFallback
                src={active.img}
                alt={active.name}
                fallback="https://images.unsplash.com/photo-1769355104335-acef3aa4c9b6?w=700&h=800&fit=crop&auto=format"
                className="h-full w-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-950/70 to-transparent p-5">
                <div className="text-3xl font-extrabold text-white">{active.stat}</div>
                <div className="text-xs font-semibold text-green-300">{active.statLabel}</div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-3xl bg-green-900 p-7 text-white">
              <div>
                <span className="mb-4 inline-block rounded-full bg-green-700 px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-300">
                  {active.tag}
                </span>
                <h3 className="mb-3 text-2xl font-extrabold">{active.name}</h3>
                <p className="text-sm leading-relaxed text-green-200/70">{active.desc}</p>
              </div>
              <a href="tel:+6512345678" className="mt-6 inline-block rounded-full bg-green-500 px-6 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-green-400">
                Call about this product
              </a>
            </div>

            <div className="flex items-center gap-4 rounded-3xl border border-green-100 bg-green-50 p-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-xl">✓</div>
              <div>
                <div className="text-sm font-bold text-green-900">Need a matching SKU?</div>
                <div className="mt-0.5 text-xs text-green-600/60">Tell us your size, use case, and monthly volume.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

