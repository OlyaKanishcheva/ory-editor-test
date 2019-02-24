export const updateContent = (state = {}, action) => {
  switch (action.type) {
    case 'update-content':
      return {
        content: action.content,
      }
    default :
      return state
  }
}