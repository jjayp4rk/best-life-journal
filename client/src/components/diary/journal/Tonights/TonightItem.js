import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteTonight } from "../../../../redux/actions/journalActions";

class TonightItem extends Component {
  onDeleteClick() {
    const { journalId, tonight } = this.props;
    this.props.deleteTonight(journalId, tonight._id);
  }

  render() {
    const { tonight, journalId } = this.props;
    return (
      <li>
        {tonight.tonight}
        <button
          className="delete-button"
          onClick={this.onDeleteClick.bind(this, journalId, tonight._id)}
        >
          <i className="fas fa-trash" />
        </button>
      </li>
    );
  }
}

TonightItem.propTypes = {
  tonight: PropTypes.object.isRequired,
  journalId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { deleteTonight }
)(TonightItem);
