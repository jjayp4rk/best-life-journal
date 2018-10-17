import React, { Component } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="content">
        <div className="signup">
          <div className="welcome">
            <h1>Best Life Journal</h1>{" "}
            <div>
              <Link to="/register" className="button">
                Sign Up
              </Link>
            </div>
            <div>
              <Link to="/login" className="button">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
