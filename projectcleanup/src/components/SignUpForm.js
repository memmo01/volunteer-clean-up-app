import React from "react";
let uuidv4 = require("uuid/v4");

class SignUpForm extends React.Component {
  //handles submiting form and organizes it into an object sending it to parent component
  handleSubmit = e => {
    e.preventDefault();
    let personalInfo = {};
    let confidencialInfo = {};
    for (var i = 0; i < e.target.length; i++) {
      switch (e.target[i].name) {
        case "firstName":
          personalInfo.first_name = e.target[i].value;
          break;
        case "lastName":
          personalInfo.last_name = e.target[i].value;
          break;
        case "address":
          personalInfo.address = e.target[i].value;
          break;
        case "city":
          personalInfo.city = e.target[i].value;
          break;
        case "state":
          personalInfo.state = e.target[i].value;
          break;
        case "zip":
          personalInfo.zipcode = e.target[i].value;
          break;
        case "email":
          personalInfo.email = e.target[i].value;
          break;
        case "username":
          confidencialInfo.username = e.target[i].value;
          break;
        case "password":
          confidencialInfo.password = e.target[i].value;
          break;
        default:
          console.log("Issue with list");
          break;
      }

      let uuid = uuidv4();
      personalInfo.uuid = uuid;
      confidencialInfo.uuid = uuid;

      // obtain user input information
      // create a unique id to link personal info and confidential information
      //send confidencial info to different table
    }

    this.props.addToDatabase("personalInfo", personalInfo);
    this.props.addToDatabase("confidencialInfo", confidencialInfo);
    window.location.href = "/signin";
  };

  checkPassword = () => {
    let password = document.getElementById("password").value;
    let passwordCheck = document.getElementById("confirmPassword").value;
    if (password === passwordCheck) {
      document.getElementById("submit").disabled = false;
    } else {
      document.getElementById("submit").disabled = true;
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="firstName" placeholder="first name" />
        <input type="text" name="lastName" placeholder="last name" />
        <input type="text" name="address" placeholder="Address" />
        <input type="text" name="city" placeholder="City" />
        <select name="state">
          <option value="state" defaultValue>
            State
          </option>
          <option value="Alabama">Alabama</option>
          <option value="Alaska">Alaska</option>
          <option value="Arizona">Arizona</option>
          <option value="Arkansas">Arkansas</option>
          <option value="California">California</option>
          <option value="Colorado">Colorado</option>
          <option value="Connecticut">Connecticut</option>
          <option value="Delaware">Delaware</option>
          <option value="District Of Columbia">District Of Columbia</option>
          <option value="Florida">Florida</option>
          <option value="Georgia">Georgia</option>
          <option value="Hawaii">Hawaii</option>
          <option value="Idaho">Idaho</option>
          <option value="Illinois">Illinois</option>
          <option value="Indiana">Indiana</option>
          <option value="Iowa">Iowa</option>
          <option value="Kansas">Kansas</option>
          <option value="Kentucky">Kentucky</option>
          <option value="Louisiana">Louisiana</option>
          <option value="Maine">Maine</option>
          <option value="Maryland">Maryland</option>
          <option value="Massachusetts">Massachusetts</option>
          <option value="Michigan">Michigan</option>
          <option value="Minnesota">Minnesota</option>
          <option value="Mississippi">Mississippi</option>
          <option value="Missouri">Missouri</option>
          <option value="Montana">Montana</option>
          <option value="Nebraska">Nebraska</option>
          <option value="Nevada">Nevada</option>
          <option value="New Hampshire">New Hampshire</option>
          <option value="New Jersey">New Jersey</option>
          <option value="New Mexico">New Mexico</option>
          <option value="New York">New York</option>
          <option value="North Carolina">North Carolina</option>
          <option value="North Dakota">North Dakota</option>
          <option value="Ohio">Ohio</option>
          <option value="Oklahoma">Oklahoma</option>
          <option value="Oregon">Oregon</option>
          <option value="Pennsylvania">Pennsylvania</option>
          <option value="Rhode Island">Rhode Island</option>
          <option value="South Carolina">South Carolina</option>
          <option value="South Dakota">South Dakota</option>
          <option value="Tennessee">Tennessee</option>
          <option value="Texas">Texas</option>
          <option value="Utah">Utah</option>
          <option value="Vermont">Vermont</option>
          <option value="Virginia">Virginia</option>
          <option value="Washington">Washington</option>
          <option value="West Virginia">West Virginia</option>
          <option value="Wisconsin">Wisconsin</option>
          <option value="Wyoming">Wyoming</option>
        </select>
        <input
          type="text"
          pattern="[0-9]{5}"
          name="zip"
          placeholder="Zip code"
        />
        <input type="email" name="email" placeholder="email" />
        <input type="username" name="username" placeholder="create username" />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="create password"
        />

        <input
          type="password"
          name="passwordCheck"
          placeholder="re-enter password"
          id="confirmPassword"
          onChange={this.checkPassword}
        />
        <input type="submit" id="submit" name="submit" value="create account" />
      </form>
    );
  }
}
export default SignUpForm;
