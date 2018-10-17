import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addWin } from "../../../../redux/actions/journalActions";

class WinsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      win: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleClick = () => {
    const { journalId } = this.props;
    const newWin = {
      win: this.state.win
    };
    this.props.addWin(journalId, newWin);
    this.setState({
      win: ""
    });
  };

  handleKeyPress = e => {
    if (e.key === "enter") {
      e.preventDefault();
      const { journalId } = this.props;
      const newWin = {
        win: this.state.win
      };
      this.props.addWin(journalId, newWin);
      this.setState({
        win: ""
      });
    }
  };

  render() {
    return (
      <div className="add-box">
        <a href="" onClick={this.onHandleClick} className="add-button">
          <i className="fas fa-plus fa-2x" />
        </a>
        <input
          type="text"
          name="win"
          className="add-text"
          placeholder="Add a new win"
          onChange={this.onChange}
          value={this.state.win}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

WinsForm.propTypes = {
  addWin: PropTypes.func.isRequired,
  journalId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { addWin }
)(WinsForm);
