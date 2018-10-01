import React from "react";

class Userpage extends React.Component {
  componentDidMount() {
    if (document.cookie) {
      let user = JSON.parse(document.cookie);
      this.loaduser(user);
    }
  }

  //   takes info from cookie and grabs users info on database to dispay on screen to make it personalized
  //will loop information through another component to make it structured in an organized way
  loaduser = user => {
    fetch(`/api/userfind/${user.user}`)
      .then(function(results) {
        return results.json();
      })
      .then(data => {
        let info = JSON.parse(data);
        console.log(info.state);
      });
  };

  render() {
    return <div>fsfsd</div>;
  }
}
export default Userpage;
