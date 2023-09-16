import { ServerStartParams } from '@innet/server'

import { TodoModule } from '/modules'

import description from './description.md'

const handleStart = ({ port, https }: ServerStartParams) => {
  console.log(`http${https ? 's' : ''}://localhost:${port}/api/swagger`)
}

export function App () {
  return (
    <server onStart={handleStart}>
      <api description={description} prefix='/api' title='@innet/server Todo Template' version='0.0.1'>
        <swagger path='/swagger' />
        <license name='MIT' />
        <host url='http://localhost:3000/api' />
        <contact name='Mike' email='d8@cantinc.com' />
        <TodoModule />
        <env is='dev'>
          <dts path='src/api.d.ts' />
        </env>
      </api>
      <request>
        <error code='unknownRequest' status={404} />
      </request>
    </server>
  )
}
