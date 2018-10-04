import React, { Component } from "react";
import CarouselLanding from "./components/CarouselLanding";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import "./App.css";

class App extends Component {
  componentDidMount() {
    // let y = getCurrentPosition();
    // navigator.geolocation.getCurrentPosition(function(position) {
    //   console.log(position.coords.latitude + " " + position.coords.longitude);
    // });
    // // console.log(y);
    // document.cookie = '{ "visited": "yes" }';
    console.log(document.cookie);
    console.log(sessionStorage.getItem("logged"));
  }

  render() {
    return (
      <div className="App">
        <main>
          <CarouselLanding />
          <section className="aboutSect">
            {" "}
            <article id="about">
              <h1>About Community Clean up</h1>
              <div className="wrapper">
                <p>
                  Community clean up is a program created to help fight against
                  trash build up in our neighborhoods. Through organizing groups
                  and bringing awareness, we can help restore and maintain the
                  beauty of neightborhoods. You can help contribute to keep you
                  community by either organizing an event yourself or joining
                  one that has already been created!
                </p>
              </div>
            </article>
            <article className="siteInstructions" id="how2Help">
              <h2>Create an event</h2>
              <div className="wrapper">
                <ol>
                  <li>
                    <h1>1</h1>
                    <h4>Create a profile</h4>
                  </li>
                  <li>
                    <h1>2</h1>
                    <h4>Find a Location you want to clean up</h4>
                  </li>
                  <li>
                    <h1>3</h1>
                    <h4>Create a profile on Community Clean up app</h4>
                  </li>
                  <li>
                    <h1>4</h1>
                    <h4>Create an Event you would like to run and post it</h4>
                  </li>
                </ol>
                <p>
                  After you create an event other users will see your event
                  posting and will have the ability to sign up! Helping the
                  community has never been so easier!
                </p>
              </div>
            </article>
            <article className="siteInstructions" id="how2Volunteer">
              <h2>Volunteer for an event</h2>
              <div className="wrapper">
                <ol>
                  <li>
                    <h1>1</h1>
                    <h4>Create a profile</h4>
                  </li>
                  <li>
                    <h1>2</h1>
                    <h4>Click on Find Events</h4>
                  </li>
                  <li>
                    <h1>3</h1>
                    <h4>Select the Event you wish to join</h4>
                  </li>
                  <li>
                    <h1>4</h1>
                    <h4> Select Join Event</h4>
                  </li>
                </ol>
                <p>
                  Once you have joined you will receive email notification and
                  see others that have also signed up for the event!
                </p>
              </div>
            </article>
          </section>
          <section id="userAction">
            <a href="/signup">
              <div className="joinBox" id="newUser">
                <h3>Sign up Today!</h3>
              </div>
            </a>
            {/* <a href="/createevent">
              <div className="joinBox" id="createEvent">
                <h3>Create an Event!</h3>
              </div>
            </a>

            <a href="#">
              <div className="joinBox" id="joinEvent">
                <h3>Join an Event!</h3>
              </div>
            </a> */}
          </section>
        </main>
        <Footer />
      </div>
    );

    //login page, main landing page, signup for volunteer options, create volunteer options
  }
}

export default App;
