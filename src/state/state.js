import { combineReducers } from "redux";
import cart from "./cart/reducer";
import discount from "./discount/reducer";

let state = combineReducers({
  cart,
  discount
});

export default state;
