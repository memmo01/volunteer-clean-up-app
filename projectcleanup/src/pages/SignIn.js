import React from "react";

class Signin extends React.Component {
  // if signin is correct then send location information to localstorage

  componentDidMount() {
    if (document.cookie) {
      let info = JSON.parse(document.cookie);
      alert("signed in");
    } else {
      alert("you need to sign in");
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    let user = {
      username: e.target[0].value,
      password: e.target[1].value
    };
    this.checkCred(user);
  };
  //check credentials. if match then query customer database with id and get user info
  checkCred = info => {
    fetch(`/api/users/${info.username}/${info.password}`)
      .then(function(results) {
        return results.json();
      })
      .then(data => {
        return data;
      })
      .then(function(data) {
        let datauu = data.newUuid;
        let dataid = data.originUuid;
        console.log(data);
        let info = {
          id: dataid,
          uuid: datauu
        };
        // console.log(typeof data);
        document.cookie = JSON.stringify({ user: datauu });
        //send new data to database and find id number while adding a new reference number

        fetch(`/api/updateCred/`, {
          method: "post",
          body: JSON.stringify(info)
        })
          .then(function(results) {
            return datauu;

            // things to do
            // create a route to take the id and the uuid value and place it into the database
          })
          .then(function(data) {
            fetch(`/api/userfind/${data}`)
              .then(function(results) {
                return results.json();
              })
              .then(function(data) {
                console.log("cookies!");
                console.log(document.cookie);
                let cookie = document.cookie;
                let checkCookie = JSON.parse(cookie);
                console.log(checkCookie.user);
              });
          });
      });
  };

  render() {
    return (
      <div className="signInContainer">
        <form id="signin" onSubmit={this.handleSubmit}>
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
