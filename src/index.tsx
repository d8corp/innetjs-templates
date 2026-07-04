import { innet } from 'innet'
import { handler } from '@innet/node'

import { HelloWorld } from './components/HelloWorld'
import { Server } from './components/Server'

innet(
  <Server>
    <HelloWorld />
  </Server>,
  handler,
)
