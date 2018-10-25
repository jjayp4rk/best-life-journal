import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import { addMorning } from "../../../../redux/actions/journalActions";

import "./MorningForm.css";

class MorningForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graditude: "",
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

  onHandleClick = e => {
    e.preventDefault();
    const { journalId } = this.props;
    const newGraditude = {
      graditude: this.state.graditude
    };
    this.props.addMorning(journalId, newGraditude);
    this.setState({
      graditude: ""
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      const { journalId } = this.props;
      const newGraditude = {
        graditude: this.state.graditude
      };
      this.props.addMorning(journalId, newGraditude);
      this.setState({
        graditude: ""
      });
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        {this.props.morning.length < 3 ? (
          <div className="add-box">
            <button onClick={this.onHandleClick} className="add-slider">
              ADD
              <i className="fas fa-plus fa-1x" />
            </button>
            <input
              type="text"
              name="graditude"
              className={classnames("add-text", {
                "add-text add-text-error": errors.text
              })}
              autoComplete="off"
              placeholder={
                errors.text ? String(errors.text) : "Add a morning graditude"
              }
              value={this.state.graditude}
              onChange={this.onChange}
              onKeyPress={this.handleKeyPress}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

MorningForm.propTypes = {
  addMorning: PropTypes.func.isRequired,
  journalId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addMorning }
)(MorningForm);
