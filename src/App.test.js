import React from "react";
import { render, getByAltText } from "@testing-library/react";
import PostListing from "../src/pages/postListing";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/state/store";

const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }

  return next(action);
};

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = (action) => thunk(store)(next)(action);

  return { store, next, invoke };
};

test("renders PostListing Page", () => {
  const history = createMemoryHistory();

  const { container, getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <PostListing />
      </Router>
    </Provider>
  );
  const NavbarElement = getByText("Epower Blog");
  expect(NavbarElement).toBeInTheDocument();
  expect(history.location.pathname).toBe("/");
});
it("passes dispatch and getState", async () => {
  const { store, invoke } = create();
  invoke((dispatch, getState) => {
    dispatch("post/fetched");
    getState();
  });
  expect(store.dispatch).toHaveBeenCalled();
  expect(store.getState).toHaveBeenCalled();
});
