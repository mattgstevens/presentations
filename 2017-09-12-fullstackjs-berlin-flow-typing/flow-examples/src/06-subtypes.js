// @flow

// subtyping: If B is a subtype of A
// this means that we can subsitute a B type
// anywhere there is an A type
function concat<A, B: A>(from: Array<B>, to: Array<A>) {
  return to.concat(from)
}

const numberList: Array<number> = [1]
const stringList: Array<string> = ['one']
// console.log(concat(numberList, stringList))

// ---

type User = {
  uuid: string,
  name: string,
  email: string
}

const alice: User = {
  uuid: '123-abc',
  name: 'Alice',
  email: 'alice@callme.bob'
}

function greeter<A: { name: string }>(x: A): string {
  return `Greetings ${x.name}`
}

console.log('greeter', greeter(alice))
console.log('greeter', greeter({ name: 'anon' }))
// console.log('greeter', greeter('oops'))
