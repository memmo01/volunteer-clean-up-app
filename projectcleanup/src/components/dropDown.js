import React from "react";

class dropDown extends React.Component {
  render() {
    return (
      <div>
        <div className="dropMenu" data-show="false">
          <ul>
            <a href="/signup">
              <li>Create Profile</li>
            </a>
            <a href="/createevent">
              <li>Create Event</li>
            </a>
            <a href="/eventlist">
              <li>Join Event</li>
            </a>
            <li>About us</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default dropDown;
