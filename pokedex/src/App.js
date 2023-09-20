import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import PokemonDetails from "./components/PokemonDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Pokedex} />
        <Route path="/pokemon/:id" component={PokemonDetails} />
      </Switch>
    </Router>
  );
}

export default App;