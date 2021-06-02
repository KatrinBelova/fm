import {
  GET_TRACKS_START,
  GET_TRACKS_SUCCESS,
  GET_TRACKS_FAILURE,
  LOADMORE_TRACKS_START,
  LOADMORE_TRACKS_SUCCESS,
  LOADMORE_TRACKS_FAILURE,
} from "../redux/types";
import { Artist } from "./artistTypes";
import { Image } from "./commonTypes";

export interface Track {
  mbid: string;
  name: string;
  artist?: Artist | string;
  url?: string;
  duration?: string;
  image?: Image[];
}

export interface TracksData {
  track: Track[] | [];
  "@attr": {
    page: string;
    totalPages: string;
  };
}

export interface TracksState {
  data: TracksData;
  isLoading: boolean;
  isLoadingMore: boolean;
  error: string | null | { message: string };
}

export interface GetTracksAction {
  type:
    | typeof GET_TRACKS_START
    | typeof GET_TRACKS_SUCCESS
    | typeof GET_TRACKS_FAILURE
    | typeof LOADMORE_TRACKS_START
    | typeof LOADMORE_TRACKS_SUCCESS
    | typeof LOADMORE_TRACKS_FAILURE;
  payload: TracksData;
}
