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
    let _token = hash.access_token;
    if(_token){
      localStorage.setItem("tokenStored", _token)
    }
    if(!_token && localStorage.getItem("tokenStored")){
      console.log("token stored is", localStorage.getItem("tokenStored"))
      _token = localStorage.getItem("tokenStored");
    }
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
        // console.log(playlists)
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("3IyPfHjbfThDU8HuBbOC9j").then((response) => {
        console.log("reponse is", response)
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
