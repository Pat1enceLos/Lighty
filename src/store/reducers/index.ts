import { combineReducers } from 'redux'
import { ADD_USER_INFO } from "../actions";

const initialState = {
  userInfo: {}
};

function reduxStore(state = initialState, action: any) {
  switch (action.type) {
    case ADD_USER_INFO:
      state.userInfo = Object.assign(action.info, state.userInfo);
      return state;
    default:
      return state;
  }
}

const lightyReducer = combineReducers({reduxStore});

export default lightyReducer;
