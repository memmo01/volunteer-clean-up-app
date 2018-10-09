import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CreateEvent from "./pages/CreateEvent";
import EventList from "./pages/EventList";
import SignIn from "./pages/SignIn";
import Signup from "./pages/signUp";
import Header from "./components/Header";
import DropDown from "./components/dropDown";
import Userpage from "./pages/UserMain";
import Allstats from "./pages/Viewstats";
// import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <DropDown />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/createevent" component={CreateEvent} />
        <Route exact path="/eventlist" component={EventList} />
        <Route exact path="/userlogged" component={Userpage} />
        <Route exact path="/viewstats" component={Allstats} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
