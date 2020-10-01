import React, { useEffect, useState } from "react";
import "./App.css";
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from './DataLayer';

// Super object that's responsible for interaction between our React app and Spotify
// Create an instance of SpotifyWebApi
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  
  // Grab objects from the DataLayer
  const [{ DataLayer }, dispatch] = useDataLayerValue();

  /* Run code based on a given condition
     This useEffect will run either when the component first loads and/or
     whenever the variables inside the '}, [])' change
  */
  useEffect(() => {
    const hash = getTokenFromUrl();

    // The window.location.hash will clear the token so we can do it for security reasons. 
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      // Giving access token to the spotify api
      // Here's your magic key that will allow the react app to interact with spotify api
      spotify.setAccessToken(_token);

      // async call that returns a promise
      spotify.getMe()
        .then(user => {

          // Shoot the user object into the DataLayer
          dispatch({
            type: 'SET_USER',
            user: user,
          })
      });
    }

    console.log(' i have a token >>>', token);

  }, []);

  /* This DataLayer?.user refers to the { DataLayer } above in the DataLayer. 
     This console.log is a good test to make sure we're able to pull down an object from DataLayer
  */
  console.log('This is coming from the DataLayer >>>> ', DataLayer?.user);

  return (
    <div className="app">
      {
        token ? (
          <Player />
        ) : ( <Login /> )
      }
    </div>
  );
}

export default App;
