import React from "react";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      showIcon: false
    };
  }

  //state is controlled to help with displaying specific icon
  componentDidMount = () => {
    let logged = sessionStorage.getItem("logged");
    if (logged === "true") {
      this.setState({
        showIcon: true
      });
    } else {
      this.setState({
        showIcon: false
      });
    }
  };
  handleClick = () => {
    let elem = document.getElementsByClassName("dropMenu");
    let check = elem[0].getAttribute("data-show");

    if (!elem) {
      return false;
    } else {
      switch (check) {
        case "true":
          elem[0].style.display = "none";
          elem[0].setAttribute("data-show", "false");
          document.body.style.overflow = "auto";
          break;
        case "false":
          elem[0].style.display = "block";
          elem[0].setAttribute("data-show", "true");
          document.body.style.overflow = "hidden";
          break;
      }
    }
  };

  handleLogOut = e => {
    e.preventDefault();
    alert("you are logged out");

    document.cookie = "user=null";
    sessionStorage.clear();
    sessionStorage.setItem("logged", "false");
    window.location.href = "/";
  };
  render() {
    return (
      <header>
        <div id="headerNav">
          <i
            className="fas fa-bars"
            id="hamSiteDirectory"
            onClick={this.handleClick}
          />
          <div className="logoArea">
            <a href="/" id="logoArea">
              Clean Community
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#" alt="home">
                  Home
                </a>
              </li>
              <li>
                <a href="#" alt="create volunteer group">
                  create a group
                </a>
              </li>
              <li>
                <a href="#" alt="join a volunteer group">
                  join a clean up group
                </a>
              </li>
            </ul>
          </nav>
          <a href="/signin" id="logoLogin">
            {this.state.showIcon === true ? (
              <i
                id="icon"
                onClick={this.handleLogOut}
                className="fas fa-sign-out-alt"
              />
            ) : (
              <i id="icon" className="fas fa-user" />
            )}
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
