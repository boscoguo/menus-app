import {
  EventDispatchTypes,
  EventType,
  EVENT_SUCCESS,
  EVENT_FAIL,
  EVENT_LOADING
} from "../action/eventsActionType";

interface DefaultStateI {
  loading: boolean;
  event?: EventType;
}
const defaultState: DefaultStateI = {
  loading: false
};

const eventReducer = (
  state: DefaultStateI = defaultState,
  action: EventDispatchTypes
) : DefaultStateI => {
  switch (action.type) {
    case EVENT_FAIL: 
      return {
        loading: false
      };
    case EVENT_LOADING: 
      return {
        loading: true
      };
    case EVENT_SUCCESS:
      return {
        loading: false,
        event: action.payload,
      }
    default: 
      return state;
  }
  return state;
}

export default eventReducer;
