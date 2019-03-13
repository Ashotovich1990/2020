
const demoReducer = (state={ id: "5c8850e46a8655813a4aa88d", username: "Guest", password: "password" }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      default:
        return state;
    }
  };
  
  export default demoReducer;