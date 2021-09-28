import React, { useState, useEffect } from "react";

//Pages
import Home from "./Pages/Home";

//npmjs
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

