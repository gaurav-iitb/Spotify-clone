import { useState } from "react";

export const initialstate = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
};

//here state is previous state which the reducer function gets automatically.
function reducer(state, action) {
  // console.log(action);

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
    default:
      return state;
  }
}

export default reducer;
