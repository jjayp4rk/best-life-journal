import axios from "axios";

import {
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_JOURNALS,
  POST_JOURNAL,
  GET_JOURNAL,
  JOURNAL_LOADING
} from "./types";

// Get All Journals

export const getJournals = () => dispatch => {
  dispatch(setJournalLoading());
  axios.get("/api/journals").then(res =>
    dispatch({
      type: GET_JOURNALS,
      payload: res.data
    })
  );
};

// Get Unique Journal

export const getJournal = id => dispatch => {
  axios
    .get(`/api/journals/${id}`)
    .then(res =>
      dispatch({
        type: GET_JOURNAL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_JOURNAL,
        payload: null
      })
    );
};

// Post Journal

export const postJournal = () => dispatch => {
  axios
    .post("/api/journals")
    .then(res =>
      dispatch({
        type: POST_JOURNAL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add graditude

export const addMorning = (journalId, morningData) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`/api/journals/morning/${journalId}`, morningData)
    .then(res =>
      dispatch({
        type: GET_JOURNAL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete graditude
export const deleteMorning = (journalId, morningId) => dispatch => {
  axios
    .delete(`/api/journals/morning/${journalId}/${morningId}`)
    .then(res =>
      dispatch({
        type: GET_JOURNAL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add goal

export const addGoal = (journalId, goal) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`/api/journals/goals/${journalId}`, goal)
    .then(res =>
      dispatch({
        type: GET_JOURNAL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete goal
export const deleteGoal = (journalId, goalId) => dispatch => {
  axios
    .delete(`/api/journals/goals/${journalId}/${goalId}`)
    .then(res =>
      dispatch({
        type: GET_JOURNAL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add target

export const addTarget = (journalId, target) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`/api/journals/targets/${journalId}`, target)
    .then(res =>
      dispatch({
        type: GET_JOURNAL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete target
export const deleteTarget = (journalId, targetId) => dispatch => {
  axios
    .delete(`/api/journals/targets/${journalId}/${targetId}`)
    .then(res =>
      dispatch({
        type: GET_JOURNAL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add lesson

export const addLesson = (journalId, lesson) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`/api/journals/lessons/${journalId}`, lesson)
    .then(res =>
      dispatch({
        type: GET_JOURNAL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete lesson
export const deleteLesson = (journalId, lessonId) => dispatch => {
  axios
    .delete(`/api/journals/lessons/${journalId}/${lessonId}`)
    .then(res =>
      dispatch({
        type: GET_JOURNAL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add win

export const addWin = (journalId, win) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`/api/journals/wins/${journalId}`, win)
    .then(res =>
      dispatch({
        type: GET_JOURNAL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete win
export const deleteWin = (journalId, winId) => dispatch => {
  axios
    .delete(`/api/journals/wins/${journalId}/${winId}`)
    .then(res =>
      dispatch({
        type: GET_JOURNAL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add tonight

export const addTonight = (journalId, tonight) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`/api/journals/tonights/${journalId}`, tonight)
    .then(res =>
      dispatch({
        type: GET_JOURNAL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete tonight
export const deleteTonight = (journalId, tonightId) => dispatch => {
  axios
    .delete(`/api/journals/tonights/${journalId}/${tonightId}`)
    .then(res =>
      dispatch({
        type: GET_JOURNAL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set loading state
export const setJournalLoading = () => {
  return {
    type: JOURNAL_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
