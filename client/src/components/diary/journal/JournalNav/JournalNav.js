import React from "react";

import sun from "../JournalNav/icons/sun.svg";
import teacher from "../JournalNav/icons/teacher.svg";
import list from "../JournalNav/icons/list.svg";
import award from "../JournalNav/icons/award.svg";
import objective from "../JournalNav/icons/objective.svg";
import moon from "../JournalNav/icons/moon.svg";

import "./journalNav.css";

const JournalNav = ({ Morning, Goals, Targets, Lessons, Wins, Tonights }) => {
  return (
    <div className="journal-nav-bar">
      <a onClick={Morning} href="">
        <img src={sun} alt="" />
      </a>
      <a onClick={Goals} href="">
        <img src={objective} alt="" />
      </a>
      <a onClick={Targets} href="">
        <img src={list} alt="" />
      </a>
      <a onClick={Lessons} href="">
        <img src={teacher} alt="" />
      </a>
      <a onClick={Wins} href="">
        <img src={award} alt="" />
      </a>
      <a onClick={Tonights} href="">
        <img src={moon} alt="" />
      </a>
    </div>
  );
};

export default JournalNav;
