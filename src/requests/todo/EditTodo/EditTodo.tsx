import { useData } from '@innet/server'

import { todos } from '../todos'

export function EditTodo() {
  const { todoId } = useData('params', 'PATCH:/todos/{todoId}')
  const data = useData('body', 'PATCH:/todos/{todoId}')

  const todo = todos.find(({ id }) => id === todoId)

  if (!todo) {
    return <error code="todoNotFound" status={404} />
  }

  Object.assign(todo, data)

  return <success />
}
