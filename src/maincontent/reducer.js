import { ConstructionOutlined } from "@mui/icons-material";
import { useState } from "react";

export const initialstate = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  discover_weekly: null,
  current_playing: null,
  volume: null
};

//here state is previous state which the reducer function gets automatically.
function reducer(state, action) {
  // console.log(action);
  console.log("action is", action)
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_CURRENT_PLAYING":
      return {
        ...state,
        current_playing: action.current_playing,
      };
    case "SET_IS_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    default:
      return state;
  }
}

export default reducer;
