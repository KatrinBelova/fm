import { combineReducers } from "redux";
import { tracksReducer } from "./tracksReducer";
import { artistReducer } from "./artistReducer";
import { searchTrackReducer } from "./searchTrackReducer";

const rootReducer = combineReducers({
  tracksData: tracksReducer,
  artistData: artistReducer,
  searchResult: searchTrackReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
