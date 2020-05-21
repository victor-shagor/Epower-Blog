import React, { useEffect, useState } from "react";
import moment from "moment";
import postServices from "../services/postServices";
import { useParams } from "react-router-dom";
import NavBar from "../components/navBar";

function PostDetail(props) {
  const [post, setPost] = useState();
  const [postLoading, setPostLoading] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    (async () => {
      setPostLoading(true);
      const { status, data } = await postServices.singlePost(id);
      if (status === 200 && data) setPost(data);
      setPostLoading(false);
    })();
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      {postLoading && <p>Loading...</p>}
      {post && (
        <NavBar
          title={post.title.rendered}
          date={moment(post.date).format("LL")}
        />
      )}
      {post && (
        <>
          <div className="mt-5">
            <img src={post.featured_image} alt="" className="w-75" />
          </div>
          <div>
            <h4>{post.title.rendered}</h4>
          </div>
          <div
            className="pr-sm-5 pl-sm-5 mr-5 ml-5"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></div>
        </>
      )}
    </div>
  );
}

export default PostDetail;
