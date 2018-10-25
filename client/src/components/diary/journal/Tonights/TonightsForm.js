import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTonight } from "../../../../redux/actions/journalActions";
import classnames from "classnames";

class TonightsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tonight: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleClick = e => {
    e.preventDefault();
    const { journalId } = this.props;
    const newTonight = {
      tonight: this.state.tonight
    };
    this.props.addTonight(journalId, newTonight);
    this.setState({
      tonight: ""
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      const { journalId } = this.props;
      const newTonight = {
        tonight: this.state.tonight
      };
      this.props.addTonight(journalId, newTonight);
      this.setState({
        tonight: ""
      });
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        {this.props.tonights.length < 3 ? (
          <div className="add-box">
            <button onClick={this.onHandleClick} className="add-slider">
              ADD
              <i className="fas fa-plus fa-1x" />
            </button>
            <input
              type="text"
              name="tonight"
              className={classnames("add-text", {
                "add-text add-text-error": errors.text
              })}
              autoComplete="off"
              placeholder={
                errors.text ? String(errors.text) : "Add a evening graditude"
              }
              onChange={this.onChange}
              value={this.state.tonight}
              onKeyPress={this.handleKeyPress}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

TonightsForm.propTypes = {
  addTonight: PropTypes.func.isRequired,
  journalId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({ errors: state.errors });

export default connect(
  mapStateToProps,
  { addTonight }
)(TonightsForm);
