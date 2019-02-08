import React from "react";
// import {image} from "./image";

class Header extends React.Component {
  render() {
    return (
      // <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //   <a className="navbar-brand" href="/">
      //     Awards
      //   </a>
      //   <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarNav"
      //     aria-controls="navbarNav"
      //     aria-expanded="false"
      //     aria-label="Toggle navigation"
      //   >
      //     <span className="navbar-toggler-icon" />
      //   </button>
      //   <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      //     <ul className="navbar-nav">
      //       <li className="nav-item active">
      //         <div className="nav-link" href="#">
      //           home <span className="sr-only">(current)</span>
      //         </div>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link" href="kjnl">
      //           bla bla bla
      //         </a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link" href="kfuf">
      //           Pricing
      //         </a>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>

      <div style={{ display: "flex" }}>
        <a href="/">
          <img className="mainlogo" src="images/Redfork logo.png" alt="a" />
        </a>
        
        <nav className="navbar navbar-expand-lg navbar-light ">
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <a className="nav-link" href="/">
                  მთავარი <span className="sr-only">current</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link " href="/">
                  ჩვენს შესახებ
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" href="/">
                  სიახლე
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">
                  კონტაქტი
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
