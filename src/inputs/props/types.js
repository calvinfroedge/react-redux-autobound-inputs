import React from 'react'

let { string, object, func, any } = React.PropTypes;

export default {
  action: string.isRequired,
  dispatch: func.isRequired,
  value: any,
}
