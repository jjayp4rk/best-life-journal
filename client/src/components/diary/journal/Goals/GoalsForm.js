import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addGoal } from "../../../../redux/actions/journalActions";

class GoalsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleClick = () => {
    const { journalId } = this.props;
    const newGoal = {
      goal: this.state.goal
    };
    this.props.addGoal(journalId, newGoal);
    this.setState({
      goal: ""
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      const { journalId } = this.props;
      const newGoal = {
        goal: this.state.goal
      };
      this.props.addgoal(journalId, newGoal);
      this.setState({
        goal: ""
      });
    }
  };

  render() {
    return (
      <div className="add-box">
        <a href="" onClick={this.onHandleClick} className="add-button">
          <i className="fas fa-plus fa-2x" />
        </a>
        <input
          type="text"
          name="goal"
          autoComplete="off"
          className="add-text"
          placeholder="Add a new goal"
          onChange={this.onChange}
          value={this.state.goal}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

GoalsForm.propTypes = {
  addGoal: PropTypes.func.isRequired,
  journalId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { addGoal }
)(GoalsForm);
