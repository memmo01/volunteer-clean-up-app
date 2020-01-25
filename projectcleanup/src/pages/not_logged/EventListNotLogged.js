import React from "react";

class NotLoggedEventList extends React.Component {
  render() {
    return (
      <div id="eventListNoLog">
        <h3>OOPS ....It looks like you have not logged in yet.</h3>
        <h4>Please Login to view all Volunteer Opportunities</h4>
        <section className="eventListNotLogged">
          <a href="/signin">Sign in</a> <a href="/signup">Create Account</a>
        </section>
      </div>
    );
  }
}

export default NotLoggedEventList;
