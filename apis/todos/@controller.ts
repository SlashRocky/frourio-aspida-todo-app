import { createController } from 'frourio'
import { Todo, Methods } from './'

export const todos: Todo[] = []

export default createController<Methods>({
  get: () => ({ status: 200, body: todos }),
  post: ({ body }) => {
    const todo = { id: 'aa', label: body.label, done: false }
    return { status: 201, body: todo }
  }
})
