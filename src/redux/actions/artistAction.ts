import {
  GET_ARTIST_START,
  GET_ARTIST_SUCCESS,
  GET_ARTIST_FAILURE,
} from "../types/index";
import { Dispatch } from "redux";
import { Artist } from "../../models/artistTypes";
import { fmAPI } from "../../api/index";

interface Response {
  data: {
    artist: Artist;
  };
  status: number;
}

const getArtistStart = () => {
  return {
    type: GET_ARTIST_START,
  };
};

const getArtistSuccess = (data: Artist) => {
  return {
    type: GET_ARTIST_SUCCESS,
    payload: data,
  };
};

const getArtistFailure = (error: string) => {
  return {
    type: GET_ARTIST_FAILURE,
    payload: error,
  };
};

export const getArtistAction = (id: string) => async (dispatch: Dispatch) => {
  dispatch(getArtistStart());
  try {
    const response: Response = await fmAPI.getArtistInfo(id);
    if (response.status === 200) {
      let artist = response?.data?.artist;
      dispatch(getArtistSuccess(artist));
    }
  } catch (e) {
    dispatch(getArtistFailure(e?.response?.data?.message));
  }
};
