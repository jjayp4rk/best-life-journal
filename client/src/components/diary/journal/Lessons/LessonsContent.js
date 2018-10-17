import React, { Component } from "react";
import LessonItem from "./LessonItem";
import PropTypes from "prop-types";

class LessonsContent extends Component {
  render() {
    const { lessons, journalId } = this.props;

    return (
      <div>
        {lessons.length === 0 ? (
          <ul className="emtpylist">
            <li>Your lessons are empty.</li>
          </ul>
        ) : (
          <ul>
            {lessons.map(lesson => (
              <LessonItem
                key={lesson._id}
                lesson={lesson}
                journalId={journalId}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

LessonsContent.propTypes = {
  lessons: PropTypes.array.isRequired,
  journalId: PropTypes.string.isRequired
};

export default LessonsContent;
