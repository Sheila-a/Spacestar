import React, { Component } from "react";
import "./Optin.css";
import { Link } from 'react-router-dom';

class Optin extends Component {
  modal() {
    const modal = document.getElementById("modal");
    modal.classList.toggle("is_open");
  }

  render() {
    return (
      <div className="optin">
        <p>Want to be the first to know when we launch?</p>
        <Link to=''>
        <button onClick={() => this.modal()} className="optin-btn">Click Me</button>
        </Link>
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