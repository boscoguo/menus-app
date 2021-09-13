import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import eventDetailsReducer from "./eventDetailsReducer";

const RootReducer = combineReducers({
  events: eventReducer,
  eventsDetail: eventDetailsReducer,
});

export default RootReducer;
