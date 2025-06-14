import { ChildrenProps } from '@innet/dom'

import { Page } from '../Page'

import styles from './CenterPage.module.scss'

export function CenterPage ({ children }: ChildrenProps) {
  return <Page class={styles.root}>{children}</Page>
}
