import React, { Component } from "react";
import WinItem from "./WinItem";
import PropTypes from "prop-types";

class WinsContent extends Component {
  render() {
    const { wins, journalId } = this.props;
    return (
      <div>
        {wins.length === 0 ? (
          <ul className="emptylist">
            <li>Your wins are empty.</li>
          </ul>
        ) : (
          <ul>
            {wins.map(win => (
              <WinItem key={win._id} win={win} journalId={journalId} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

WinsContent.propTypes = {
  wins: PropTypes.array.isRequired,
  journalId: PropTypes.string.isRequired
};

export default WinsContent;
