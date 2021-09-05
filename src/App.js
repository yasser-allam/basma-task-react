import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Register";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
