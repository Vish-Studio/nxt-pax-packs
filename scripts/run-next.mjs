import { spawn } from 'node:child_process'
import net from 'node:net'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const mode = process.argv[2] === 'start' ? 'start' : 'dev'
const preferredPort = Number.parseInt(process.env.PORT || '300', 10)
const host = process.env.HOST || '0.0.0.0'
const extraArgs = process.argv.slice(3)

async function findAvailablePort(startPort) {
  let port = startPort

  for (let attempts = 0; attempts < 20; attempts += 1) {
    const available = await isPortAvailable(port)
    if (available) return port
    port += 1
  }

  throw new Error(`Unable to find an available port starting from ${startPort}`)
}

function isPortAvailable(port) {
  return new Promise((resolve) => {
    const server = net.createServer()

    server.once('error', () => resolve(false))
    server.once('listening', () => {
      server.close(() => resolve(true))
    })

    server.listen(port, '0.0.0.0')
  })
}

const nextBin = path.resolve(__dirname, '..', 'node_modules', 'next', 'dist', 'bin', 'next')
const port = await findAvailablePort(preferredPort)
const child = spawn(process.execPath, [nextBin, mode, '--hostname', host, '--port', String(port), ...extraArgs], {
  stdio: 'inherit',
  env: process.env,
})

function forwardSignal(signal) {
  if (child.exitCode === null) {
    child.kill(signal)
  }
}

process.on('SIGINT', () => forwardSignal('SIGINT'))
process.on('SIGTERM', () => forwardSignal('SIGTERM'))

child.on('exit', (code, signal) => {
  process.exit(code ?? (signal ? 1 : 0))
})
