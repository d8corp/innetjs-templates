import { Page } from '/ui/Page'

import styles from './App.scss'

export const App = () => (
  <>
    <header class={styles.header}>
      <a href='/' exact class={styles}>Home</a>
      <a href='/settings' class={styles}>Settings</a>
      <a href='/any-other' class={styles}>404</a>
    </header>
    <main class={styles.main}>
      <router>
        <slot name='/'>
          <Page promise={() => import('/pages/HomePage')} />
        </slot>
        <slot name='settings'>
          <Page>
            <div class={styles.content}>
              <h1>Settings</h1>
              This is an example of a page.
            </div>
          </Page>
        </slot>
        <Page>
          <div class={styles.content}>
            <h1>404</h1>
            Not Found
          </div>
        </Page>
      </router>
    </main>
  </>
)
