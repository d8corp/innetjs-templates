import { ServerStartParams } from '@innet/server'

import { Partner } from '/tags'

import description from './description.md'

const handleStart = ({ port, https }: ServerStartParams) => {
  console.log(`http${https ? 's' : ''}://localhost:${port}/api/swagger`)
}

export function App () {
  return (
    <server port={3000} onStart={handleStart}>
      <api description={description} prefix='/api' title='@innet/server Template' version='0.0.1'>
        <swagger path='/swagger' />
        <license name='MIT' />
        <contact name='Mike' email='d8@cantinc.com' />
        <fallback>
          <error code='unknownRequest' status={404} />
        </fallback>
        <Partner />
        <dev>
          <dts path='src/api.d.ts' />
        </dev>
      </api>
    </server>
  )
}
