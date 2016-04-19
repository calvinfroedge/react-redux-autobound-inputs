import React from 'react'
import { bindMembersToClass } from 'react-component-helpers'
import { modes } from '../../constants'

export default {
  constructor(props){
    if(!this.state) this.state = {};
    this.state.mode = props.initialMode || modes.view;
    bindMembersToClass(this, 'toggleMode');
  },

  toggleMode(){
    let mode = this.state.mode == modes.edit ? modes.view : modes.edit;
    this.setState({mode});
  },

  toggler(component){
    return <div className="autobound-mode-toggle" style={{cursor: 'pointer'}} onClick={::this.toggleMode}>
      {component}
    </div>
  },

  render(){
    let { mode } = this.state;

    return <div>
      <div style={{display: (mode == modes.edit ? 'block' : 'none')}}>{::this.renderEdit()}</div>
      <div style={{display: (mode == modes.view ? 'block' : 'none')}}>{::this.renderView()}</div>
    </div>
  }
}
