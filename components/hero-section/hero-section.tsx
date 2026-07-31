'use client'

import { useEffect, useState } from 'react'
import { ParallaxImage } from '@/components/parallax-image/parallax-image'
import { Reveal } from '@/components/reveal/reveal'

interface HeroSectionProps {
  heroImages: string[]
}

export function HeroSection({ heroImages }: HeroSectionProps) {
  const [activeImage, setActiveImage] = useState(0)
  const proofPoints = [
    { value: 'Bags', label: 'retail and grocery carry formats' },
    { value: 'Cups', label: 'hot, cold, and lid pairings' },
    { value: 'Boxes', label: 'takeaway and delivery containers' },
  ]
  const backgroundImages = heroImages.length > 0 ? heroImages : ['']

  useEffect(() => {
    if (backgroundImages.length < 2) return

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % backgroundImages.length)
    }, 3000)

    return () => window.clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <section className="relative isolate overflow-hidden bg-green-950 text-white lg:h-svh">
      {backgroundImages.map((image, index) => (
        <ParallaxImage
          key={image}
          src={image}
          alt={index === activeImage ? 'Biodegradable packaging products arranged in natural light' : ''}
          ariaHidden={index !== activeImage}
          className={`absolute inset-0 -z-20 overflow-hidden transition-opacity duration-700 ease-out ${
            index === activeImage ? 'opacity-100' : 'opacity-0'
          }`}
          speed={44}
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-950 via-green-950/80 to-green-950/25" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-green-950 via-green-950/70 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col justify-center px-6 pb-10 pt-28 sm:px-8 sm:pt-32 lg:h-full lg:px-10 lg:pb-14 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_24rem] lg:items-center">
          <Reveal className="max-w-2xl" y={20}>
            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold text-green-100 lg:text-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span>Bio product sourcing</span>
              <span className="h-px w-8 bg-green-200/40" />
              <span>Bulk supply for businesses</span>
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.06] text-white sm:text-5xl lg:text-5xl xl:text-6xl">
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

          <Reveal className="border-y border-white/20 py-6 text-green-50/85 lg:border-y-0 lg:border-l lg:py-0 lg:pl-7" delay={0.12} y={20}>
            <p className="text-sm font-semibold text-green-200">What we do</p>
            <p className="mt-3 text-sm leading-7">
              We help shops, restaurants, distributors, and ecommerce teams source practical bio alternatives to everyday plastic packaging.
            </p>

            <div className="mt-6 grid gap-3">
              {proofPoints.map((item, index) => (
                <Reveal key={item.label} className="border-t border-white/15 pt-3 first:border-t-0 first:pt-0" delay={0.14 + index * 0.06} y={16}>
                  <div className="text-2xl font-semibold text-white">{item.value}</div>
                  <div className="mt-1 text-sm leading-5 text-green-100/75">{item.label}</div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8 flex items-center gap-3 text-sm font-medium text-green-100/80 lg:mt-10" delay={0.18} y={16}>
          <span className="h-px w-10 bg-green-200/50" />
          <span>Plant starch, PLA, cassava, kraft, and bagasse formats</span>
        </Reveal>
      </div>
    </section>
  )
}

