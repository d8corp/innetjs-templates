import { useData } from '@innet/server'

import { todos } from '../todos'

export function DeleteTodo() {
  const { todoId } = useData('params', 'DELETE:/todos/{todoId}')

  const todoIndex = todos.findIndex(({ id }) => id === todoId)

  if (todoIndex === -1) {
    return <error code="todoNotFound" status={404} />
  }

  todos.splice(todoIndex, 1)

  return <success />
}
