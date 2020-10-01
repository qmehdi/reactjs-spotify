import React, { useEffect } from "react";
import "./App.css";
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {

  /* Run code based on a given condition
     This useEffect will run either when the component first loads and/or
     whenever the variables inside the '}, [])' change
  */
  useEffect(() => {
    const token = getTokenFromUrl();
    // The window.location.hash will clear the token so we can do it for security reasons. Commented out for now
    // window.location.hash = "";
    console.log(' i have a token >>>', token);

  }, []);

  return (
    <div className="app">

      {/* Spotify Logo */}
      <Login />
    </div>
  );
}

export default App;
