import React from "react";

class SignUpForm extends React.Component {
  //handles submiting form and organizes it into an object sending it to parent component
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    let personalInfo = {};
    let confidencialInfo = {};
    for (var i = 0; i < e.target.length; i++) {
      console.log(e.target[i].value);

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
      }

      // obtain user input information
      // create a unique id to link personal info and confidential information
      //send confidencial info to different table
    }

    this.props.addToDatabase("personalInfo", personalInfo);
    // this.props.addToDatabase("confidencialInfo", confidencialInfo);
    console.log(personalInfo);
    console.log(confidencialInfo);
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
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
        <input
          type="text"
          pattern="[0-9]{5}"
          name="zip"
          placeholder="Zip code"
        />
        <input type="email" name="email" placeholder="email" />
        <input type="username" name="username" placeholder="create username" />

        <input type="password" name="password" placeholder="create password" />

        <input
          type="password"
          name="passwordCheck"
          placeholder="re-enter password"
        />
        <input type="submit" name="submit" value="create account" />
      </form>
    );
  }
}
export default SignUpForm;
