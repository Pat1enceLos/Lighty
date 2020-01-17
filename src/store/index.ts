import { createStore } from 'redux'
import lightyReducer from './reducers/index'

let store = createStore(lightyReducer);

export default store;
