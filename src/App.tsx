import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";
import MenuNavegacao from "./Menu";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <MenuNavegacao />
      <div className="container mt-4">
        <Switch>
          <Route exact path="/">
            <LivroLista />
          </Route>
          <Route path="/dados">
            <LivroDados />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
