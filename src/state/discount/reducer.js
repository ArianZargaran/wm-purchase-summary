import initialState from "./initialState";
import { DISCOUNT_ENABLED } from "./action-creators";
import { CALC_TOTAL } from "./action-creators";

export default (state = initialState, action) => {
  switch (action.type) {
    case DISCOUNT_ENABLED: {
      return {
        total: action.payload
      };
    }
    case CALC_TOTAL: {
      return {
        total: action.payload
      };
    }
    default:
      return { ...state };
  }
};
