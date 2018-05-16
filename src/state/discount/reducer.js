import initialState from "./initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case "DISCOUNT_ENABLED": {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return { ...state };
  }
};
