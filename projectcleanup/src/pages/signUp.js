import React from "react";
import SignUpForm from "../components/SignUpForm";
import Footer from "../components/Footer";
import "../App.css";

class Signup extends React.Component {
  addToDatabase(dbTable, info) {
    fetch(`/api/newInfo/${dbTable}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(info)
    });
  }
  render() {
    return (
      <div>
        <div className="formTitle">
          <h1>Create an Account </h1>
        </div>
        <hr />
        <SignUpForm addToDatabase={this.addToDatabase.bind(this)} />
        <Footer />
      </div>
    );
  }
}
export default Signup;
