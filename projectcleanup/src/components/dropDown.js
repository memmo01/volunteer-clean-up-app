import React from "react";

class dropDown extends React.Component {
  constructor() {
    super();
    this.state = {
      logged: false
    };
  }

  componentDidMount = () => {
    let logged = sessionStorage.getItem("logged");
    if (logged === "true") {
      this.setState({
        logged: true
      });
    } else if (logged === "false") {
      this.setState({
        logged: false
      });
    }
  };

  handleLogout = e => {
    e.preventDefault();
    alert("you are logged out");
    let da = sessionStorage.setItem("logged", "false");
    window.location.href = "/";

    this.setState({
      logged: false
    });
  };

  render() {
    return (
      <div>
        <div className="dropMenu" data-show="false">
          <ul>
            {this.state.logged === true ? (
              <div>
                <a href="/createevent">
                  <li>Create Event</li>
                </a>
                <a href="/eventlist">
                  <li>Join Event</li>
                </a>
                <li>About us</li>
                <a href="/userlogged">
                  <li>My Account</li>
                </a>
                <a href="/signin" onClick={this.handleLogout}>
                  <li>Logout</li>
                </a>{" "}
              </div>
            ) : (
              <div>
                <a href="/signup">
                  <li>Create Profile</li>
                </a>
                <a href="/signin">
                  <li>Sign in</li>
                </a>
                <li>About us</li>
              </div>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
export default dropDown;
