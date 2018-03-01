// @flow

// Generic (aka polymorphism): A is something, and
// identity will take an A type and return that type
function identity<A>(x: A): A {
  return x
}

console.log('identity', identity('very interesting'))

//  ---

// Can use as many generics as needed
function map<A, B>(fn: A => B, list: Array<A>): Array<B> {
  return list.map(fn)
}

const greeter = (id: number): string => `I am ${id}`
const res: Array<string> = map(greeter, [11, 22, 33])

const add1 = (x: number): number => x + 1
// map(add1, ['one', 'two'])

// ---

// Generics can be used with a specfic type
type TripleT = {
  entity: string,
  attribute: string,
  value: number | string
}

const someData: TripleT = {
  entity: 'User',
  attribute: 'Last Name',
  value: 'Stevens'
}

const result = identity(someData)

console.log('identity result', result.nfa)
