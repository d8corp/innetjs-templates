import '@innet/server'

declare global {
  namespace Api {
    export interface Schemas {
    TodoAdd: {
      id: string
      title: string
      done: boolean
    }
    Todo: {
      id: string
      title: string
      done: boolean
    }
  }
  export interface Endpoints {
    ['GET:/todos']: {
      search: {
        done?: boolean
        page: number
        pageSize: number
      }
      response: {
        ['default']: {
          page: number
          pageSize: number
          count: number
          todos: Array<Schemas['Todo']>
        }
     }
    }
    ['POST:/todos']: {
      body: Schemas['TodoAdd']
      response: {
        ['204']: void
     }
    }
    ['GET:/todos/{todoId}']: {
      params: {
        todoId: string
      }
      response: {
        ['default']: Schemas['Todo']
     }
    }
    ['PATCH:/todos/{todoId}']: {
      params: {
        todoId: string
      }
      body: {
        done?: boolean
        title?: string
      }
    }
    ['DELETE:/todos/{todoId}']: {
      params: {
        todoId: string
      }
    }
  }
  }
}

declare module '@innet/server' {
  interface ApiEndpoints extends Api.Endpoints {}
  interface ApiSchemas extends Api.Schemas {}
}
