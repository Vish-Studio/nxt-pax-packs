import { useEffect, useState } from 'react'
import logoImg from '@/imports/Screenshot_2026-07-09_at_02.35.43.png'
import {
  AboutSection,
  ClientsStrip,
  ContactSection,
  Footer,
  HeroSection,
  ImpactSection,
  NavBar,
  ProductsSection,
  TestimonialsSection,
} from './components'

const HERO_IMG = 'https://images.unsplash.com/photo-1769355104335-acef3aa4c9b6?w=1600&h=1100&fit=crop&auto=format'
const FOREST_IMG = 'https://images.unsplash.com/photo-1769355104335-acef3aa4c9b6?w=1400&h=900&fit=crop&auto=format'
const LEAVES_IMG = 'https://images.unsplash.com/photo-1609710219624-201223bd6b1e?w=900&h=1100&fit=crop&auto=format'
const PLANT_IMG = 'https://images.unsplash.com/photo-1761210980705-9f901d4182f7?w=900&h=900&fit=crop&auto=format'
const TEAM_IMG = 'https://unsplash.com/photos/qJVfC0hgqMs/download?force=true'
const FACTORY_IMG = 'https://images.unsplash.com/photo-1769355104335-acef3aa4c9b6?w=1200&h=900&fit=crop&auto=format'

const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Testimonials', href: '#testimonials' },
]

const PRODUCTS = [
  {
    name: 'Bio Carry Bags',
    tag: 'Plant Starch',
    desc: 'Made from plant starch — fully compostable within 180 days in standard soil conditions.',
    img: 'https://unsplash.com/photos/white-plastic-bag-on-white-table-NcAJ6N_Kn8E/download?force=true',
    stat: '180 days',
    statLabel: 'to biodegrade',
  },
  {
    name: 'Eco Cups & Lids',
    tag: 'PLA-lined',
    desc: 'Hot and cold beverage cups that vanish in commercial composting facilities, leaving nothing behind.',
    img: 'https://images.unsplash.com/photo-1761210980705-9f901d4182f7?w=700&h=800&fit=crop&auto=format',
    stat: '100%',
    statLabel: 'plant-based',
  },
  {
    name: 'Mailer Packaging',
    tag: 'Cassava Based',
    desc: 'Moisture-resistant mailers from cassava and sugarcane fibre — durable in transit, gone after use.',
    img: 'https://unsplash.com/photos/W-CN4ZWwKiY/download?force=true',
    stat: '100%',
    statLabel: 'compostable',
  },
  {
    name: 'Food Containers',
    tag: 'Bagasse',
    desc: 'Sugarcane pulp containers — microwave safe, grease resistant, biodegrades in 60 days.',
    img: 'https://unsplash.com/photos/pxz1DfpNEs0/download?force=true',
    stat: '60 days',
    statLabel: 'full breakdown',
  },
]

const STATS = [
  { value: '2.4M+', label: 'Units shipped annually' },
  { value: '180', label: 'Days avg. biodegradation' },
  { value: '98%', label: 'Client reorder rate' },
  { value: '100%', label: 'Bio-based materials, always' },
]

const TESTIMONIALS = [
  {
    quote: "Switching to PaxPacks cut our packaging footprint by 94%. Our customers noticed immediately — it became part of our brand story.",
    author: 'Priya Menon',
    role: 'Head of Operations, FreshMart',
    avatar: 'PM',
  },
  {
    quote: "The drop-in compatibility is real. We swapped 12 SKUs in a single weekend. Zero disruption, full certification coverage.",
    author: 'Daniel Osei',
    role: 'Supply Chain Director, CloudKitchens SG',
    avatar: 'DO',
  },
  {
    quote: "PaxPacks gives us the volume pricing we need and the third-party certifications our retail partners demand. Easy decision.",
    author: 'Rachel Ng',
    role: 'Procurement Lead, GreenMart Group',
    avatar: 'RN',
  },
]

const CLIENTS = ['FreshMart', 'GreenMart', 'EcoHarvest', 'CloudKitchens', 'Lush Retail', 'Milo & Co']
const LOGO_SRC = typeof logoImg === 'string' ? logoImg : logoImg.src

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-green-950">
      <NavBar
        scrolled={scrolled}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        onMenuClose={() => setMenuOpen(false)}
        logoSrc={LOGO_SRC}
        links={NAV_LINKS}
      />

      <HeroSection heroImage={HERO_IMG} />
      <ClientsStrip clients={CLIENTS} />
      <ProductsSection products={PRODUCTS} activeProduct={activeProduct} onSelectProduct={setActiveProduct} />
      <AboutSection factoryImage={FACTORY_IMG} />
      <ImpactSection forestImage={FOREST_IMG} stats={STATS} galleryImages={[LEAVES_IMG, PLANT_IMG, TEAM_IMG]} />
      <TestimonialsSection testimonials={TESTIMONIALS} />
      <ContactSection leavesImage={LEAVES_IMG} />
      <Footer logoSrc={LOGO_SRC} links={NAV_LINKS} />
    </div>
  )
}
