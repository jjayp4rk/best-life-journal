import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTonight } from "../../../../redux/actions/journalActions";

class TonightsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tonight: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleClick = () => {
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
    return (
      <div className="add-box">
        <a href="" onClick={this.onHandleClick} className="add-button">
          <i className="fas fa-plus fa-2x" />
        </a>
        <input
          type="text"
          name="tonight"
          autoComplete="off"
          className="add-text"
          placeholder="Add a new gratitude"
          onChange={this.onChange}
          value={this.state.tonight}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

TonightsForm.propTypes = {
  addTonight: PropTypes.func.isRequired,
  journalId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { addTonight }
)(TonightsForm);
