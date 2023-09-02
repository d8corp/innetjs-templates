import { useParams } from '@innet/server'

export function GetPartner () {
  const { id } = useParams<Paths.Partners$Id.Get.PathParameters>()
  return <success>{{ id }}</success>
}
