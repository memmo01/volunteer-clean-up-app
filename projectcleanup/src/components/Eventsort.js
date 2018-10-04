import React from "react";
import moment from "moment";

class EventSort extends React.Component {
  constructor() {
    super();
  }
  handleButton = groupId => {
    //get id of the volunteer group
    //get user_id from cookie
    //get user id from search with cookie
    //combine user id, group id, and add to group table
    let cookie = document.cookie;
    let user = cookie.split("=");
    this.transferData(user[1], groupId);
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
        console.log(info);
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
    console.log(this.props.event.start_date);
    console.log(this.props.event.id);
    return (
      <div>
        <div className="card">
          <div className="cardTitle">
            <h3>{this.props.event.group_name}</h3>
          </div>
          <div className="cardBody">
            <div className="leftCardBody">
              <h4>{dateFormated}</h4>

              <h6>
                {this.props.event.start_time}-{this.props.event.end_time}
              </h6>
              <h5>Location:</h5>
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
              <li>Attending: 1</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EventSort;
