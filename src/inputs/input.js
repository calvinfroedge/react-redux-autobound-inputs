import React from 'react'
import { modes } from '../constants'
import { Input as RBSInput } from 'react-bootstrap'
import { passPropsExcept, mixin } from 'react-component-helpers'
import { ActionMixin, ModeMixin} from './mixins'
import propTypes from './props/types'

class Input extends React.Component {
  constructor(props){
    super(props);

    mixin(this, ModeMixin, ActionMixin);
  }

  componentDidUpdate(){
    if(this.state.mode == modes.edit) this.refs.input.refs.input.focus();
  }

  onBlur(event){
    let { props } = this;
    let { value } = event.target;

    ::this.dispatchAction(value);
  }

  renderEdit(){
    let { props } = this;
    let { value } = props;
    let childProps = passPropsExcept(props, 'initialMode', 'value', 'dispatch', 'action');

    return <RBSInput ref="input" {...childProps} onBlur={::this.onBlur} defaultValue={value} />
  }

  renderView(){
    let { value } = this.props;
    return ::this.toggler(<span>{value}</span>);
  }
}

let { string, object, func, any } = React.PropTypes;
Input.propTypes = Object.assign({}, propTypes, {});

export default Input;
