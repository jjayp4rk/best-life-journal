import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addLesson } from "../../../../redux/actions/journalActions";
import classnames from "classnames";

class LessonsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lesson: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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
      lesson: ""
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      const { journalId } = this.props;
      const newLesson = {
        lesson: this.state.lesson
      };
      this.props.addLesson(journalId, newLesson);
      this.setState({
        lesson: ""
      });
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        {this.props.lessons.length < 3 ? (
          <div className="add-box">
            <button onClick={this.onHandleClick} className="add-slider">
              ADD
              <i className="fas fa-plus fa-1x" />
            </button>
            <input
              type="text"
              name="lesson"
              autoComplete="off"
              className={classnames("add-text", {
                "add-text add-text-error": errors.text
              })}
              placeholder={errors.text ? String(errors.text) : "Add a lesson"}
              onChange={this.onChange}
              value={this.state.lesson}
              onKeyPress={this.handleKeyPress}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

LessonsForm.propTypes = {
  addLesson: PropTypes.func.isRequired,
  journalId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addLesson }
)(LessonsForm);
