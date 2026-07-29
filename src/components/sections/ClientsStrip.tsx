import { Reveal } from '../reveal/Reveal'

interface ClientsStripProps {
  clients: string[]
}

export function ClientsStrip({ clients }: ClientsStripProps) {
  return (
    <div className="bg-green-50 border-y border-green-100 py-5">
      <Reveal className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-3" y={16}>
        <span className="text-green-400 text-xs font-semibold uppercase tracking-widest mr-4">Built for</span>
        {clients.map(name => (
          <span key={name} className="text-green-800/50 font-bold text-sm">{name}</span>
        ))}
      </Reveal>
    </div>
  )
}
