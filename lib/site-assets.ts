export const BASE_PATH = '/nxt-pax-packs'

export function assetPath(path: string) {
  return `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`
}

