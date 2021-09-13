import { Dispatch } from "redux";
import {
  EventDispatchTypes,
  MovieDetailsDispatchTypes,
  EventDetailsDispatchTypes,
  EVENT_SUCCESS,
  EVENT_FAIL,
  EVENT_LOADING,
  SET_MOVIE_ID,
  EVENT_DETAIL_LOADING,
  EVENT_DETAIL_SUCCESS,
  EVENT_DETAIL_FAIL,
} from "./eventsActionType";
import axios from "axios";

export const getEvent = (page: number) => async (
  dispatch: Dispatch<EventDispatchTypes>
) => {
  try {
    dispatch({ type: EVENT_LOADING })
    const res = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&page=${page}`
    )
    dispatch({ type: EVENT_SUCCESS, payload: { data: res.data } })
  } catch (e) {
    dispatch({ type: EVENT_FAIL })
  }
}

export const getEventDetails = (id: string) => async (
  dispatch: Dispatch<EventDetailsDispatchTypes>
) => {
  try {
    dispatch({
      type: EVENT_DETAIL_LOADING
    });
    const res = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*`
    )
    dispatch({
      type: EVENT_DETAIL_SUCCESS,
      payload: { data: res.data }
    })
  } catch (e) {
    dispatch({ type: EVENT_DETAIL_FAIL })
  }
}



export const setMovieId = (id: string) => async (
  dispatch: Dispatch<MovieDetailsDispatchTypes>
) => {
  dispatch({
    type: SET_MOVIE_ID,
    payload: { id }
  });
};
