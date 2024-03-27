export const FETCH_STUDENT_LIST = 'FETCH_STUDENT_LIST';
export const FETCH_ADD_LIST = 'FETCH_ADD_LIST';
export const FETCH_SUCCESS_LIST = 'FETCH_SUCCESS_LIST';
export const FETCH_FAILURE_LIST = 'FETCH_FAILURE_LIST';


export const addStudentList = (value) => {

  console.log("dispatch come --> ",value)

    return async (dispatch) => {
        dispatch({ type: FETCH_STUDENT_LIST });
    
        try {
          dispatch({ type: FETCH_ADD_LIST, payload: value });

          console.log("dispatch add --> ",value)
        } catch (error) {
          console.log("dispatch error --> ",error)
          dispatch({ type: FETCH_FAILURE_LIST, payload: error.message });
        }
      };


}
