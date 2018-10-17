import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getJournal,
  getJournals,
  postJournal
} from "../../../redux/actions/journalActions";
import { Link } from "react-router-dom";

import "./JournalItem.css";
import Moment from "react-moment";

class JournalItem extends Component {
  render() {
    const { journal } = this.props;
    return (
      <div className="journalitem">
        <div className="button">
          <Link to={`/journal/${journal._id}`}>
            <Moment format="dddd, MMMM Do YYYY">{journal.date}</Moment>
          </Link>
        </div>
      </div>
    );
  }
}

JournalItem.propsTypes = {
  journal: PropTypes.object.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { getJournal, getJournals, postJournal }
)(JournalItem);
