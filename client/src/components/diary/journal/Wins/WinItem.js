import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteWin } from "../../../../redux/actions/journalActions";

class WinItem extends Component {
  onDeleteClick() {
    const { journalId, win } = this.props;
    this.props.deleteWin(journalId, win._id);
  }

  render() {
    const { win, journalId } = this.props;
    return (
      <li>
        {win.win}
        <button
          className="delete-button"
          onClick={this.onDeleteClick.bind(this, journalId, win._id)}
        >
          <i className="fas fa-trash" />
        </button>
      </li>
    );
  }
}

WinItem.propTypes = {
  win: PropTypes.object.isRequired,
  journalId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { deleteWin }
)(WinItem);
