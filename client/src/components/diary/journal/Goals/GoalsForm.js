import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addGoal } from '../../../../redux/actions/journalActions';

import addIcon from '../icon/add.svg';

class GoalsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: ''
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleClick = e => {
    e.preventDefault();
    const { journalId } = this.props;
    const newGoal = {
      goal: this.state.goal
    };
    this.props.addGoal(journalId, newGoal);
    this.setState({
      goal: ''
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const { journalId } = this.props;
      const newGoal = {
        goal: this.state.goal
      };
      this.props.addGoal(journalId, newGoal);
      this.setState({
        goal: ''
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
          name="goal"
          autoComplete="off"
          className="add-text"
          placeholder=""
          onChange={this.onChange}
          value={this.state.goal}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

GoalsForm.propTypes = {
  addGoal: PropTypes.func.isRequired,
  journalId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { addGoal }
)(GoalsForm);
