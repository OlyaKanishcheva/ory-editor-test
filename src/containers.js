import { connect } from 'react-redux'
import AddEditor from './AddEditor/index'
import { updateContent } from '../actions'

export const NewColor = connect(
  state => 
  	({
  		content: state.content,
  	}),
  dispatch =>
    ({
      onUpdateEditor(content) {
        dispatch(updateContent(content))
      }
    })
)(AddColorForm)