import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Signup from "./pages/signUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/signup" component={Signup} />
      </Switch>

      <Footer />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
