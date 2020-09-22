import {
  SEARCH_TRACKS_START,
  SEARCH_TRACKS_SUCCESS,
  SEARCH_TRACKS_FAILURE,
} from "../types/index";
import { SearchResult } from "../../models/searchTracksTypes";
import { fmAPI } from "../../api";
import { Dispatch } from "redux";

interface SearchResponse {
  data: {
    results: SearchResult;
  };
  status: number;
}

const searchTrackStart = () => {
  return {
    type: SEARCH_TRACKS_START,
  };
};

const searchTrackSuccess = (data: SearchResult) => {
  return {
    type: SEARCH_TRACKS_SUCCESS,
    payload: data,
  };
};

const searchTrackFailure = (error: string) => {
  return {
    type: SEARCH_TRACKS_FAILURE,
    payload: error,
  };
};

export const searchTrackAction = (query: string) => async (
  dispatch: Dispatch
) => {
  dispatch(searchTrackStart());
  try {
    const response: SearchResponse = await fmAPI.searchTrack(query);
    if (response.status === 200) {
      let artist = response?.data?.results;
      dispatch(searchTrackSuccess(artist));
    }
  } catch (e) {
    dispatch(searchTrackFailure(e?.response?.data?.message));
  }
};
