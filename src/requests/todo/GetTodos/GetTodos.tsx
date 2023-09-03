import { useSearch } from '@innet/server'

import { todos as rootTodos } from '../todos'

export function GetTodos () {
  const {
    page = 1, // FIXME: wrong types
    pageSize = 12, // FIXME: wrong types
    done,
  } = useSearch<Paths.Todos.Get.QueryParameters>()

  const rawTodos = done === undefined
    ? rootTodos
    : rootTodos.filter(({ done: todoDone }) => todoDone === done)

  const start = (page - 1) * pageSize
  const stop = start + pageSize
  const todos = rawTodos.slice(start, stop)

  const data: Paths.Todos.Get.Responses.Default = {
    todos,
    pageSize,
    page,
    count: rootTodos.length,
  }
  return <success>{data}</success>
}
