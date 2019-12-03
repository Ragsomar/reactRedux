const CountReducer = (state = 0, action) => {
  switch (action.type) {
    case "Add1":
      return state + 1;
    case "Remove1":
      return state - 1;
    case "Add10":
      return state + 10;
    case "Remove10":
      return state - 10;
    case "Reset":
      return state = 0;
    default:
      return state;
  }
};

export default CountReducer;