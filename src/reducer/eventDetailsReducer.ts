import {
    EventDetailsDispatchTypes,
    EventDetailType,
    EVENT_DETAIL_SUCCESS,
    EVENT_DETAIL_LOADING,
    EVENT_DETAIL_FAIL
  } from "../action/eventsActionType";
  
  interface DefaultStateI {
    loading: boolean;
    eventDetail?: EventDetailType;
    selectedMovieId?: string;
  }
  const defaultState: DefaultStateI = {
    loading: false
  };
  
  const eventDetailsReducer = (
    state: DefaultStateI = defaultState,
    action: EventDetailsDispatchTypes
  ): DefaultStateI => {
    switch (action.type) {
      case EVENT_DETAIL_FAIL:
        return {
          loading: false
        };
      case EVENT_DETAIL_LOADING:
        return {
          loading: true
        };
      case EVENT_DETAIL_SUCCESS:
        return {
          loading: false,
          eventDetail: action.payload
        };
    //   case SET_MOVIE_ID:
    //     const { id } = action.payload;
    //     return {
    //       loading: false,
    //       selectedMovieId: id
    //     };
      default:
        return state;
    }
    return state;
  };
  
  export default eventDetailsReducer;
  