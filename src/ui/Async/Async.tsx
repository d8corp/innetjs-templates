import { useChildren } from '@innet/jsx'

export interface AsyncProps<T extends object> {
  promise: () => Promise<T>
  name?: keyof T
  props?: any
  children?: any
}

export async function * Async <T extends object> ({ promise, name, props, children }: AsyncProps<T>) {
  yield useChildren()

  const result = await promise()

  const Component: any = name ? result[name] : 'default' in result ? result.default : undefined

  yield Component && (
    <Component
      {...props}>
      {children}
    </Component>
  )
}
