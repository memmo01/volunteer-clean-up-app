import React, { Component } from "react";
import CarouselLanding from "./components/CarouselLanding";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <CarouselLanding />
          <section class="aboutSect">
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
            <article id="how2Help">
              <h2>How to help and create an event</h2>
              <div className="wrapper">
                <ol>
                  <li>Create a profile</li>
                  <li>Find a Location you want to clean up</li>
                  <li>Create a profile on Community Clean up app</li>
                  <li>Create an Event you would like to run and post it</li>
                </ol>
                <p>
                  After you create an event other users will see your event
                  posting and will have the ability to sign up! Helping the
                  community has never been so easier!
                </p>
              </div>
            </article>
            <article id="how2Volunteer">
              <h2>How to volunteer for an event</h2>
              <div className="wrapper">
                <ol>
                  <li>Create a profile</li>
                  <li>Click on Find Events</li>
                  <li>Select the Event you wish to join</li>
                  <li>Select Join Event</li>
                </ol>
                <p>
                  Once you have joined you will receive email notification and
                  see others that have also signed up for the event!
                </p>
              </div>
            </article>
          </section>
          <section id="userAction">
            <div className="joinBox" id="newUser">
              <h3>Sign up Today!</h3>
            </div>
            <div className="joinBox" id="createEvent">
              <h3>Create an Event!</h3>
            </div>
            <div className="joinBox" id="joinEvent">
              <h3>Join an Event!</h3>
            </div>
          </section>
        </main>
      </div>
    );

    //login page, main landing page, signup for volunteer options, create volunteer options
  }
}

export default App;
