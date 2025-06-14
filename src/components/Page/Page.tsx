import { ChildrenProps, Delay, Ref, Style, style } from '@innet/dom'
import classes from 'html-classes'
import { State } from 'watch-state'

import styles from './Page.module.scss'

const useStyles = style(styles)

export interface PageProps extends ChildrenProps, Style {}

export function Page ({ children }: PageProps) {
  const hidden = new Ref<State<boolean>>()
  const styles = useStyles()

  return (
    <Delay show={300} hide={300} ref={hidden}>
      <div class={() => classes([styles.root, hidden.value.value && styles.hidden])}>
        {children}
      </div>
    </Delay>
  )
}
