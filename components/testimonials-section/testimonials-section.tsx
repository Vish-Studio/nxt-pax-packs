import { Reveal } from '@/components/reveal/reveal'

interface Testimonial {
  quote: string
  author: string
  role: string
  avatar: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-green-500">Client stories</p>
          <h2 className="text-4xl font-extrabold text-green-950 md:text-5xl">What our partners say.</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map(({ quote, author, role, avatar }, index) => (
            <Reveal key={author} className="flex flex-col justify-between rounded-3xl bg-green-50 p-8 transition-shadow hover:shadow-lg hover:shadow-green-100" delay={index * 0.08}>
              <p className="mb-8 text-base font-medium leading-relaxed text-green-900">&quot;{quote}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-700 text-xs font-bold text-white">
                  {avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-green-950">{author}</div>
                  <div className="text-xs text-green-600/70">{role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

