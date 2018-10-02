import React from "react";

class Userpage extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      personalInfo: []
    };
  }
  componentDidMount() {
    if (document.cookie) {
      let user = JSON.parse(document.cookie);
      this.loaduser(user);
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
        let self = arr[0];
        // uses user id to query event table and find events the user has signed up for
        fetch(`/api/attendingEvents/${arr[1]}`)
          .then(function(results) {
            return results.json();
          })
          .then(data => {
            console.log("data");
            console.log(data);

            let eventInfo = JSON.parse(data);
            //sends to function to update event state
            self.updateInfo(eventInfo);
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
  updateInfo = info => {
    this.setState({
      events: info
    });
    console.log(info);
  };

  render() {
    return (
      <div>
        {this.state.personalInfo.id}
        <h1>{this.state.events.address}</h1>
      </div>
    );
  }
}
export default Userpage;
