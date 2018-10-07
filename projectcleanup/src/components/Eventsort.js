import React from "react";
import moment from "moment";

class EventSort extends React.Component {
  constructor() {
    super();
    //create state to hold how many poeple signed up for the event
    this.state = {
      attending: []
    };
  }

  componentDidMount = () => {
    let eventId = this.props.event.id;
    this.checkAttending(eventId);
  };

  checkAttending = eventId => {
    let self = this;
    fetch(`/api/signedUpGroupEvents/${eventId}`)
      .then(function(results) {
        return results.json();
      })
      .then(function(results) {
        let attendingArr = JSON.parse(results);
        self.setState({
          attending: attendingArr.length
        });
      });
  };
  handleButton = groupId => {
    //get id of the volunteer group
    //get user_id from cookie
    //get user id from search with cookie
    //combine user id, group id, and add to group table
    let cookie = document.cookie;
    let user = cookie.split("=");
    this.updateSession(groupId);
    this.transferData(user[1], groupId);
  };
  updateSession = groupId => {
    let joinedEvents = JSON.parse(sessionStorage.getItem("joined"));
    if (joinedEvents != null) {
      let o = [...joinedEvents, groupId];
      o = JSON.stringify(o);
      sessionStorage.setItem("joined", o);
    }
  };

  transferData = (user, group) => {
    //get users id on table
    fetch(`/api/userfind/${user}`)
      .then(function(results) {
        return results.json();
      })
      .then(function(results) {
        let user = JSON.parse(results);
        user = user.id;
        return user;
      })
      .then(function(user) {
        let info = {
          user_id: user,
          group_id: group
        };
        fetch("/api/signed_up_events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          },
          body: JSON.stringify(info)
        });
      });
    this.props.removeItem(group);
  };
  render() {
    let dateFormated = moment("" + this.props.event.start_date + "").format(
      "MMM DD, YYYY"
    );
    return (
      <div className="card">
        <div className="cardTitle">
          <h4>{this.props.event.group_name}</h4>
        </div>
        <div className="cardBody">
          <div className="leftCardBody">
            {dateFormated}
            <h6>
              {this.props.event.start_time}-{this.props.event.end_time}
            </h6>
            Location:
            <h6>{this.props.event.address}</h6>
            <h6>
              {this.props.event.city}, {this.props.event.state}
            </h6>
            {this.props.join === "true" ? (
              <button
                onClick={this.handleButton.bind(this, this.props.event.id)}
              >
                click to join
              </button>
            ) : null}
          </div>
          <div className="rightCardBody">
            <li>Attending: {this.state.attending}</li>
          </div>
        </div>
      </div>
    );
  }
}
export default EventSort;
