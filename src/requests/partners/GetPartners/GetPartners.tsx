import { useSearch } from '@innet/server'

export function GetPartners () {
  const { search } = useSearch<Paths.Partners.Get.QueryParameters>()
  return <success>{{ search }}</success>
}
