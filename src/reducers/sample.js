import { handleActions } from 'redux-actions'
import { array, object, update, target } from 'redux-modifiers'

export default handleActions({
  'text_update': target('sample_text', update),
  'date_update': target('sample_date', update),
  'textarea_update': target('sample_textarea', update),
  'target_nested': (state, action)=>{
    let { index, key, value } = action.payload;
    return target('nested_array', index, key, update)(state, {payload: value});
  },
  'nested_array_update': array.updateByIndex
}, {
  'sample_text': 'Initial text',
  'sample_date': new Date(),
  'sample_textarea': 'Initial textarea',
  'nested_array': [
    {foo: 'bar', id: 1}
  ]
});
