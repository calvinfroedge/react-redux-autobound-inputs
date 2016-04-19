import { handleActions } from 'redux-actions'
import { array, object, update, target } from 'redux-modifiers'

export default handleActions({
  'text_update': target('sample_text', update),
  'date_update': target('sample_date', update),
  'textarea_update': target('sample_textarea', update),
}, {
  'sample_text': 'Initial text',
  'sample_date': new Date(),
  'sample_textarea': 'Initial textarea'
});
