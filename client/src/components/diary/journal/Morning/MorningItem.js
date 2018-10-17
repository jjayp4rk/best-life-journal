import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteMorning } from "../../../../redux/actions/journalActions";

class MorningItem extends Component {
  onDeleteClick(journalId, graditudeId) {
    this.props.deleteMorning(journalId, graditudeId);
  }

  render() {
    const { graditude, journalId } = this.props;

    return (
      <li>
        {graditude.graditude}
        <button
          className="delete-button"
          onClick={this.onDeleteClick.bind(this, journalId, graditude._id)}
        >
          <i className="fas fa-trash" />
        </button>
      </li>
    );
  }
}

MorningItem.propTypes = {
  deleteMorning: PropTypes.func.isRequired,
  graditude: PropTypes.object.isRequired,
  journalId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { deleteMorning }
)(MorningItem);
