import React from 'react'
import { modes } from '../constants'
import { passPropsExcept, mixin } from 'react-component-helpers'
import { ActionMixin, ModeMixin} from './mixins'
import { createAction } from 'redux-actions'
import propTypes from './props/types'

//React-widgets, see http://jquense.github.io/react-widgets/docs/#/datetime-picker?_k=0ya6r1 for customization options
import 'react-widgets/lib/less/react-widgets.less'
import Moment from 'moment'
import momentLocalizer from 'react-widgets/lib/localizers/moment'
import { DateTimePicker } from 'react-widgets'
momentLocalizer(Moment)

class DateTime extends React.Component {
  constructor(props){
    super(props);

    mixin(this, ModeMixin, ActionMixin);
  }

  componentDidUpdate(){
    if(this.state.mode == modes.edit) this.refs.input.focus();
  }

  onChange(value){
    ::this.dispatchAction(value);
  }

  onBlur(){
    this.toggleMode();
  }

  renderView(){
    let { props } = this;

    return this.toggler(<span>{Moment(props.value).format(props.formatView)}</span>);
  }

  renderEdit(){
    let { props } = this;
    let { value } = props;
    let childProps = passPropsExcept(props, 'initialMode', 'value', 'dispatch', 'action', 'formatEdit', 'formatView');

    return <DateTimePicker ref="input" format={props.formatEdit} {...childProps} defaultValue={value} onChange={::this.onChange} onBlur={::this.onBlur} />
  }
}

let { string, object, func, any } = React.PropTypes;
DateTime.propTypes = Object.assign({}, propTypes, {
  format: string
})

DateTime.defaultProps = {
  formatView: 'dddd, MMMM Do',
  formatEdit: 'MM-DD-YYYY',
  time: false
}

export default DateTime;
