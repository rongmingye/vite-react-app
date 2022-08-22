import api from '@/api'

export default {
  getUserInfo: (id) => {
    return (dispatch) => {
      api.getUserInfo(id).then(res => {
        dispatch(setUserInfo(res.data))
      })
    }
  },
  setUserInfo: (user) => {
    return {
      type: 'SET_USER_Info',
      user: user
    }
  }
}