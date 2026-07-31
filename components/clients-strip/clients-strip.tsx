import { Reveal } from '@/components/reveal/reveal'

interface ClientsStripProps {
  clients: string[]
}

export function ClientsStrip({ clients }: ClientsStripProps) {
  return (
    <div className="border-y border-green-100 bg-green-50 py-5">
      <Reveal className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-6" y={16}>
        <span className="mr-4 text-xs font-semibold uppercase tracking-widest text-green-400">Built for</span>
        {clients.map((name) => (
          <span key={name} className="text-sm font-bold text-green-800/50">{name}</span>
        ))}
      </Reveal>
    </div>
  )
}

