import store from "./store";
import { bugAdded, bugRemoved } from "./actions";

// subscribing to the store, executes the code everytime changes are made to the state.
// below returns a function to unsubscribe, so we capture it
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Bug1"));

//if we call the unsubscribe, we no longer log the changes.
//unsubscribe();

store.dispatch(bugRemoved(1));
