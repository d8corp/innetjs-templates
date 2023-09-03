import { useParams } from '@innet/server'

import { todos } from '../todos'

export function GetTodo () {
  const { todoId } = useParams<Paths.Todos$TodoId.Get.PathParameters>()

  const todo = todos.find(({ id }) => id === todoId)

  if (!todo) {
    return <error code='todoNotFound' status={404} />
  }

  return <success>{todo}</success>
}
