export type Todo = {
  id: string
  label: string
  done: boolean
}

export type Methods = {
  get: {
    resBody: Todo[]
  }
  post: {
    reqBody: { label: string }
    resBody: Todo
  }
}
