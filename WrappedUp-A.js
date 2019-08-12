const INCREMENT = "INCREMENT"; // define a constant for increment action types
const DECREMENT = "DECREMENT"; // define a constant for decrement action types

// const initialState = {
//   count: 1
// }

// define the counter reducer which will increment or decrement the state based on the action it receives
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

const incAction = () => {
  return { type: INCREMENT };
}; // define an action creator for incrementing

const decAction = () => {
  return {
    type: DECREMENT
  };
}; // define an action creator for decrementing

const store = Redux.createStore(counterReducer); // define the Redux store here, passing in your reducers

/**
 * Use the Spread Operator on Arrays
 */

const immutableReducer = (state = ["Do not mutate state!"], action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      // don't mutate state here or the tests will fail
      return [...state, action.todo];
    default:
      return state;
  }
};

const addToDo = todo => {
  return {
    type: "ADD_TO_DO",
    todo
  };
};

const store = Redux.createStore(immutableReducer);

/**
 * Remove item from array
 */
const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      let newArr = [
        ...state.filter((elem, idx) => {
          // [1,2,3,5]
          return idx !== action.index;
        })
      ];
      return newArr;
    default:
      return state;
  }
};

const removeItem = index => {
  return {
    type: "REMOVE_ITEM",
    index
  };
};

const store = Redux.createStore(immutableReducer);
