import React, { Component } from "react";
import "./GoalsContent.css";
import PropTypes from "prop-types";
import "./GoalItem";
import GoalItem from "./GoalItem";

class GoalsContent extends Component {
  render() {
    const { goals, journalId } = this.props;

    return (
      <div>
        {goals.length === 0 ? (
          <ul className="emtpylist">
            <li>Your goals are empty.</li>
          </ul>
        ) : (
          <ul>
            {goals.map(goal => (
              <GoalItem key={goal._id} goal={goal} journalId={journalId} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

GoalsContent.propTypes = {
  goals: PropTypes.array.isRequired,
  journalId: PropTypes.string.isRequired
};

export default GoalsContent;
