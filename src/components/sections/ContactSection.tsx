import { Reveal } from '../reveal/Reveal'

interface ContactSectionProps {
  leavesImage: string
}

export function ContactSection({ leavesImage }: ContactSectionProps) {
  return (
    <section id="contact" className="py-28 bg-green-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={leavesImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-4">Get in touch</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Ready to make<br />the switch?
          </h2>
          <p className="text-green-300/70 leading-relaxed mb-10">
            Speak with our packaging team about volume tiers, delivery schedules, product formats, and certification documentation.
          </p>
          <div className="space-y-4">
            {[
              { icon: '📍', label: 'Singapore HQ', value: '18 Tuas South Ave 14, S637574' },
              { icon: '📞', label: 'Phone', value: '+65 1234 5678' },
              { icon: '✉️', label: 'Email', value: 'hello@paxpacks.com' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="text-xl">{icon}</span>
                <div>
                  <div className="text-green-500 text-xs font-semibold">{label}</div>
                  <div className="text-green-100 text-sm">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="rounded-3xl border border-green-800 bg-white p-8 shadow-2xl shadow-green-950/30 lg:p-10" delay={0.12}>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-500">Talk to sales</p>
          <h3 className="mb-4 text-3xl font-extrabold leading-tight text-green-950">
            Call PaxPacks for product pricing and availability.
          </h3>
          <p className="mb-8 text-sm leading-7 text-green-700/70">
            Get quick guidance on the right biodegradable packaging formats for your order size, timeline, and compliance requirements.
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
