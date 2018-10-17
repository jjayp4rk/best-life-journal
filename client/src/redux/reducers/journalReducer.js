import {
  GET_JOURNALS,
  POST_JOURNAL,
  GET_JOURNAL,
  JOURNAL_LOADING
} from "../actions/types";

const initialState = {
  journals: [],
  journal: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case JOURNAL_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_JOURNAL:
      return {
        ...state,
        journal: action.payload,
        loading: false
      };
    case GET_JOURNALS:
      return {
        ...state,
        journals: action.payload,
        loading: false
      };
    case POST_JOURNAL:
      return {
        ...state,
        journals: [action.payload, ...state.journals]
      };

    default:
      return state;
  }
}
