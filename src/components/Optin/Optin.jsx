import React, { Component } from "react";
import "./Optin.css";
import { Link } from 'react-router-dom';

class Optin extends Component {

  render() {
    return (
      <div className="optin">
        <p>Want to be the first to know when we launch?</p>
        {/* <Link to={{ pathname: "https://herewecode.io/" }} target="_blank"> */}
        <button className="optin-btn">
          <a href="https://forms.gle/1UYUdZTyszGYhGJm9" target="_blank" >
            Click Me
          </a>
        </button>
        {/* </Link> */}
        <div id="modal">
          <div className="wrapper">
            <h3>Enter Your Email</h3>
            <div className="clearfix">
              <div className="col-8" />
              <div className="col-3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Optin;