import { useData } from '@innet/server'

import { todos } from '../todos'

export function AddTodo() {
  const todo = useData('body', 'POST:/todos')

  todos.push(todo)

  return <success />
}
