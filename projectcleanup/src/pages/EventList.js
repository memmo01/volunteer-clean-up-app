//this page will display a list of places to volunteer for community pickup events based on location of user.
//can also search by inputing location manually

import React from "react";
import Eventsort from "../components/Eventsort";

class EventList extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      joinedEvents: []
    };
  }

  componentDidMount() {
    let logged = sessionStorage.getItem("logged");
    if (logged === "false") {
      alert("you must log in");
      window.location.href = "/signin";
    } else {
      let self = this;
      if (sessionStorage) {
        let joinedEvents = JSON.parse(sessionStorage.getItem("joined"));
        let leadingEvents = JSON.parse(sessionStorage.getItem("leading"));

        let o;
        if (joinedEvents === null && leadingEvents == null) {
          o = [];
        } else if (joinedEvents === null) {
          o = [...leadingEvents];
        } else if (leadingEvents == null) {
          o = [...joinedEvents];
        } else {
          o = [...joinedEvents, ...leadingEvents];
        }
        this.setState({
          joinedEvents: o
        });
      }

      // this will query the database for events listed in the city the user is located in based on information listed in the database. the information will update the state.events
      fetch("/api/events")
        .then(function(results) {
          return results.json();
        })
        .then(function(data) {
          self.handleChange(data);
        });
      // this.handleChange();
    }
  }

  handleChange = data => {
    let trial = data.filter((obj, index) => {
      let item;
      if (this.state.joinedEvents.indexOf(obj.id) === -1) {
        item = obj;
      }
      return item;
    });

    this.setState({
      events: trial
    });
  };

  handleStateUpdate = id => {
    //updates state and eliminates choices from event list after user clicks on event

    let newEvents = this.state.events.filter(obj => {
      if (obj.id !== id) {
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
      <div id="eventGroup">
        <h3>Select an Event to Join</h3>
        <section className="eventList">{ev}</section>
      </div>
    );
  }
}
export default EventList;
