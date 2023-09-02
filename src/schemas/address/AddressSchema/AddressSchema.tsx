import { useComponentName } from '@innet/server'

import { LocationSchema } from '/schemas/location'

export function AddressSchema () {
  const ref = useComponentName()

  return (
    <object ref={ref}>
      <field key='id'><number /></field>
      <field key='active'><null /></field>
      <field key='city'><string description='City description' values={['msk', 'sml']} /></field>
      <field key='location'><LocationSchema /></field>
    </object>
  )
}
