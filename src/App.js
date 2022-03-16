import React, { useEffect, useState } from "react";
import NavBar from "./Nav";
import Contact from "./Contacts";
import Home from "./Home";
import Buy from "./Purchase";
import News from "./News";

import CSSReset from "./globalStyles";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <CSSReset />

      <NavBar />

      <div className="app">
        <Switch>
          <Route path="/news">
            <News />
          </Route>

          {/*   <Route path="/about">     
          <About/>
    </Route>
  */}

          <Route path="/">
            <Home />
            <Buy />
          </Route>
        </Switch>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
