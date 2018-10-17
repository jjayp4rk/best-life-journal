import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
import "./Navbar.css";
import smallLeaf from "../../images/leaf_64.png";

class Navbar extends Component {
  onLogOutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <ul>
        <li className="nav-user-action">
          <a href="" onClick={this.onLogOutClick}>
            {""}
            Logout
          </a>
        </li>
      </ul>
    );

    return (
      <div className="navbar">
        <ul>
          {isAuthenticated ? (
            <li className="nav-user-action">
              <Link to="/journal">Journals</Link>
            </li>
          ) : (
            <li className="home-button">
              <Link className="home-button" to="/">
                <img src={smallLeaf} alt="" />
              </Link>
            </li>
          )}
        </ul>
        <div>{isAuthenticated ? authLinks : null}</div>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
