import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import user from './user/reducer'

const reducers = combineReducers({
  user,
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store