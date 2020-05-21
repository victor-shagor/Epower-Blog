import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import PostListingPage from "./pages/postListing";
import PostDetail from "./pages/postDetailPage";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <Switch>
        <Route exact path="/">
          <PostListingPage />
        </Route>
        <Route path="/post/:id">
          <PostDetail />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
