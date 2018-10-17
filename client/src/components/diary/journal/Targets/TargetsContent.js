import React, { Component } from "react";
import TargetItem from "./TargetItem";
import PropTypes from "prop-types";

class TargetsContent extends Component {
  render() {
    const { targets, journalId } = this.props;
    return (
      <div>
        {targets.length === 0 ? (
          <ul className="emptylist">
            <li>Your targets are empty.</li>
          </ul>
        ) : (
          <ul>
            {targets.map(target => (
              <TargetItem
                key={target._id}
                target={target}
                journalId={journalId}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

TargetsContent.propTypes = {
  targets: PropTypes.array.isRequired,
  journalId: PropTypes.string.isRequired
};

export default TargetsContent;
