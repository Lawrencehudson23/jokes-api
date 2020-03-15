import React from 'react';
import './App.css';
import {Router,Redirect, Link} from '@reach/router';
import JokeList from './views/JokeList';
import Joke from "./views/Joke";
import NewJoke from "./views/NewJoke";
import UpdateJoke from './views/UpdateJoke';
function App() {
  return (
    <div className="App">
      <Link to="/jokes">Jokes</Link>{' '}
      <Link to="/jokes/new">Add a Joke</Link>
      <Router>
        {/* don't want NewJoke treat as :id */}
        <NewJoke path="jokes/new"/>
        <UpdateJoke path="jokes/:id/edit"/> 
        <JokeList path="jokes"/>
        <Redirect to="/jokes" from="/" noThrow/>
        <Joke path="jokes/:id"/>
      </Router>
    </div>
  );
}

export default App;
