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

    //1.query database with users unique id to get user information.
    // 2. parse data and send to updatePersonInfo function to update state
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
        // find events that have the id of the user attached to it
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
    // get the events that match with the user id and then send to eventStateUpdate function to place info into the sate
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
    // updating state with the group events informaiton
    this.setState({
      joinedEvents: y
    });

    // update the sessionStorage with an array of numbers that identify the volunteer groups the user is apart of
    this.updateSessionStorage("joined", y);
  };

  handleShowEvent = infoType => {
    if (infoType === "upcoming") {
      this.setState({
        one: !this.state.one
      });
    } else if (infoType === "leading") {
      this.setState({
        two: !this.state.two
      });
    }
  };

  //update personal state
  // 1. get location info and turn into string
  // 2.set session storage to that location to help when searching for groups to join
  // 3.take personal information and update the state with info
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
    this.updateSessionStorage("leading", info);
  };

  //take information about if the user is a leader of volunteer groups or has joined many volunteer groups.
  // 1.takes type (leading or joined)
  // 2. take array of items from group and return array of id's
  // 3.turn array into string
  // 4.move id numbers to session storage to use (either as joined or leading)
  updateSessionStorage = (type, eventInfo) => {
    let y = eventInfo.map(item => {
      return item.id;
    });
    y = JSON.stringify(y);

    if (type === "leading") {
      sessionStorage.setItem("leading", "[]");
      sessionStorage.setItem("leading", y);
    } else if (type === "joined") {
      sessionStorage.setItem("joined", "[]");
      sessionStorage.setItem("joined", y);
    }
  };

  render() {
    let individualEvent;
    let joinedEvent;
    //loop through leading events and joined events and display them onto the page as separate groups
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
            <a href="/viewstats" className="actionBox">
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
            onClick={this.handleShowEvent.bind(this, "upcoming")}
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
              <i className="fas fa-sort-down" />
            )}
          </div>
        </section>
        <section className="eventList">
          <div
            className="showEventList"
            onClick={this.handleShowEvent.bind(this, "leading")}
          >
            <h5>
              You are Leading {this.state.eventsLeading.length + " "} upcoming
              event
            </h5>
            {this.state.two ? (
              <div>
                <i className="fas fa-sort-up" />
                <div className="eventCards">{individualEvent}</div>
              </div>
            ) : (
              <i className="fas fa-sort-down" />
            )}
          </div>
        </section>
      </div>
    );
  }
}
export default Userpage;
