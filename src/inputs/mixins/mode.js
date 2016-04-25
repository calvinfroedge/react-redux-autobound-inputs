import React from 'react'
import { bindMembersToClass } from 'react-component-helpers'
import { modes } from '../../constants'

export default {
  constructor(props){
    if(!this.state) this.state = {};
    this.state.mode = props.initialMode || modes.view;
    if(props.readOnly) this.state.mode = modes.view;
    bindMembersToClass(this, 'toggleMode');
  },

  toggleMode(){
    let mode = this.state.mode == modes.edit ? modes.view : modes.edit;
    this.setState({mode});
  },

  toggler(component){
    let { props } = this;
    let { readOnly } = props;
    let { toggleMode } = this;
    let onClick = (event)=>{
      toggleMode();
      if(props.onClick) props.onClick(event);
    }

    return readOnly ? component : <div className="autobound-mode-toggle" style={{cursor: 'pointer'}} onClick={onClick}>
      {component}
    </div>
  },

  render(){
    let { state, props } = this;
    let { mode } = state;

    return <div className={["autobound-input", props.className, (props.readOnly ? 'autobound-input-read-only' : '')].join(' ')}>
      <div className="autobound-input-edit" style={{display: (mode == modes.edit ? 'block' : 'none')}}>{::this.renderEdit()}</div>
      <div className="autobound-input-view" style={{display: (mode == modes.view ? 'block' : 'none')}}>{::this.renderView()}</div>
    </div>
  }
}
