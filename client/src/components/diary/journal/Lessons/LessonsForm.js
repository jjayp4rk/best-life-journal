import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addLesson } from '../../../../redux/actions/journalActions';

class LessonsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lesson: ''
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleClick = e => {
    e.preventDefault();
    const { journalId } = this.props;
    const newLesson = {
      lesson: this.state.lesson
    };
    this.props.addLesson(journalId, newLesson);
    this.setState({
      lesson: ''
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const { journalId } = this.props;
      const newLesson = {
        lesson: this.state.lesson
      };
      this.props.addLesson(journalId, newLesson);
      this.setState({
        lesson: ''
      });
    }
  };

  render() {
    return (
      <div className="add-box">
        <button onClick={this.onHandleClick} className="add-slider">
          ADD
          <i className="fas fa-plus fa-1x" />
        </button>
        <input
          type="text"
          name="lesson"
          autoComplete="off"
          className="add-text"
          placeholder="Add a new lesson"
          onChange={this.onChange}
          value={this.state.lesson}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

LessonsForm.propTypes = {
  addLesson: PropTypes.func.isRequired,
  journalId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { addLesson }
)(LessonsForm);
