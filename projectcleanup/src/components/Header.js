import React from "react";

class Header extends React.Component {
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
  render() {
    return (
      <header id="headerNav">
        <i
          className="fas fa-bars"
          id="hamSiteDirectory"
          onClick={this.handleClick}
        />
        <a href="/" id="logoArea">
          <div>Clean Community</div>
        </a>
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
          <i className="fas fa-user" />
        </a>
      </header>
    );
  }
}

export default Header;
