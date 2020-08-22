import {createStore, applyMiddleware} from 'react-redux'
import thunk from 'redux-thunk'
import contentReducer from './contentReducer'
export default createStore(contentReducer, applyMiddleware(thunk));