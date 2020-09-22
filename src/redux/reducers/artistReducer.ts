import {
  GET_ARTIST_START,
  GET_ARTIST_SUCCESS,
  GET_ARTIST_FAILURE,
} from "../types/index";
import { ArtistState, GetArtistAction, Artist } from "../../models/artistTypes";

const artist: Artist = {};

const initialState: ArtistState = {
  data: artist,
  isLoading: false,
  error: null,
};

export const artistReducer = (
  state = initialState,
  action: GetArtistAction
): ArtistState => {
  switch (action.type) {
    case GET_ARTIST_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ARTIST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case GET_ARTIST_FAILURE:
      return {
        ...state,
        // error: action.payload.,
        isLoading: false,
      };
    default:
      return state;
  }
};
