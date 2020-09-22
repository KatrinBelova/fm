import {
  GET_ARTIST_START,
  GET_ARTIST_SUCCESS,
  GET_ARTIST_FAILURE,
} from "../redux/types";
import { Image } from "./commonTypes";

interface Tag {
  name: string;
  url: string;
}

export interface Artist {
  mbid?: string;
  name?: string;
  url?: string;
  image?: Image[];
  tags?: {
    tag: Tag[];
  };
  bio?: {
    summary?: string;
    content?: string;
  };
}

export interface ArtistState {
  data: Artist;
  isLoading: boolean;
  error: string | null | { message: string };
}

export interface GetArtistAction {
  type:
    | typeof GET_ARTIST_START
    | typeof GET_ARTIST_SUCCESS
    | typeof GET_ARTIST_FAILURE;
  payload: Artist;
}
