/*
There are three parts to this challenge.

Declare a store variable.
Assign it to the createStore() method.
Pass in the reducer as an argument.
*/

// * Answer:

const reducer = (state = 5) => state;

const state = Redux.createStore(reducer);
