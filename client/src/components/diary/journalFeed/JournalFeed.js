import React, { Component } from "react";
import PropTypes from "prop-types";
import JournalItem from "./JournalItem";

import "./JournalFeed.css";

class JournalFeed extends Component {
  render() {
    const { journals } = this.props;
    return (
      <div className="journalFeed">
        {journals.map(journal => (
          <JournalItem key={journal._id} journal={journal} />
        ))}
      </div>
    );
  }
}

JournalFeed.propTypes = {
  journals: PropTypes.array.isRequired
};

export default JournalFeed;
