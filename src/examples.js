import React from 'react'
import { Input, DateTime } from './inputs'
import { connect } from 'react-redux'
import { createAction } from 'redux-actions'

class Examples extends React.Component {
  constructor(props){
    super(props);
  }

  updateNestedArrayItem(index, key, value){
    let action = createAction('target_nested');

    return action({index, key, value});
  }

  render(){
    let { props } = this;
    let { dispatch, sample } = props;

    return (
      <div className="container">
        <h2>Text input</h2>
        <Input type="text" action="text_update" dispatch={dispatch} value={sample.sample_text} />
        <h2>Text input (read only)</h2>
        <Input type="text" readOnly value="Look but don't touch!" />
        <h2>Text input (in nested array)</h2>
        <Input type="text" action={this.updateNestedArrayItem.bind(this, 0, 'foo')} dispatch={dispatch} value={sample.nested_array[0].foo} />
        <h2>Textarea input</h2>
        <Input type="textarea" action="textarea_update" dispatch={dispatch} value={sample.sample_textarea} />
        <h2>Date input</h2>
        <DateTime action="date_update" dispatch={dispatch} value={sample.sample_date} />
      </div>
    );
  }
}

export default connect((state)=>{ let { sample } = state; return { sample }; } )(Examples);
