import { useBody, useParams } from '@innet/server'

import { todos } from '../todos'

export function EditTodo () {
  const { todoId } = useParams<Paths.Todos$TodoId.Patch.PathParameters>()
  const params = useBody<Paths.Todos$TodoId.Patch.RequestBody>()

  const todo = todos.find(({ id }) => id === todoId)

  if (!todo) {
    return <error code='todoNotFound' status={404} />
  }

  for (const key in params) {
    // @ts-ignore: FIXME: wrong type generation
    if (params[key] !== undefined) { todo[key] = params[key] }
  }

  return <success />
}
