import {
  SET_USER_AGE,
  SET_USER_NAME,
  INCREASE_NUMBER,
  GET_CITIES,
  POST_CITIES,
  LOADING,
  LOADING_FAILED,
} from './actions';

const initialState = {
  name: '',
  age: 0,
  number: 0,
  cities: [],
  load: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return {...state, name: action.payload};
    case SET_USER_AGE:
      return {...state, age: action.payload};
    case INCREASE_NUMBER:
      return {...state, number: state.number + 1};
    case GET_CITIES:
      return {...state, cities: action.payload};
    case LOADING:
      return {...state, load: true};
    case LOADING_FAILED:
      return {...state, load: false};
    case POST_CITIES:
    case LOADING:
      return {...state, load: false};
    default:
      return state;
  }
}

export default userReducer;
