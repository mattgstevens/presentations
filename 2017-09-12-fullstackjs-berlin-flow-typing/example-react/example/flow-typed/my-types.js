declare module 'my-types' {
  declare class ApiGreeterRequest extends express$Request {
    body: {
      name: string
    }
  }

  declare export type ApiGreeter$Request = ApiGreeterRequest
}
