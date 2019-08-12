/**
 * Redux: Combine Multiple Reducers
 */
//* Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//! Reducers
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

//* Types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

//! Reducers
const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

/**
 ** Define the root reducer
 * Combine two different Reducers
 */
const rootReducer = Redux.combineReducers({
  auth: authReducer,
  count: counterReducer
})

//** Create a store
const store = Redux.createStore(rootReducer);
