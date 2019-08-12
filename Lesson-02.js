/**
 * Redux: Get State from the Redux Store
 */

const store = Redux.createStore((state = 5) => state);

// change code below this line
// * Answer:
const currentState = store.getState();
