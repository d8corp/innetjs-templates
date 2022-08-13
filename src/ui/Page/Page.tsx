import { Ref } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'
import { State } from 'watch-state'

import { Async, AsyncProps } from '/ui/Async'

import styles from './Page.scss'

export interface PageProps<T extends object> extends Partial<AsyncProps<T>> {

}

export function Page <T extends object> (props: PageProps<T>) {
  const hidden = new Ref<State<boolean>>()
  const children = useChildren()

  const contentChildren = props
    ? (
      <Async {...(props as AsyncProps<T>)}>
        {children}
      </Async>
      )
    : children

  return (
    <delay ref={hidden} show={300} hide={300}>
      <div
        class={() => classes([
          styles.root,
          hidden.value.value && styles.hide,
        ])}>
        {contentChildren}
      </div>
    </delay>
  )
}
