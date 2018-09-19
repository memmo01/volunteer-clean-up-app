import React from "react";

class Signin extends React.Component {
  render() {
    return (
      <div className="signInContainer">
        <form id="signin">
          <label>Username</label>
          <input type="text" name="username" />
          <label>Password</label>
          <input type="password" name="password" />

          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
export default Signin;
