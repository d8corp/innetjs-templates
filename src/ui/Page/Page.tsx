import { useChildren } from '@innet/jsx'

import { Async, AsyncProps } from '../Async'
import { PageContent } from '../PageContent'

export type EmptyProps = {}
export type PageProps<T extends object> = AsyncProps<T> | EmptyProps

function isAsyncProps<T extends object> (props: PageProps<T>): props is AsyncProps<T> {
  return Boolean(props)
}

export function Page <T extends object> (props: PageProps<T>) {
  const children = useChildren()

  const contentChildren = isAsyncProps(props)
    ? (
      <Async {...props}>
        {children}
      </Async>
      )
    : children

  return (
    <delay show={300} hide={300}>
      <PageContent>
        {contentChildren}
      </PageContent>
    </delay>
  )
}
