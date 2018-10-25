import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTarget } from "../../../../redux/actions/journalActions";
import classnames from "classnames";

class TargetsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: "",
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
    const newTarget = {
      target: this.state.target
    };
    this.props.addTarget(journalId, newTarget);
    this.setState({
      target: ""
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      const { journalId } = this.props;
      const newTarget = {
        target: this.state.target
      };
      this.props.addTarget(journalId, newTarget);
      this.setState({
        target: ""
      });
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        {this.props.targets.length < 3 ? (
          <div className="add-box">
            <button onClick={this.onHandleClick} className="add-slider">
              ADD
              <i className="fas fa-plus fa-1x" />
            </button>
            <input
              type="text"
              name="target"
              className={classnames("add-text", {
                "add-text add-text-error": errors.text
              })}
              autoComplete="off"
              placeholder={errors.text ? String(errors.text) : "Add a target"}
              onChange={this.onChange}
              value={this.state.target}
              onKeyPress={this.handleKeyPress}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

TargetsForm.propTypes = {
  addTarget: PropTypes.func.isRequired,
  journalId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({ errors: state.errors });

export default connect(
  mapStateToProps,
  { addTarget }
)(TargetsForm);
