import React from 'react'
import PropTypes from 'prop-types'

const UnTypedComponent = (props) => (
  <div>
    <p>UnTypedComponent has id: {props.id}</p>
    <p>UnTypedComponent has props: {Object.keys(props)}</p>
  </div>
)

UnTypedComponent.propTypes = {
  id: PropTypes.number.isRequired,
}

export default UnTypedComponent;
