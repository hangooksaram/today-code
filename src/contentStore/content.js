import {createStore, applyMiddleware} from 'react-redux'
import thunk from 'react-thunk'
import contentReducer from './contentReducer'
export default createStore(contentReducer, applyMiddleware(thunk));