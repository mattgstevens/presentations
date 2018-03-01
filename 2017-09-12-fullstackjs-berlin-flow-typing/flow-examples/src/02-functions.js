// @flow

// While you can learn about the arity of a
// javascript function dynamically
function greeter(name: string): string {
  return `Hello ${name}`
}
console.log(greeter.length)

// Needing to lookup the definition before use does not need to be a task for
// the developer.
// Flow will read the number of inputs a function expects, and error if a call
// to the function does not have the right amount of arguments

// console.log(greeter('alice', 'bob', 'carol'))

// Of course it is also type checking the inputs themselves
// console.log(greeter(1, 2))

// ---

// Functions can also have a type given to them, which is useful when you
// will use a functions type in many places in your codebase; an example
// is with redux actions

type add1T = number => number

const add1: add1T = x => x + 1

add1(1)
// add1('nope')

// ---

// in the action file
const add1Action: add1T = x => x + 1

// in a Component file
const React = require('react')

type Props = {
  currentValue: number,
  add1Action: add1T
}

class MyAdd1Component extends React.PureComponent<Props> {
  handleClick = () => {
    this.props.add1Action(this.props.currentValue)
    this.props.add1Action('oops')
  }

  render() {
    const { add1Action, currentValue } = this.props

    return (
      <div>
        <h1>Calculator</h1>
        <div>{`Current value: ${currentValue}`}</div>
        <button onClick={this.handleClick}>Do maths</button>
      </div>
    )
  }
}
