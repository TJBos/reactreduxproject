import { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } from "./actionTypes";

let lastId = 0;

//default state is the initial state
function reducer(state = [], action) {
  if (action.type === BUG_ADDED) {
    //note that we don't do state.push() because this mutates the state! We need all immutability!
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type === BUG_REMOVED) {
    return state.filter((bug) => bug.id !== action.payload.id);
  } else if (action.type === BUG_RESOLVED) {
    return state.map((bug) => {
      if (bug.id === action.payload.id) {
        //finish
      }
    });
  }

  return state;
}

export default reducer;
