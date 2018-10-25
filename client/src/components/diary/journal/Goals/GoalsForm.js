import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { addGoal } from "../../../../redux/actions/journalActions";

class GoalsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: "",
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
      this.props.addGoal(journalId, newGoal);
      this.setState({
        goal: ""
      });
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        {this.props.goals.length < 3 ? (
          <div className="add-box">
            <button onClick={this.onHandleClick} className="add-slider">
              ADD
              <i className="fas fa-plus fa-1x" />
            </button>
            <input
              type="text"
              name="goal"
              autoComplete="off"
              className={classnames("add-text", {
                "add-text add-text-error": errors.text
              })}
              placeholder={errors.text ? String(errors.text) : "Add a goal"}
              onChange={this.onChange}
              value={this.state.goal}
              onKeyPress={this.handleKeyPress}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

GoalsForm.propTypes = {
  addGoal: PropTypes.func.isRequired,
  journalId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({ errors: state.errors });

export default connect(
  mapStateToProps,
  { addGoal }
)(GoalsForm);
