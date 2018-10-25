import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addWin } from "../../../../redux/actions/journalActions";
import classnames from "classnames";

class WinsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      win: "",
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
    const { errors } = this.state;
    return (
      <div>
        {this.props.wins.length < 3 ? (
          <div className="add-box">
            <button onClick={this.onHandleClick} className="add-slider">
              ADD
              <i className="fas fa-plus fa-1x" />
            </button>
            <input
              type="text"
              name="win"
              className={classnames("add-text", {
                "add-text add-text-error": errors.text
              })}
              autoComplete="off"
              placeholder={errors.text ? String(errors.text) : "Add a win"}
              onChange={this.onChange}
              value={this.state.win}
              onKeyPress={this.handleKeyPress}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

WinsForm.propTypes = {
  addWin: PropTypes.func.isRequired,
  journalId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({ errors: state.errors });

export default connect(
  mapStateToProps,
  { addWin }
)(WinsForm);
