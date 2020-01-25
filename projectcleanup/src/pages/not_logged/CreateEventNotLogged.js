import React from "react";

class NotLoggedEvent extends React.Component {
  render() {
    return (
      <div id="eventGroupNoLog">
        <h3>OOPS ....It looks like you have not logged in yet.</h3>
        <h4>Please Login to create an event</h4>
        <section className="createNotLogged">
          <a href="/signin">Sign in</a> <a href="/signup">Create Account</a>
        </section>
      </div>
    );
  }
}

export default NotLoggedEvent;
