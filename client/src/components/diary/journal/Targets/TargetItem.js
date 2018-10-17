import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteTarget } from "../../../../redux/actions/journalActions";

class TargetItem extends Component {
  onDeleteClick() {
    const { journalId, target } = this.props;
    this.props.deleteTarget(journalId, target._id);
  }

  render() {
    const { target, journalId } = this.props;
    return (
      <li>
        {target.target}
        <button
          className="delete-button"
          onClick={this.onDeleteClick.bind(this, journalId, target._id)}
        >
          <i className="fas fa-trash" />
        </button>
      </li>
    );
  }
}

TargetItem.propTypes = {
  target: PropTypes.object.isRequired,
  journalId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { deleteTarget }
)(TargetItem);
