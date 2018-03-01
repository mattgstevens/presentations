## intro
- who I am
- what I do

## preramble
- how many people use flow? like to use?
- how many people use typescript? like to use?

## what is flow
- project from Facebook since YYYY
- static type checker => what is that?
  - https://en.wikipedia.org/wiki/Type_system#Static_type_checking
  - "Static type checking is the process of verifying the type safety of a program based on analysis of a program's text (source code). If a program passes a static type checker, then the program is guaranteed to satisfy some set of type safety properties for all possible inputs."
    - in a statically typed language all function inputs and output as well as variables have a type; the compiler can catch certain errors at compile time based on these types and how they are applied.

    - JavaScript is a dynamically typed language, and function inputs and output as well as variables have NO type annotations; type errors can only be found by the interpreter at runtime, when the erroring expression is being evaluated
    - even if we are not always thinking in types, we are putting values into containers called variables; the difference is whether that container has a type annotation or not. Dynamic language variables are containers with no other properties
      - ```javascript
        let x = 1
        x = { something: 'else' }
        ```
  - "Without static type checking, even code coverage tests with 100% coverage may be unable to find such type errors. The tests may fail to detect such type errors, because the combination of all places where values are created and all places where a certain value is used must be taken into account."
    - types allow for certain correctness guarantees across a codebase; same reason why we use eslint rules to enforce style AND prevent some mistakes types give us a way to enforce calling functions with correct number and type of arguments, as well as accessing and updating our data
    - JavaScript is a weakly typed language which means [JavaScript lets us do strange things](https://www.destroyallsoftware.com/talks/wat)
      - console.log({} + {}) // NaN
      - console.log([] + []) // ''
      - console.log({} + []) // 0
      - console.log([] + {}) // [object Object]
      - console.log({} + 2) // [object Object]2
      - console.log('hello' + 1) // hello1
      - console.log('hello' - 1) // NaN
    - do not need to do runtime checks for properties
      - if (object && object.attr1 && typeof object.attr1 === 'function') { ... }


## why to use flow
- I believe the web wins in the end, and it is powered by JavaScript
- We are writing software professionally and JavaScript alone does not give enough confidence to ship out software into production; adding this tool allows for better safety guarantees both during feature development (where some developer is deeply aware of what is being built) and also for refactoring (where the developer may not be aware of compounding effects of changes)
- when we are coding, we are often needing to extend or add behaviours and data to our projects; even greenfield projects will become feature-ful, collaborators on the project come and go (on vacation, having children, other projects)
- working in a particular project requires a high level of awareness: the ethos of the project, style choices, and also how to use existing and "new" functions and data
  - ethos of the project: README & existing colleagues to onboard & pair with
  - style choices: eslint & prettier, code reviews
  - what about straightforward correctness? applying a function correctly

## flow as a tool
- `TypeError: <symbol> is not a function` errors are silly mistakes
- wouldn't it be great if you had companion to check your work, doesn't get tired, and works when you do
- adding flow to your project means adding a `@flow` declaration at the top and providing type definitions for your work, and third party libraries that are not flow typed (and for those that are, the tool finds them automatically)
- provides additional guarantees when used as git hooks (pre-commit && pre-push) and during CI as another kind of quality / correctness check

## modeling your data domain
- an example for React props (and compared to using propTypes)
- an example for API that read out database entries
  - [level 9000](https://medium.com/@gcanti/the-eff-monad-implemented-in-flow-40803670c3eb)
- likely you could generate flow types from swagger, graphQL schema, database schema
- type defintions could be shared to API project and web client projects

## exploring new library via types
- start from not knowing a library: as you find attributes and functions you can add types for them, and plug them into your code
- example of a web3 like thing


## examples

### type-inference

### objects

### generics
- type inference
  -  map :: (a → b) → [a] → [b]
  - const map = (fn: (A) => B, [A]): [B]
- EthereumWatchEventT
- use in deepMerge (to keep the output type the same as first argument)

### sub-types

### when to use `*` and `Object`, but please not `any`

## useful links
- [flow-typed](https://github.com/flowtype/flow-typed)
- [flow cheatsheet](https://www.saltycrane.com/blog/2016/06/flow-type-cheat-sheet/)
- [flow has contravariant inputs and covariant outputs](https://medium.com/@thejameskyle/type-systems-covariance-contravariance-bivariance-and-invariance-explained-35f43d1110f8)

## how to use with babel
- often we are transpiling with babel; adding type annotation is not valid JavaScript syntax and must be removed before executing.

## how to setup with eslint

## how to setup .flowconfig
- `yarn flow init`
- other useful things

## coverage
- `yarn flow -- coverage examples/generics.js`

## link to github repo for this talk & example code
