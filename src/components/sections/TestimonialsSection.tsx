import { Reveal } from '../reveal/Reveal'

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
    <section id="testimonials" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="mb-14">
          <p className="text-green-500 text-xs font-bold uppercase tracking-widest mb-3">Client stories</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-950">What our partners say.</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, author, role, avatar }, index) => (
            <Reveal key={author} className="bg-green-50 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg hover:shadow-green-100 transition-shadow" delay={index * 0.08}>
              <p className="text-green-900 text-base leading-relaxed mb-8 font-medium">"{quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {avatar}
                </div>
                <div>
                  <div className="font-bold text-green-950 text-sm">{author}</div>
                  <div className="text-green-600/70 text-xs">{role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
