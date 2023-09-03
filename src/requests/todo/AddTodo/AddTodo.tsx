import { useBody } from '@innet/server'

import { todos } from '../todos'

export function AddTodo () {
  const todo = useBody<Paths.Todos.Post.RequestBody>()

  todos.push(todo as any) // FIXME: wrong types generation

  return <success />
}
