import { Todo } from '../'

export type Methods = {
  patch: {
    reqBody: { done: boolean }
    resBody: Todo
  }
}
