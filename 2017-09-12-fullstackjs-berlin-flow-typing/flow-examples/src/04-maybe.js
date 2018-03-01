// @flow

const greeter = (firstname: ?string, lastname?: string): string => {
  return 'nfa'
  // return `Hello ${firstname} ${lastname}`

  // const name = lastname ? `${firstname} ${lastname}` : firstname
  // return `Hello ${name}`
}

greeter('', 'mustermann')
greeter(null)
greeter(undefined)
