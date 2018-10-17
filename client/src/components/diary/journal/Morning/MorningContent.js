import React, { Component } from "react";
import MorningItem from "./MorningItem";
import PropTypes from "prop-types";

class MorningContent extends Component {
  render() {
    const { morning, journalId } = this.props;
    return (
      <div>
        {morning.length === 0 ? (
          <ul className="emptylist">
            <li>Your morning gratitudes are rempty.</li>
          </ul>
        ) : (
          <ul>
            {morning.map(item => (
              <MorningItem
                key={item._id}
                graditude={item}
                journalId={journalId}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

MorningContent.propTypes = {
  morning: PropTypes.array.isRequired,
  journalId: PropTypes.string.isRequired
};

export default MorningContent;
