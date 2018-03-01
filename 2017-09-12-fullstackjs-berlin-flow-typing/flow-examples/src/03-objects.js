// @flow

type mapOfStringToNumber = { [string]: number }
const nfa = 'nfa'
const myMap: mapOfStringToNumber = { [nfa]: 55 }

const goodData1: mapOfStringToNumber = { one: 1, two: 2 }
// const problemData1: mapOfStringToNumber = { 1: 'one' }

// ---

type exactlyT = {| x: number |}
type exactlyAgainT = $Exact<{ x: number }>

const goodData2: exactlyT = { x: 55 }

// const problemData2: exactlyT = { x: 55, y: 88 }
// const problemData3: exactlyAgainT = { y: 88 }

// ---

type readOnlyT = { +x: number }
const data: readOnlyT = { x: 55 }
data.x = 66
