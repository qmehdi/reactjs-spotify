import React, { useEffect, useState } from "react";
import "./App.css";
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);

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
      setToken(_token)
    }

    console.log(' i have a token >>>', token);

  }, []);

  return (
    <div className="app">
      {
        token ? (
          <h1>I am logged in</h1>
        ) : ( <Login /> )
      }
    </div>
  );
}

export default App;
