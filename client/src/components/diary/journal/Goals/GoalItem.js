import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteGoal } from "../../../../redux/actions/journalActions";

class GoalItem extends Component {
  onDeleteClick() {
    const { journalId, goal } = this.props;
    this.props.deleteGoal(journalId, goal._id);
  }

  render() {
    const { goal, journalId } = this.props;
    return (
      <li>
        {goal.goal}
        <button
          className="delete-button"
          onClick={this.onDeleteClick.bind(this, journalId, goal._id)}
        >
          <i className="fas fa-trash" />
        </button>
      </li>
    );
  }
}

GoalItem.propTypes = {
  goal: PropTypes.object.isRequired,
  journalId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { deleteGoal }
)(GoalItem);
