interface Bin {
  filename: string
  fieldName: string
  originalFilename: string
  path: string
  type: string
  disposition: string
  size: number
  extension?: string
}
declare namespace Components {
    namespace Schemas {
        export interface TodoSchema {
            id: string // uuid
            /**
             * example:
             * Create todo
             */
            title: string
            done: boolean
        }
        export interface TodoSchemaAdd {
            id?: string // uuid
            /**
             * example:
             * Create todo
             */
            title: string
            done?: boolean
        }
    }
}
declare namespace Paths {
    namespace Todos {
        namespace Get {
            namespace Parameters {
                export type Done = boolean
                export type Page = number
                export type PageSize = number
            }
            export interface QueryParameters {
                done?: Parameters.Done
                page?: Parameters.Page
                pageSize?: Parameters.PageSize
            }
            namespace Responses {
                /**
                 * test1
                 */
                export interface Default {
                    page: number // int32
                    /**
                     * example:
                     * 10
                     */
                    pageSize: number
                    count: number
                    todos: Components.Schemas.TodoSchema[]
                }
            }
        }
        namespace Post {
            export type RequestBody = Components.Schemas.TodoSchemaAdd
        }
    }
    namespace Todos$TodoId {
        namespace Delete {
            namespace Parameters {
                export type TodoId = string // uuid
            }
            export interface PathParameters {
                todoId: Parameters.TodoId /* uuid */
            }
        }
        namespace Get {
            namespace Parameters {
                export type TodoId = string // uuid
            }
            export interface PathParameters {
                todoId: Parameters.TodoId /* uuid */
            }
            namespace Responses {
                export type Default = Components.Schemas.TodoSchema
            }
        }
        namespace Patch {
            namespace Parameters {
                export type TodoId = string // uuid
            }
            export interface PathParameters {
                todoId: Parameters.TodoId /* uuid */
            }
            export interface RequestBody {
                done?: boolean
                title?: string
            }
        }
    }
}
