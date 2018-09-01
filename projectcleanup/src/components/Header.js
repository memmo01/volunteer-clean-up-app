import React from "react";

class Header extends React.Component {
  render() {
    return (
      <nav>
        <i className="fas fa-bars" id="hamSiteDirectory" />
        <div id="logoArea">Clean Community</div>
        <div className="siteNav">
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
        </div>
        <div className="hmm">
          <i className="fas fa-user one" />
        </div>
      </nav>
    );
  }
}

export default Header;
