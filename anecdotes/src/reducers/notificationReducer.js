const initialNotification = null

const notificationReducer = (state = initialNotification, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    case 'RESET_NOTIFICATION':
      return action.data
    default:
      return state
  }
}

const setNotification = (content) => {
  return {
    type: 'SET_NOTIFICATION',
    data: content
  }
}

const resetNotification = () => {
  return {
    type: 'RESET_NOTIFICATION',
    data: initialNotification
  }
}

export const notify = (content, delay) => {
  return async dispatch => {
    await dispatch(setNotification(content))
    setTimeout(() => { dispatch(resetNotification()) }, delay * 1000)
  }
}

export default notificationReducer