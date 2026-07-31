import { ParallaxImage } from '@/components/parallax-image/parallax-image'
import { Reveal } from '@/components/reveal/reveal'

interface ContactSectionProps {
  leavesImage: string
}

export function ContactSection({ leavesImage }: ContactSectionProps) {
  return (
    <section id="contact" className="relative overflow-hidden bg-green-950 py-28">
      <div className="absolute inset-0 opacity-10">
        <ParallaxImage
          src={leavesImage}
          alt=""
          ariaHidden
          className="absolute inset-0 overflow-hidden"
          speed={46}
        />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-400">Get pricing</p>
          <h2 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Tell us what you use now.<br />We will match the bio option.
          </h2>
          <p className="mb-10 leading-relaxed text-green-300/70">
            Speak with our packaging team about volume tiers, delivery schedules, product formats, and certification documentation.
          </p>
          <div className="space-y-4">
            {[
              { label: 'Singapore HQ', value: '18 Tuas South Ave 14, S637574' },
              { label: 'Phone', value: '+65 1234 5678' },
              { label: 'Email', value: 'hello@paxpacks.com' },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <div>
                  <div className="text-xs font-semibold text-green-500">{label}</div>
                  <div className="text-sm text-green-100">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="rounded-3xl border border-green-800 bg-white p-8 shadow-2xl shadow-green-950/30 lg:p-10" delay={0.12}>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-500">Fastest next step</p>
          <h3 className="mb-4 text-3xl font-extrabold leading-tight text-green-950">
            Call for product matching, pricing, and availability.
          </h3>
          <p className="mb-8 text-sm leading-7 text-green-700/70">
            Have your current packaging size, product type, and approximate monthly quantity ready. We will guide you from there.
          </p>
          <a href="tel:+6512345678" className="block rounded-full bg-green-600 px-7 py-4 text-center text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all hover:-translate-y-0.5 hover:bg-green-500">
            Call +65 1234 5678
          </a>
          <div className="mt-6 grid gap-3 border-t border-green-100 pt-6 sm:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-green-500">Hours</div>
              <div className="mt-1 text-sm font-semibold text-green-950">Mon-Fri, 9am-6pm</div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-green-500">Response</div>
              <div className="mt-1 text-sm font-semibold text-green-950">Same business day</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

