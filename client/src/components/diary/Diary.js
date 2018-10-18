import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getJournals, postJournal } from "../../redux/actions/journalActions";

import JournalFeed from "./journalFeed/JournalFeed";
import Loading from "../functionalComps/Loading";

import "./Diary.css";

class Diary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  componentDidMount() {
    this.props.postJournal();
    this.props.getJournals();
  }

  // onClick = e => {
  //   this.props.postJournal();
  // };

  // leftArrowClick = (e, length) => {
  //   e.preventDefault();
  //   let index = this.state.activeIndex;
  //   let journalLength = length;
  //   if (index > journalLength || index <= 0) {
  //     index = 0;
  //   } else {
  //     index -= 6;
  //   }
  //   this.setState({
  //     activeIndex: index
  //   });
  // };

  // rightArrowClick = (e, length) => {
  //   e.preventDefault();
  //   let index = this.state.activeIndex;
  //   let journalLength = length;
  //   if (index < journalLength) {
  //     index += 6;
  //     this.setState({
  //       activeIndex: index
  //     });
  //   } else if (index > journalLength) {
  //     this.setState({
  //       activeIndex: index
  //     });
  //   }
  // };

  render() {
    const { journals, loading } = this.props.journal;

    let journalContent;

    if (journals === null || loading) {
      journalContent = (
        <div>
          <Loading />
        </div>
      );
    } else {
      let journalChunks = journals.slice(
        this.state.activeIndex,
        this.state.activeIndex + 6
      );
      const journalLength = journals.length;

      journalContent = (
        <div>
          <JournalFeed journals={journalChunks} />
          {/* <div className="addButton">
            <a
              href=""
              className="diary-arrow-left"
              onClick={e => this.leftArrowClick(e, journalLength)}
            >
              <i className="fas fa-angle-left fa-2x" />
            </a>
            <button className="button" onClick={this.onClick}>
              Add Today's Journal
            </button>
            <a
              href=""
              className="diary-arrow-right"
              onClick={e => this.rightArrowClick(e, journalLength)}
            >
              <i className="fas fa-angle-right fa-2x" />
            </a>
          </div> */}
        </div>
      );
    }
    return (
      <div className="content">
        <div className="diary">{journalContent}</div>
      </div>
    );
  }
}

Diary.propTypes = {
  getJournals: PropTypes.func.isRequired,
  postJournal: PropTypes.func.isRequired,
  journal: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  journal: state.journal
});

export default connect(
  mapStateToProps,
  { getJournals, postJournal }
)(Diary);
