import React from 'react'
import { bindMembersToClass } from 'react-component-helpers'
import { createAction } from 'redux-actions'

export default {
  constructor(props){
    if(!this.state) this.state = {};
    bindMembersToClass(this, 'dispatchAction');
  },

  dispatchAction(value){
    let { props } = this;
    let action, toDispatch;

    if(typeof(props.action) == 'string'){
      action = createAction(props.action);
    } else {
      action = props.action;
    }

    toDispatch = action(value);
    props.dispatch(toDispatch);
    this.toggleMode();
  }
}
