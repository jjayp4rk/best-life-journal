import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import "./Login.css";
import classnames from "classnames";

import isEmpty from "../../validation/is-empty";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/journal");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/journal");
    }
    if (nextProps.errors) {
      if (!isEmpty(nextProps.errors)) {
        let errorsMessage = "";
        let errors = Object.values(nextProps.errors);
        errors.forEach(error => {
          errorsMessage = errorsMessage + error + "\n";
        });

        alert(errorsMessage);
      }
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  onSubmitEnter = e => {
    if (e.key === "Enter") {
      const userData = {
        email: this.state.email,
        password: this.state.password
      };

      this.props.loginUser(userData);
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="content">
        <div className="loginBox">
          <h2>Login</h2>
          <form onSubmit={this.onSubmit} onKeyPress={this.onSubmitEnter}>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              className={classnames("inputBox", {
                "input-error": errors.email
              })}
              placeholder={errors.email ? errors.email : "Username/Email"}
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              className={classnames("inputBox", {
                "input-error": errors.password
              })}
              placeholder={errors.password ? errors.password : "Password"}
            />
            <input className="button" type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
