import React from 'react'

let { string, object, func, any, oneOfType } = React.PropTypes;

export default {
  action: oneOfType([string, func]),
  dispatch: func.isRequired,
  value: any,
}
