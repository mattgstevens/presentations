// @flow
import React, { Component } from 'react'

import UnTyped from './UnTypedComponent'
import Typed from './TypedComponent'

import logo from './logo.svg'
import './App.css'

type Props = {}

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React + Flow</h2>
        </div>

        <Typed data={{ something: 'totally OK right?' }} />
      </div>
    )
  }
}

export default App
