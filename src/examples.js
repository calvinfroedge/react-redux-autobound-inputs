import React from 'react'
import { Input, DateTime } from './inputs'
import { connect } from 'react-redux'

class Examples extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let { props } = this;
    let { dispatch, sample } = props;

    return (
      <div className="container">
        <h2>Text input</h2>
        <Input type="text" action="text_update" dispatch={dispatch} value={sample.sample_text} />
        <h2>Textarea input</h2>
        <Input type="textarea" action="textarea_update" dispatch={dispatch} value={sample.sample_textarea} />
        <h2>Date input</h2>
        <DateTime action="date_update" dispatch={dispatch} value={sample.sample_date} />
      </div>
    );
  }
}

export default connect((state)=>{ let { sample } = state; return { sample }; } )(Examples);
