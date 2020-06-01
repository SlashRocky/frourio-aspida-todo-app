import { createController } from 'frourio'
import { Values } from './$values'
import { Methods } from './'

export default createController<Methods, Values>({
  patch: ({ body, params }) => {
    const todo = { id: params.todoId, label: 'bb', done: body.done }
    return { status: 200, body: todo }
  }
})
