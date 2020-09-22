import axios from "axios";

const api_key: string = "6d1be39cbaef40a31ada20346edb9bfa";
const format: string = "json";
// http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=YOUR_API_KEY&format=json

const instance = axios.create({
  baseURL: "http://ws.audioscrobbler.com/2.0/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
  responseType: "json",
});

export const fmAPI = {
  getTracks(page: number = 1, pageSize: number = 10) {
    return instance.get(
      `?method=tag.gettoptracks&tag=disco&api_key=${api_key}&format=${format}&limit=${pageSize}&page=${page}`
    );
  },

  getArtistInfo(id: string) {
    return instance.get(
      `?method=artist.getinfo&mbid=${id}&api_key=${api_key}&format=${format}`
    );
  },

  searchTrack(query: string) {
    return instance.get(
      `?method=track.search&track=${query}&api_key=${api_key}&format=${format}`
    );
  },
};
