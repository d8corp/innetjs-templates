import type { Document } from '@innet/server'
import { useApi, useEffect } from '@innet/server'
import { promises } from 'fs'

export interface DocGenProps {
  path: string
}

export function DocGen({ path = './docs.json' }: DocGenProps) {
  const { docs } = useApi()

  useEffect(() => {
    const docsCopy: Document = JSON.parse(JSON.stringify(docs, null, 2))

    promises.writeFile(path, JSON.stringify(docsCopy, null, 2)).catch((e) => {
      console.error(e)
    })
  })

  return null
}
