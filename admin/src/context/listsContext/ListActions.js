export const getListsStart = () => ({
    type: "GET_LISTS_START",
  });
  
  export const getListsSuccess = (lists) => ({
    type: "GET_LISTS_SUCCESS",
    payload: lists,
  });
  
  export const getListsFailure = () => ({
    type: "GET_LISTS_FAILURE",
  });
 


  export const deleteListsStart = () => ({
    type: "DELETE_LIST_START",
  });
  
  export const deleteListsSuccess = (id) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: id,
  });
  
  export const deleteListsFailure = () => ({
    type: "DELETE_LIST_FAILURE",
  });
  


{/*  export const createListsStart = () => ({
    type: "CREATE_LIST_START",
  });
  
  export const createListsSuccess = (movie) => ({
    type: "CREATE_LIST_SUCCESS",
    payload: movie,
  });
  
  export const createListsFailure = () => ({
    type: "CREATE_LIST_FAILURE",
  });




  export const updateListsStart = () => ({
    type: "UPDATE_LIST_START",
  });
  
  export const updateListsSuccess = (movie) => ({
    type: "UPDATE_LIST_SUCCESS",
    payload: movie,
  });
  
  export const updateListsFailure = () => ({
    type: "UPDATE_LIST_FAILURE",
  });
*/} 
 