// @flow
import React from 'react'

type Props = {
  id: number
}

const TypedComponent = (props: Props) => (
  <div>
    <p>TypedComponent has id: {props.id}</p>
    <p>TypedComponent has props: {Object.keys(props)}</p>
  </div>
)

export default TypedComponent
