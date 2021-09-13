
export const EVENT_LOADING = "EVENT_LOADING";
export const EVENT_FAIL = "EVENT_FAIL";
export const EVENT_SUCCESS = "EVENT_SUCCESS";
export const MOVIE_DETAIL_LOADING = "MOVIE_DETAIL_LOADING";
export const EVENT_DETAIL_LOADING = "EVENT_DETAIL_LOADING";
export const MOVIE_DETAIL_SUCCESS = "MOVIE_DETAIL_SUCCESS";
export const EVENT_DETAIL_SUCCESS = "EVENT_DETAIL_SUCCESS";
export const MOVIE_DETAIL_FAIL = "MOVIE_DETAIL_FAIL";
export const EVENT_DETAIL_FAIL = "EVENT_DETAIL_FAIL";
export const SET_MOVIE_ID = "SET_MOVIE_ID";

export type EventType = {
  data: {
    _embedded: {
      events: EventsSearch[]
    }
    page: {
      size: string,
      totalPages: number,
      number: number,
    }
  }
}

export type MovieDetailType = {
  Title: string,
  Genre: string,
  Plot: string,
  Language: string,
  Director: string,
  Actors: string,
  Poster?: string,
  Runtime: string,
  imdbID: string,
};

export type EventDetailType = {
  data : {
    name: string,
    images: DetailImagesType[],
    dates: {
      start: {
        localDate: string,
        localTime: string
      }
    }
    info: string
  }
}

export type PageType = {
  page: number;
};

export type EventsSearch = {
  name: string,
  id: string,
  dates: {
    start: {
      localDate: string
    }
  }
  _embedded: {
    venues: VenuesType[]
  }
}

export type VenuesType = {
  name: string
}

export type EventTotalResults = {
  totalResults: string
}

export type DetailImagesType = {
  url: string
}

export type MovieTitle = {
  title: string
};

export type MoiveId = {
  id: string
};

export interface EventLoading {
  type: typeof EVENT_LOADING
}

export interface EventFail {
  type: typeof EVENT_FAIL
}

export interface EventSuccess {
  type: typeof EVENT_SUCCESS,
  payload: EventType
}

export interface MovieDetailLoading {
  type: typeof MOVIE_DETAIL_LOADING
}

export interface EventDetailLoading {
  type: typeof EVENT_DETAIL_LOADING
}

export interface MovieDetailFail {
  type: typeof MOVIE_DETAIL_FAIL
}

export interface EventDetailFail {
  type: typeof EVENT_DETAIL_FAIL
}

export interface MovieDetailSuccess {
  type: typeof MOVIE_DETAIL_SUCCESS,
  payload: MovieDetailType;
}

export interface EventDetailSuccess {
  type: typeof EVENT_DETAIL_SUCCESS,
  payload: EventDetailType;
}

export interface SetMoiveId {
  type: typeof SET_MOVIE_ID,
  payload: MoiveId;
}

export type EventDispatchTypes = EventLoading | EventFail | EventSuccess;

export type MovieDetailsDispatchTypes =
  | MovieDetailLoading
  | MovieDetailFail
  | MovieDetailSuccess
  | SetMoiveId;

export type EventDetailsDispatchTypes = EventDetailLoading | EventDetailFail | EventDetailSuccess;
