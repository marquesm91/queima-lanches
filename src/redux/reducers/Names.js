import {
  SET_NAMES,
  SET_NAMES_LOADED
} from '../actions';

const initialState = {
  list: [],
  loaded: false,
};

const Names = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAMES:
      return { ...state, list: action.names };
    case SET_NAMES_LOADED:
      return { ...state, loaded: true };
    default:
      return state;
  }
};

export default Names;