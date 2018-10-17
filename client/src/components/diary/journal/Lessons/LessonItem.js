import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteLesson } from "../../../../redux/actions/journalActions";

class LessonItem extends Component {
  onDeleteClick() {
    const { journalId, lesson } = this.props;
    this.props.deleteLesson(journalId, lesson._id);
  }

  render() {
    const { lesson, journalId } = this.props;
    return (
      <li>
        {lesson.lesson}
        <button
          className="delete-button"
          onClick={this.onDeleteClick.bind(this, journalId, lesson._id)}
        >
          <i className="fas fa-trash" />
        </button>
      </li>
    );
  }
}

LessonItem.propTypes = {
  lesson: PropTypes.object.isRequired,
  journalId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { deleteLesson }
)(LessonItem);
