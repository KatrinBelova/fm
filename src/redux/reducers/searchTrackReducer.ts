import {
  SEARCH_TRACKS_START,
  SEARCH_TRACKS_SUCCESS,
  SEARCH_TRACKS_FAILURE,
} from "../types/index";
import {
  SearchResultState,
  SearchTrackAction,
} from "../../models/searchTracksTypes";

const initialState: SearchResultState = {
  data: {},
  isLoading: false,
  error: null,
};

export const searchTrackReducer = (
  state = initialState,
  action: SearchTrackAction
): SearchResultState => {
  switch (action.type) {
    case SEARCH_TRACKS_START:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_TRACKS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case SEARCH_TRACKS_FAILURE:
      return {
        ...state,
        // error: action.payload.,
        isLoading: false,
      };
    default:
      return state;
  }
};
