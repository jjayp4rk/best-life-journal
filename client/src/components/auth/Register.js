import React, { Component } from "react";
import "./Register.css";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
    if (this.state.errors) {
      const errors = Object.values(this.state.errors);
      alert(errors);
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="content">
        <div className="registerationForm">
          <h1>SIGN UP</h1>
          <p>Create an Account</p>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="name"
              className={classnames("inputBox", {
                "inputBox input-error": errors.name
              })}
              placeholder={errors.name ? String(errors.name) : "Name"}
              value={this.state.name}
              onChange={this.onChange}
            />
            <input
              type="email"
              name="email"
              className={classnames("inputBox", {
                "input-error": errors.email
              })}
              placeholder={errors.email ? String(errors.email) : "Email"}
              value={this.state.email}
              onChange={this.onChange}
            />
            <input
              type="password"
              name="password"
              className={classnames("inputBox", {
                "input-error": errors.password
              })}
              placeholder={
                errors.password ? String(errors.password) : "Password"
              }
              value={this.state.password}
              onChange={this.onChange}
            />
            <input
              type="password"
              name="password2"
              className={classnames("inputBox", {
                "input-error": errors.password2
              })}
              placeholder={
                errors.password2 ? String(errors.password2) : "Confirm Password"
              }
              value={this.state.password2}
              onChange={this.onChange}
            />
            <br />
            <input className="button" type="submit" value="Register" />
          </form>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
