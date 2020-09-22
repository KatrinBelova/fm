import {
  GET_TRACKS_START,
  GET_TRACKS_SUCCESS,
  GET_TRACKS_FAILURE,
  LOADMORE_TRACKS_START,
  LOADMORE_TRACKS_SUCCESS,
  LOADMORE_TRACKS_FAILURE,
} from "../types/index";
import { Dispatch } from "redux";
import { TracksData } from "../../models/tracksTypes";

import { fmAPI } from "../../api/index";

interface TracksResponse {
  tracks: {
    track: [];
    "@attr": {
      page: string;
      totalPages: string;
    };
  };
}

interface Response {
  data: TracksResponse;
  status: number;
}

const getTracksStart = () => {
  return {
    type: GET_TRACKS_START,
  };
};

const getTracksSuccess = (data: TracksData) => {
  return {
    type: GET_TRACKS_SUCCESS,
    payload: data,
  };
};

const getTracksFailure = (error: string) => {
  return {
    type: GET_TRACKS_FAILURE,
    payload: error,
  };
};

export const getTracksAction = (page: number) => async (dispatch: Dispatch) => {
  dispatch(getTracksStart());
  try {
    const response: Response = await fmAPI.getTracks(page);
    if (response.status === 200) {
      let tracks = response?.data?.tracks;
      dispatch(getTracksSuccess(tracks));
    }
  } catch (e) {
    dispatch(getTracksFailure(e?.response?.data?.message));
  }
};

const loadMoreTracksStart = () => {
  return {
    type: LOADMORE_TRACKS_START,
  };
};

const loadMoreTracksSuccess = (data: TracksData) => {
  return {
    type: LOADMORE_TRACKS_SUCCESS,
    payload: data,
  };
};

const loadMoreTracksFailure = (error: string) => {
  return {
    type: LOADMORE_TRACKS_FAILURE,
    payload: error,
  };
};

export const loadMoreTracksAction = (page: number) => async (
  dispatch: Dispatch
) => {
  dispatch(loadMoreTracksStart());
  try {
    const response: Response = await fmAPI.getTracks(page);
    if (response.status === 200) {
      let tracks = response?.data?.tracks;
      dispatch(loadMoreTracksSuccess(tracks));
    }
  } catch (e) {
    dispatch(loadMoreTracksFailure(e?.response?.data?.message));
  }
};
