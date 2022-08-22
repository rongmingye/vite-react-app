
const initUser = localStorage.user ? JSON.parse(JSON.stringify(user)) : {}

export default user = (state = initUser, action) => {
  switch(action.type) {
    case 'SET_USER_INFO': {
      state.user = action.user
    }
  }
  return state
}
