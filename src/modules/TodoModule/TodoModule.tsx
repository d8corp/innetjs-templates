import { AddTodo, DeleteTodo, EditTodo, GetTodo, GetTodos } from '/requests'
import { List, ListQueryParams, Todo } from '/schemas'

export function TodoModule () {
  return (
    <tag
      name='todo'
      description='Todo API'>
      <endpoint
        method='get'
        path='/todos'
        summary='Returns a list of todos'>
        <param name='done' in='query'>
          <boolean />
        </param>
        <ListQueryParams />
        <response description='Response Description'>
          <List key='todos'>
            <Todo />
          </List>
        </response>
        <request>
          <GetTodos />
        </request>
      </endpoint>
      <endpoint
        method='post'
        path='/todos'
        summary='Add a todo'>
        <body>
          <Todo add />
        </body>
        <request>
          <AddTodo />
        </request>
      </endpoint>
      <endpoint
        method='get'
        path='/todos/{todoId}'
        summary='Returns a todo'>
        <param in='path' name='todoId'>
          <uuid />
        </param>
        <response description='Response Description'>
          <Todo />
        </response>
        <request>
          <GetTodo />
        </request>
      </endpoint>
      <endpoint
        method='patch'
        path='/todos/{todoId}'
        summary='Change a todo'>
        <param in='path' name='todoId'>
          <uuid />
        </param>
        <body>
          <object>
            <field optional key='done'>
              <boolean />
            </field>
            <field optional key='title'>
              <string />
            </field>
          </object>
        </body>
        <request>
          <EditTodo />
        </request>
      </endpoint>
      <endpoint
        method='delete'
        path='/todos/{todoId}'
        summary='Delete a todo'>
        <param in='path' name='todoId'>
          <uuid />
        </param>
        <request>
          <DeleteTodo />
        </request>
      </endpoint>
    </tag>
  )
}
