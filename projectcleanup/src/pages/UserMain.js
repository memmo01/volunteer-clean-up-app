import React from "react";
import $ from "jquery";
import EventSort from "../components/Eventsort";
class Userpage extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      personalInfo: [],
      show: false
    };
  }
  componentDidMount() {
    if (document.cookie) {
      let x = JSON.parse(document.cookie);
      //if user has logged in then look for cookie and get identification tag.
      // run id tag through the loaduser function
      console.log(document.cookie);
      let user = JSON.parse(document.cookie);
      this.loaduser(user);
    } else {
      window.location.href = "/";
    }
  }

  //   takes info from cookie and grabs users info on database to dispay on screen to make it personalized
  //will loop information through another component to make it structured in an organized way
  loaduser = user => {
    console.log("working");
    console.log(user.user);

    // /find user based on cookie id num
    fetch(`/api/userfind/${user.user}`)
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

        return arr;
      })
      .then(function(arr) {
        // grabs 'this' for array and turns it into self variable to fix scope issue accessing outside functions
        let self = arr[0];
        // uses user id to query event table and find events the user has signed up for
        fetch(`/api/attendingEvents/${arr[1]}`)
          .then(function(results) {
            console.log("here");
            console.log(results);

            return results.json();
          })
          .then(data => {
            console.log("data");
            console.log(data);

            let eventInfo = JSON.parse(data);

            console.log(eventInfo[0]);
            //sends to function to update event state
            self.updateEventInfo(eventInfo);
          });
      });
  };

  //update personal state
  updatePersonalInfo = info => {
    console.log(info);
    this.setState({
      personalInfo: info
    });
    //returns users id number to use to query event table
    return info.id;
  };

  // update event state
  updateEventInfo = info => {
    this.setState({
      events: info
    });
    console.log(info[0]);
    console.log("9999");
  };

  render() {
    let individualEvent;
    individualEvent = this.state.events.map((obj, index) => {
      return <EventSort event={obj} key={index} />;
    });
    console.log(Array.isArray(this.state.events));
    return (
      <div>
        <h1>Welcome {this.state.personalInfo.first_name}</h1>
        <h3>Here is a list of your upcoming events:</h3>
        {individualEvent}
      </div>
    );
  }
}
export default Userpage;
