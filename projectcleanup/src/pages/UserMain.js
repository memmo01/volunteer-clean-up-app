import React from "react";
import EventSort from "../components/Eventsort";
class Userpage extends React.Component {
  constructor() {
    super();
    this.state = {
      eventsLeading: [],
      personalInfo: [],
      joinedEvents: [],
      one: false,
      two: false
    };
  }
  componentDidMount() {
    let logged = sessionStorage.getItem("logged");
    if (logged === "true") {
      if (document.cookie) {
        let x = document.cookie.split("=");
        //if user has logged in then look for cookie and get identification tag.
        // run id tag through the loaduser function

        this.loaduser(x[1]);
      } else {
        window.location.href = "/";
      }
    } else {
      alert("you need to log in");
      window.location.href = "/";
    }
  }

  //   takes info from cookie and grabs users info on database to dispay on screen to make it personalized
  //will loop information through another component to make it structured in an organized way
  loaduser = user => {
    // /find user based on cookie id num
    let self = this;
    let u;
    let arrs = ["ap"];
    fetch(`/api/userfind/${user}`)
      .then(function(results) {
        return results.json();
      })
      .then(data => {
        let arr = [];
        let info = JSON.parse(data);

        // returns user id and updates personalInformation state
        let userId = this.updatePersonalInfo(info);

        arr.push(this);
        arr.push(userId);
        u = userId;

        return arr;
      })
      .then(function(arr) {
        // uses user id to query event table and find events the user has signed up for
        fetch(`/api/attendingEvents/${arr[1]}`)
          .then(function(results) {
            return results.json();
          })
          .then(data => {
            let eventInfo = JSON.parse(data);

            //sends to function to update event state
            self.updateEventInfo(eventInfo);
          });
      })
      .then(function() {
        fetch(`/api/signedUpEvents/${u}`)
          .then(function(results) {
            return results.json();
          })
          .then(function(results) {
            let eventAttend = JSON.parse(results);
            //go to events table with the group id

            for (let i = 0; i < eventAttend.length; i++) {
              self.sortAttendInfo(eventAttend[i]);
            }
          });
      });
  };

  sortAttendInfo = eventAttend => {
    let self = this;
    fetch(`/api/joinedEvents/${eventAttend.group_id}`)
      .then(function(results) {
        return results.json();
      })
      .then(function(results) {
        self.eventStateUpdate(results[0]);
      });
  };

  eventStateUpdate = results => {
    let y = this.state.joinedEvents;
    y[y.length] = results;
    this.setState({
      joinedEvents: y
    });
  };
  handleShowEvent = k => {
    console.log(k);
    if (k == "PP") {
      this.setState({
        one: !this.state.one
      });
    } else if (k == "MMM") {
      this.setState({
        two: !this.state.two
      });
    }
  };

  //update personal state
  updatePersonalInfo = info => {
    let location = {
      state: info.state,
      city: info.city,
      zip: info.zipcode
    };
    location = JSON.stringify(location);
    sessionStorage.setItem("location", location);
    this.setState({
      personalInfo: info
    });
    //returns users id number to use to query event table
    return info.id;
  };

  // update event state
  updateEventInfo = info => {
    this.setState({
      eventsLeading: info
    });
  };

  render() {
    let individualEvent;
    let joinedEvent;
    joinedEvent = this.state.joinedEvents.map((obj, index) => {
      return <EventSort event={obj} key={index} />;
    });
    individualEvent = this.state.eventsLeading.map((obj, index) => {
      return <EventSort event={obj} key={index} />;
    });

    return (
      <div>
        <header>
          <div className="welcomeArea">
            <h2>Welcome {this.state.personalInfo.first_name}</h2>
            <p>
              Thank you for choosing to help clean up the community. Every time
              you participate you are helping to create a cleaner environment
              for future generations
            </p>
          </div>
        </header>
        <hr />
        <section>
          <div id="actionBoxContainer">
            <a href="#" className="actionBox">
              View Stats
            </a>
            <a href="/eventlist" className="actionBox">
              Find Event
            </a>
            <a href="/createevent" className="actionBox">
              Create Event
            </a>
          </div>
        </section>
        <section className="eventList">
          <div
            className="showEventList"
            onClick={this.handleShowEvent.bind(this, "PP")}
          >
            <h5>
              You have {this.state.joinedEvents.length + " "}
              upcoming Events
            </h5>

            {this.state.one ? (
              <div>
                <i class="fas fa-sort-up" />
                <div className="eventCards">{joinedEvent}</div>
              </div>
            ) : (
              <i class="fas fa-sort-down" />
            )}
          </div>
        </section>
        <section className="eventList">
          <div
            className="showEventList"
            onClick={this.handleShowEvent.bind(this, "MMM")}
          >
            <h5>
              You are Leading {this.state.eventsLeading.length + " "} upcoming
              event
            </h5>
            {this.state.two ? (
              <div>
                <i class="fas fa-sort-up" />
                <div className="eventCards">{individualEvent}</div>
              </div>
            ) : (
              <i class="fas fa-sort-down" />
            )}
          </div>
        </section>
      </div>
    );
  }
}
export default Userpage;
