// reducer.js
import { UPDATE_ACCESS_TOKEN } from './actionTypes';
import { UPDATE_USER_TOKEN } from './actionTypes';


const initialState = {
  token: '',
  userToken: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ACCESS_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
      case UPDATE_USER_TOKEN:
        return {
          ...state,
          userToken: action.payload,
        };
    default:
      return state;
  }
};

export default reducer;
