import {
  GET_TRACKS_START,
  GET_TRACKS_SUCCESS,
  GET_TRACKS_FAILURE,
  LOADMORE_TRACKS_START,
  LOADMORE_TRACKS_SUCCESS,
  LOADMORE_TRACKS_FAILURE,
} from "../types/index";
import { GetTracksAction, TracksState } from "../../models/tracksTypes";

const initialState: TracksState = {
  data: {
    track: [],
    "@attr": {
      page: "1",
      totalPages: "0",
    },
  },
  isLoading: false,
  isLoadingMore: false,
  error: null,
};

export const tracksReducer = (
  state = initialState,
  action: GetTracksAction
): TracksState => {
  switch (action.type) {
    case GET_TRACKS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TRACKS_SUCCESS:
      return {
        ...state,
        data: {
          track: action.payload.track,
          "@attr": action.payload["@attr"],
        },
        isLoading: false,
      };
    case GET_TRACKS_FAILURE:
      return {
        ...state,
        // error: action.payload.,
        isLoading: false,
      };
    case LOADMORE_TRACKS_START:
      return {
        ...state,
        isLoadingMore: true,
      };
    case LOADMORE_TRACKS_SUCCESS:
      return {
        ...state,
        data: {
          track: [...state.data.track, ...action.payload.track],
          "@attr": action.payload["@attr"],
        },
        isLoadingMore: false,
      };
    case LOADMORE_TRACKS_FAILURE:
      return {
        ...state,
        // error: action.payload.,
        isLoadingMore: false,
      };
    default:
      return state;
  }
};
