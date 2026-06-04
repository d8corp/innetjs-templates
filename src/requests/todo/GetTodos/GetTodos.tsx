import { useData } from '@innet/server'

import { todos as rootTodos } from '../todos'

export function GetTodos() {
  const { page, pageSize, done } = useData('search', 'GET:/todos')

  const rawTodos = done === undefined ? rootTodos : rootTodos.filter(({ done: todoDone }) => todoDone === done)

  const start = (page - 1) * pageSize
  const stop = start + pageSize
  const todos = rawTodos.slice(start, stop)

  const data: Api.Endpoints['GET:/todos']['response']['default'] = {
    todos,
    pageSize,
    page,
    count: rootTodos.length,
  }

  return <success>{data}</success>
}
