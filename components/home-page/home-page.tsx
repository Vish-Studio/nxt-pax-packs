'use client'

import { useEffect, useState } from 'react'
import { AboutSection } from '@/components/about-section/about-section'
import { AppreciationSection } from '@/components/appreciation-section/appreciation-section'
import { ClientsStrip } from '@/components/clients-strip/clients-strip'
import { ContactSection } from '@/components/contact-section/contact-section'
import { Footer } from '@/components/footer/footer'
import { HeroSection } from '@/components/hero-section/hero-section'
import { ImpactSection } from '@/components/impact-section/impact-section'
import { NavBar } from '@/components/nav-bar/nav-bar'
import { ProductsSection } from '@/components/products-section/products-section'
import { TestimonialsSection } from '@/components/testimonials-section/testimonials-section'
import { trackEvent } from '@/lib/analytics'
import { assetPath } from '@/lib/site-assets'
import {
  CLIENTS,
  FACTORY_IMAGE,
  FOREST_IMAGE,
  HERO_IMAGES,
  LEAVES_IMAGE,
  NAV_LINKS,
  PLANT_IMAGE,
  PRODUCTS,
  STATS,
  TEAM_IMAGE,
  TESTIMONIALS,
} from '@/lib/site-content'

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)
  const logoSrc = assetPath('/logo.png')

  const handleSelectProduct = (index: number) => {
    setActiveProduct(index)
    trackEvent('product_select', { product_name: PRODUCTS[index].name })
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-green-950">
      <NavBar
        scrolled={scrolled}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        onMenuClose={() => setMenuOpen(false)}
        logoSrc={logoSrc}
        links={NAV_LINKS}
      />

      <HeroSection heroImages={HERO_IMAGES} />
      <ClientsStrip clients={CLIENTS} />
      <ProductsSection products={PRODUCTS} activeProduct={activeProduct} onSelectProduct={handleSelectProduct} />
      <AboutSection factoryImage={FACTORY_IMAGE} />
      <AppreciationSection />
      <ImpactSection forestImage={FOREST_IMAGE} stats={STATS} galleryImages={[LEAVES_IMAGE, PLANT_IMAGE, TEAM_IMAGE]} />
      <TestimonialsSection testimonials={TESTIMONIALS} />
      <AppreciationSection />
      <ContactSection leavesImage={LEAVES_IMAGE} />
      <Footer logoSrc={logoSrc} links={NAV_LINKS} />
    </div>
  )
}
