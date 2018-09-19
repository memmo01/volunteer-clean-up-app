import React from "react";
import SignUpForm from "../components/SignUpForm";
import Footer from "../components/Footer";
import "../App.css";

class Signup extends React.Component {
  render() {
    return (
      <div>
        <div className="formTitle">
          <h1>Create an Account </h1>
        </div>
        <hr />
        <SignUpForm />
        <Footer />
      </div>
    );
  }
}
export default Signup;
