// @flow

// Type-inference means you do not need to add a type annotation to
// all of your variables; this is similar to Haskell and other statically
// typed languages
const add = (x, y) => x + y

let x = 1
let y = 2
let nfa: string = add(x, y)

let z = 'oops'
// add(x, z)
