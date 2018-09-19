import React from "react";

class CreateEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: []
    };
  }
  updateUser(i) {
    this.setState({
      name: i.visited
    });
  }

  componentDidMount() {
    function checkSignin() {
      alert("You must be signed in to create an event");
      window.location.href = "/signin";
    }

    if (document.cookie) {
      let cookie = document.cookie;
      let info = JSON.parse(cookie);
      switch (info.visited) {
        case "yes":
          this.updateUser(info);
          break;
        case "no":
          checkSignin();
          break;
      }
    } else {
      checkSignin();
    }
  }
  render() {
    return (
      <div>
        <header id="createEventHeader">
          <div>Welcome {this.state.name} !</div>
          <h1>Create an Event</h1>
          <p>
            Cleaning up the neighborhood has never been easier! Take 5 minutes
            to fill out the form and you are on you way to making the world a
            better place
          </p>
        </header>

        <section>
          <form id="createEvent">
            <fieldset>
              <legend>Group Information</legend>
              <input
                type="text"
                name="leaderFirstName"
                placeholder="Leader First Name"
              />
              <input
                type="text"
                name="leaderLastName"
                placeholder="Leader Last Name"
              />
              <input type="text" name="groupName" placeholder="Group Name" />
              <input
                type="number"
                name="volunteerNum"
                placeholder="Number of volunteers needed"
              />
              <input
                type="email"
                name="leaderEmail"
                placeholder="Leader Email"
              />
              <input
                type="text"
                name="leaderPhone"
                placeholder="Leader phone number"
              />
            </fieldset>
            <fieldset class="eventSectionInfo">
              <legend>Event Information</legend>
              <label>
                Start Date
                <input type="date" name="startDate" />
              </label>
              <label>
                Start Time
                <input type="time" name="startTime" />
              </label>
              <label>
                End Time
                <input type="time" name="EndTime" />
              </label>
              <label>
                Address
                <input type="text" name="eventAddress" />
              </label>
              <label>
                City
                <input type="text" name="eventCity" />
              </label>
              <label>
                State
                <input type="text" name="eventState" />
              </label>
              <label>
                Zipcode
                <input type="text" name="eventZipcode" />
              </label>
            </fieldset>
          </form>
        </section>
      </div>
    );
  }
}
export default CreateEvent;
