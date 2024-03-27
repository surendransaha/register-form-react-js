import { combineReducers } from "redux";
import {
    FETCH_STUDENT_LIST,
    FETCH_ADD_LIST,
    FETCH_SUCCESS_LIST,
    FETCH_FAILURE_LIST
  } from './action';

  const initialState = {
    loading: false,
    students: [],
    error: null,
  };

  const studentReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_STUDENT_LIST:
        return { ...state, loading: true };
      case FETCH_ADD_LIST:
        return {...state, loading: false, error: null, students: [...state.students, action.payload]};
      case FETCH_SUCCESS_LIST:
        return { ...state, loading: false, students: action.payload, error: null };
      case FETCH_FAILURE_LIST:
        return { ...state, loading: false, students: [], error: action.payload };
      default:
        return state;
    }
  };
  
  const rootReducer = combineReducers({
    student: studentReducer,
  });
  
  export default rootReducer;