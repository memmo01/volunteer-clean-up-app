//this page will display a list of places to volunteer for community pickup events based on location of user.
//can also search by inputing location manually

import React from "react";
import Eventsort from "../components/Eventsort";

class EventList extends React.Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    let logged = sessionStorage.getItem("logged");
    if (logged === "false") {
      alert("you must log in");
      window.location.href = "/signin";
    }
    let self = this;
    // this will query the database for events listed in the city the user is located in based on information listed in the database. the information will update the state.events
    fetch("/api/events")
      .then(function(results) {
        console.log(results);
        return results.json();
      })
      .then(function(data) {
        console.log(data);
        self.handleChange(data);
      });
    // this.handleChange();
  }

  handleChange = data => {
    console.log("change");
    this.setState({
      events: data
    });
  };

  handleStateUpdate = id => {
    //updates state and eliminates choices from event list
    console.log(id);
    let newEvents = this.state.events.filter(obj => {
      if (obj.id != id) {
        return obj;
      }
    });
    this.setState({
      events: newEvents
    });
  };
  render() {
    let ev;
    ev = this.state.events.map((obj, index) => {
      return (
        <Eventsort
          event={obj}
          key={index}
          removeItem={this.handleStateUpdate}
          join={"true"}
        />
      );
    });
    return (
      <div>
        {ev}
        <nav>
          <ul>
            <li>
              <a href="#">change location</a>
            </li>
            <li>
              <a href="#" />
            </li>
          </ul>
        </nav>

        <main>
          <section id="eventList">
            {/* this section will list out events occuring in individual card boxes */}
            {/* <EventSort events={this.state.events} /> */}
          </section>
        </main>
      </div>
    );
  }
}
export default EventList;
