import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Loginpage/Login";
import { getTokenFromResponseUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import SpotPlayer from "./maincontent/SpotPlayer";
import { useStateContextvalue } from "./context/DataStore";
const spotify = new SpotifyWebApi();

function App() {
  // const [token,settoken]= useState(null);
  const [{ user, token }, dispatch] = useStateContextvalue();

  useEffect(() => {
    const hash = getTokenFromResponseUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcMRkhP70bW4g").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      }); // the id in actual spotify webpage after playlist/ in url.
    }
  }, []);

  return (
    <div className="App">
      {token ? <SpotPlayer spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
