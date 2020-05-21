import postService from "../services/postServices";

import {
  posts_error,
  posts_fetched,
  posts_goto_page,
  posts_loading,
  posts_previous,
  posts_next,
} from "./types";

export const fetchPosts = () => (dispatch) => {
  dispatch({
    type: posts_loading,
  });
  postService.getPosts().then(
    (res) => {
      dispatch({
        type: posts_fetched,
        payload: res.data,
      });
    },
    (err) => {
      dispatch({
        type: posts_error,
        payload: err.data.message,
      });
    }
  );
};

export const gotoPage = (page) => (dispatch) => {
  const payload = Number(page);
  if (Number.isNaN(payload)) {
    return;
  }

  dispatch({ type: posts_goto_page, payload });
};

export const previous = () => (dispatch) => {
  dispatch({ type: posts_previous });
};

export const next = () => (dispatch) => {
  dispatch({ type: posts_next });
};
