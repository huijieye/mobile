import {createStore,combineReducers} from 'redux'
import {loginReducer} from '../reducers/User'
import {callReducer} from '../reducers/Call'

const reducers = combineReducers({
    user:loginReducer,
    call:callReducer
})
const store = createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store