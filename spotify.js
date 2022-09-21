// documentation / web - playback - sdk / quick - start / #
// https://developer.spotify.com/

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/" ;
const clientId = "9069e5b58ce8436ba653da7b33056cb5"
const scopes = [
    "user-read-currently-playing" ,
    "user-read-recently-played" ,
    "user-read-playback-state" ,
    "user-top-read" ,
    "user-modify-playback-state" ,
];

export const getTokenFromResponse = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };

//LOGIN_URL
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
