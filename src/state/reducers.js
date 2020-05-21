import {
  posts_error,
  posts_fetched,
  posts_goto_page,
  posts_loading,
  posts_next,
  posts_previous,
} from "./types";

const initialState = {
  count: 0,
  startIndex: 0,
  page: 1,
  loading: false,
  error: null,
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case posts_loading:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case posts_fetched: {
      const count = Math.ceil(action.payload.length / 6);

      return {
        ...state,
        loading: false,
        error: null,
        count,
        startIndex: 0,
        posts: action.payload,
        page: 1,
      };
    }
    case posts_error:
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    case posts_next: {
      const { page, count } = state;
      const pageToGo = page + 1;

      if (pageToGo > count) {
        return state;
      }

      return {
        ...state,
        page: pageToGo,
        startIndex: pageToGo * 6 - 6,
      };
    }
    case posts_previous: {
      const { page } = state;
      const pageToGo = page - 1;

      if (pageToGo < 1) {
        return state;
      }

      return {
        ...state,
        page: pageToGo,
        startIndex: pageToGo * 6 - 6,
      };
    }
    case posts_goto_page: {
      const pageToGo = action.payload;
      const { pages } = state;

      if (pageToGo > pages) {
        return state;
      }

      return {
        ...state,
        page: pageToGo,
        startIndex: pageToGo * 6 - 6,
      };
    }
    default:
      return state;
  }
};
