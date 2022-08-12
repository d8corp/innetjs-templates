import { JsxComponent } from '@innet/jsx'
import { State } from 'watch-state'

import styles from './HomePage.scss'
import logo from './logo.svg'

const name = new State('World')

export const HomePage: JsxComponent = () => (
  <div class={styles.root}>
    <img src={logo} width={300} style='margin: 0 auto;' alt='logo' />
    <h1 class={styles.header}>
      Hello{() => name.value ? `, ${name.value}` : ''}!
    </h1>
    <input
      class={styles.input}
      value={() => name.value}
      oninput={e => (name.value = e.target.value)}
      placeholder='Enter your name'
    />
  </div>
)
