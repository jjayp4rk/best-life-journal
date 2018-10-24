import React, { Component } from "react";
import TonightItem from "./TonightItem";
import PropTypes from "prop-types";

class TonightsContent extends Component {
  render() {
    const { tonights, journalId } = this.props;

    return (
      <div>
        {tonights.length === 0 ? (
          <ul className="emptylist">
            <li>Evening gratitudes is empty</li>
          </ul>
        ) : (
          <ul>
            {tonights.map(tonight => (
              <TonightItem
                key={tonight._id}
                tonight={tonight}
                journalId={journalId}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

TonightsContent.propTypes = {
  tonights: PropTypes.array.isRequired,
  journalId: PropTypes.string.isRequired
};

export default TonightsContent;
