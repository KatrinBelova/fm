import {
  SEARCH_TRACKS_START,
  SEARCH_TRACKS_SUCCESS,
  SEARCH_TRACKS_FAILURE,
} from "../redux/types";
import { Track } from "./tracksTypes";

export interface SearchResult {
  trackmatches?: {
    track: Track[];
  };
  "opensearch:totalResults"?: string;
  "opensearch:startIndex"?: string;
  "opensearch:itemsPerPage"?: string;
}

export interface SearchResultState {
  data: SearchResult;
  isLoading: boolean;
  error: string | null | { message: string };
}

export interface SearchTrackAction {
  type:
    | typeof SEARCH_TRACKS_START
    | typeof SEARCH_TRACKS_SUCCESS
    | typeof SEARCH_TRACKS_FAILURE;
  payload: {};
}
