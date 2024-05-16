import React, { useEffect } from "react";
import "./Footer.css";
import { PlayCircleOutline } from "@mui/icons-material";
import { SkipPrevious } from "@mui/icons-material";
import { SkipNext } from "@mui/icons-material";
import { Shuffle } from "@mui/icons-material";
import { Repeat } from "@mui/icons-material";
import { PlaylistPlay, VolumeDown } from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";
import { useStateContextvalue } from "../../context/DataStore";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";

function Footer({ spotify }) {
  const [{ current_playing, playing }, dispatch] = useStateContextvalue();

  useEffect(() => {
    spotify.getMyCurrentPlayingTrack().then((track) => {
      console.log("track is", track);
      dispatch({
        type: "SET_CURRENT_PLAYING",
        current_playing: track,
      });
      dispatch({
        type: "SET_IS_PLAYING",
        playing: track.is_playing,
      });
    });
  }, []);

  function HandlePause() {
    spotify.pause().then((track) => {
      dispatch({
        type: "SET_IS_PLAYING",
        playing: false,
      });
    });
  }

  function HandlePlay() {
    spotify.play().then((track) => {
      dispatch({
        type: "SET_IS_PLAYING",
        playing: true,
      });
    });
  }

  function HandleSkipNext() {
    spotify.skipToNext().then((track) => {
      console.log("track is", track);
      dispatch({
        type: "SET_CURRENT_PLAYING",
        current_playing: track,
      });
      dispatch({
        type: "SET_IS_PLAYING",
        playing: track.is_playing,
      });
    });
  }

  function HandleSkipPrev() {
    spotify.skipToPrevious().then((track) => {
      console.log("track is", track);
      dispatch({
        type: "SET_CURRENT_PLAYING",
        current_playing: track,
      });
      dispatch({
        type: "SET_IS_PLAYING",
        playing: track.is_playing,
      });
    });
  }

  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer__albumLogo"
          src={
            current_playing?.item?.album?.images.length > 0
              ? current_playing?.item?.album.images[0].url
              : ""
          }
          alt="pic"
        />
        <div className="song_info">
          <div>{current_playing?.item?.name}</div>
          <p>
            {current_playing?.item?.artists?.map((artist) => {
              // return (<p>{artist.name} ,</p>)
              return `${artist.name}, `;
            })}
          </p>
          {/* <p>gaurav</p> */}
        </div>
      </div>
      <div className="footer_center">
        {/* <Shuffle className="footer__icon" /> */}
        <SkipPrevious onClick={HandleSkipPrev} className="footer__icon" />
        {playing ? (
          <PauseCircleOutlineOutlinedIcon
            className="footer__icon"
            fontSize="large"
            onClick={HandlePause}
          />
        ) : (
          <PlayCircleOutline
            onClick={HandlePlay}
            className="footer__icon"
            fontSize="large"
          />
        )}
        <SkipNext onClick={HandleSkipNext} className="footer__icon" />
        {/* <Repeat className="footer__icon" /> */}
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            {/* <PlaylistPlay /> */}
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider defaultValue={100} aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
