import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addMorning } from "../../../../redux/actions/journalActions";

import "./MorningForm.css";

class MorningForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graditude: ""
    };
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

  renderAddBox = () => {
    if (this.props.morning.length < 2) {
      return (
        <div className="add-box">
          <button onClick={this.onHandleClick} className="add-slider">
            ADD
            <i className="fas fa-plus fa-1x" />
          </button>
          <input
            type="text"
            name="graditude"
            className="add-text"
            autoComplete="off"
            placeholder="Add a new gratitude"
            value={this.state.graditude}
            onChange={this.onChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.props.morning.length < 2 ? (
          <div className="add-box">
            <button onClick={this.onHandleClick} className="add-slider">
              ADD
              <i className="fas fa-plus fa-1x" />
            </button>
            <input
              type="text"
              name="graditude"
              className="add-text"
              autoComplete="off"
              placeholder="Add a new gratitude"
              value={this.state.graditude}
              onChange={this.onChange}
              onKeyPress={this.handleKeyPress}
            />
          </div>
        ) : null}
      </div>
    );
    // <div className="add-box">
    //   <button onClick={this.onHandleClick} className="add-slider">
    //     ADD
    //     <i className="fas fa-plus fa-1x" />
    //   </button>
    //   <input
    //     type="text"
    //     name="graditude"
    //     className="add-text"
    //     autoComplete="off"
    //     placeholder="Add a new gratitude"
    //     value={this.state.graditude}
    //     onChange={this.onChange}
    //     onKeyPress={this.handleKeyPress}
    //   />
    // </div>
  }
}

MorningForm.propTypes = {
  addMorning: PropTypes.func.isRequired,
  journalId: PropTypes.string.isRequired
};

export default connect(
  null,
  { addMorning }
)(MorningForm);
