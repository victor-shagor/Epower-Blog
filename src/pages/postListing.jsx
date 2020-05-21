import React, { useState, useEffect } from "react";
import Pagination from "../components/pagenation";
import { useHistory } from "react-router-dom";
import PostCard from "../components/PostCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, previous, next } from "../state/actions";
import CardPlaceholder from "../components/cardPlaceholder";
import FadeIn from "react-fade-in";
import NavBar from "../components/navBar";

const PostListingPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts);
  const postIsLoading = useSelector((state) => state.loading);
  const startIndex = useSelector((state) => state.startIndex);
  const count = useSelector((state) => state.count);
  const page = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let placeholders = [];
  for (let i = 0; i < 6; i++) {
    placeholders.push(
      <FadeIn key={i} className="mx-auto">
        <div className="mx-auto">
          <CardPlaceholder />
        </div>
      </FadeIn>
    );
  }

  return (
    <>
      <NavBar />
      <div className="">
        <div className="mt-5 mx-auto">
          {postIsLoading && (
            <div className="row ml-md-5 mr-md-5">{placeholders}</div>
          )}
          {!postIsLoading && posts?.length === 0 && (
            <div className="text-center p-5">No posts</div>
          )}
          {posts?.length > 0 && (
            <>
              <div className="row ml-md-5 mr-md-5">
                {!postIsLoading &&
                  posts
                    .slice(startIndex, startIndex + 6)
                    .map((res, index) => <PostCard posts={res} key={index} />)}
              </div>
              <div className="row" style={{ overflowX: "hidden" }}>
                <div className="d-flex mb-5 mx-auto">
                  <input
                    type="button"
                    value="Previous"
                    className="pl-3 pr-3 pt-2 pb-2 mr-3 mb-5 mt-2"
                    onClick={() => {
                      dispatch(previous());
                    }}
                    style={{
                      borderRadius: "20px",
                      border: "none",
                      backgroundColor: "rgb(24, 136, 165)",
                      color: "white",
                      width: "100px",
                      height: "50px",
                    }}
                  />
                  <input
                    onClick={() => {
                      dispatch(next());
                    }}
                    type="button"
                    value="Next"
                    className="pl-4 pr-4 pt-2 pb-2 mb-5 mt-2"
                    style={{
                      borderRadius: "20px",
                      border: "none",
                      backgroundColor: "rgb(24, 136, 165)",
                      color: "white",
                      width: "100px",
                      height: "50px",
                    }}
                  />
                </div>
              </div>
            </>
          )}

          {/* {count && <Pagination count={count} page={page.page} />} */}
        </div>
      </div>
    </>
  );
};

export default PostListingPage;
