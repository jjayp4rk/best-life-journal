import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getJournal, addMorning } from "../../../redux/actions/journalActions";
import Moment from "react-moment";

import "./Journal.css";

import Loading from "../../functionalComps/Loading";
import MorningForm from "./Morning/MorningForm";
import MorningContent from "./Morning/MorningContent";
import GoalsForm from "./Goals/GoalsForm";
import GoalsContent from "./Goals/GoalsContent";
import TargetsForm from "./Targets/TargetsForm";
import TargetsContent from "./Targets/TargetsContent";
import LessonsForm from "./Lessons/LessonsForm";
import LessonsContent from "./Lessons/LessonsContent";
import WinsForm from "./Wins/WinsForm";
import WinsContent from "./Wins/WinsContent";
import TonightsForm from "./Tonights/TonightsForm";
import TonightsContent from "./Tonights/TonightsContent";

import JournalNav from "./JournalNav/JournalNav";

class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "Morning"
    };
  }

  componentDidMount() {
    this.props.getJournal(this.props.match.params.id);
  }

  showMorning = e => {
    e.preventDefault();
    this.setState({ view: "Morning" });
  };

  showGoals = e => {
    e.preventDefault();
    this.setState({ view: "Goals" });
  };

  showTargets = e => {
    e.preventDefault();
    this.setState({ view: "Targets" });
  };

  showLessons = e => {
    e.preventDefault();
    this.setState({ view: "Lessons" });
  };

  showWins = e => {
    e.preventDefault();
    this.setState({ view: "Wins" });
  };

  showTonights = e => {
    e.preventDefault();
    this.setState({ view: "Tonights" });
  };

  render() {
    const { journal, loading } = this.props.journal;

    let journalContent;

    let author;
    let text;

    if (journal === null || loading || Object.keys(journal).length === 0) {
      journalContent = (
        <div>
          <Loading />
        </div>
      );
    } else {
      let quote = journal.quote;

      text = quote[0];
      author = quote[1];

      if (this.state.view === "Morning") {
        journalContent = (
          <div className="journalEntry">
            <div className="section-content">
              <h1>
                Morning Gratitudes
                <span>What are you grateful for this morning?</span>
              </h1>
              <MorningContent
                morning={journal.morning}
                journalId={journal._id}
              />
              <MorningForm morning={journal.morning} journalId={journal._id} />
            </div>
          </div>
        );
      } else if (this.state.view === "Goals") {
        journalContent = (
          <div className="journalEntry">
            <div className="section-content">
              <h1>
                Goals
                <span>What are your goals for today?</span>
              </h1>
              <GoalsContent goals={journal.goals} journalId={journal._id} />
              <GoalsForm journalId={journal._id} />
            </div>
          </div>
        );
      } else if (this.state.view === "Targets") {
        journalContent = (
          <div className="journalEntry">
            <div className="section-content">
              <h1>
                Targets
                <span>What are your targets for today?</span>
              </h1>
              <TargetsContent
                targets={journal.targets}
                journalId={journal._id}
              />
              <TargetsForm journalId={journal._id} />
            </div>
          </div>
        );
      } else if (this.state.view === "Lessons") {
        journalContent = (
          <div className="journalEntry">
            <div className="section-content">
              <h1>
                Lessons
                <span>What did you learn today?</span>
              </h1>
              <LessonsContent
                lessons={journal.lessons}
                journalId={journal._id}
              />
              <LessonsForm journalId={journal._id} />
            </div>
          </div>
        );
      } else if (this.state.view === "Wins") {
        journalContent = (
          <div className="journalEntry">
            <div className="section-content">
              <h1>
                Wins
                <span>What did you accomplish today?</span>
              </h1>
              <WinsContent wins={journal.wins} journalId={journal._id} />
              <WinsForm journalId={journal._id} />
            </div>
          </div>
        );
      } else if (this.state.view === "Tonights") {
        journalContent = (
          <div className="journalEntry">
            <div className="section-content">
              <h1>
                Tonights Gratitudes
                <span>What are you grateful for this evening?</span>
              </h1>
              <TonightsContent
                tonights={journal.tonights}
                journalId={journal._id}
              />
              <TonightsForm journalId={journal._id} />
            </div>
          </div>
        );
      }
    }

    return (
      <div className="content">
        <div className="journal">
          <h1 className="datetitle">
            <Moment format="dddd, MMMM Do YYYY">{journal.date}</Moment>
            <span>{`${text} - ${author}`}</span>
          </h1>
          <JournalNav
            Morning={this.showMorning}
            Goals={this.showGoals}
            Targets={this.showTargets}
            Lessons={this.showLessons}
            Wins={this.showWins}
            Tonights={this.showTonights}
          />
          {journalContent}
        </div>
      </div>
    );
  }
}

Journal.propTypes = {
  getJournal: PropTypes.func.isRequired,
  journal: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  journal: state.journal
});

export default connect(
  mapStateToProps,
  { getJournal, addMorning }
)(Journal);
