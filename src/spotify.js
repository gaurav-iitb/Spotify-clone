export const authentication = "https://accounts.spotify.com/authorize";

const redirecthome = "http://localhost:3000/";

const spotclientid = "abdbdba2b178431386857fe6655c48d9";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponseUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial,item) => {

        let parts=item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    },{});
}


export const loginUrl = `${authentication}?client_id=${spotclientid}&redirect_uri=${redirecthome}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
