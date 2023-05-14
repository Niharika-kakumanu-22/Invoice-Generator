// src/reducers/index.js

const initialState = {
    // Define your initial state here
    // Example: count: 0
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      // Define your action types and corresponding state modifications here
      // Example:
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  