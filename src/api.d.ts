declare namespace Api {
  export interface Bin {
    filename: string
    fieldName: string
    originalFilename: string
    path: string
    type: string
    disposition: string
    size: number
    extension?: string
  }
  namespace Schemas {
    export type Todo = {
      id: string
      title: string
      done: boolean
    }
    export type TodoAdd = {
      id: string
      title: string
      done: boolean
    }
  }
  export interface Endpoints {
    ['GET:/todos']: {
      Search: {
        done?: boolean
        page: number
        pageSize: number
      }
      Response: {
        page: number
        pageSize: number
        count: number
        todos: (Schemas.Todo)[]
      }
    }
    ['POST:/todos']: {
      Body: Schemas.TodoAdd
    }
    ['GET:/todos/{todoId}']: {
      Params: {
        todoId: string
      }
      Response: Schemas.Todo
    }
    ['PATCH:/todos/{todoId}']: {
      Params: {
        todoId: string
      }
      Body: {
        done?: boolean
        title?: string
      }
    }
    ['DELETE:/todos/{todoId}']: {
      Params: {
        todoId: string
      }
    }
  }
}