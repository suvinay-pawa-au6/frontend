import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers/rootReducer'

const store = createStore(rootReducer,applyMiddleware(thunk))
// store.subscribe(()=>console.log('store subscribed',store.getState()))

export default store