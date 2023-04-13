import { HTMLStyleProps, style, useHidden } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'

import styles from './PageContent.scss'

const useStyle = style(styles)

export interface PageContentProps extends HTMLStyleProps<HTMLDivElement, { root: string, hide: string }> {

}

export function PageContent (props: PageContentProps) {
  const styles = useStyle()
  const children = useChildren()
  const hidden = useHidden()

  return hidden && (
    <div
      {...props}
      class={() => classes([
        styles.root,
        hidden.value && styles.hide,
      ])}>
      {children}
    </div>
  )
}
