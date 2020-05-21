import React from "react";
import { useHistory, Link } from "react-router-dom";
import Truncate from "react-truncate";
import FadeIn from "react-fade-in";

const PostCard = ({ posts }) => {
  return (
    <div className="mx-auto">
      <FadeIn>
        <Link
          to={`/post/${posts.id}/${posts.slug}`}
          style={{ textDecoration: "none" }}
        >
          <div
            className="card rounded-2 mb-5 listing-item-shadow"
            style={{ height: "420px", cursor: "pointer" }}
          >
            <img
              className="card-img-top cursor-pointer"
              src={posts.featured_image}
              alt="businness"
              style={{ maxHeight: "198px", maxWidth: "350px" }}
            />
            <div className="card-body mt-n2" style={{ maxWidth: "342px" }}>
              <h5 className="card-title font-weight-bold">
                {posts.title.rendered}
              </h5>
              <p className="card-text mt-n2">
                <Truncate lines={4} ellipsis={<span>...</span>}>
                  <span
                    dangerouslySetInnerHTML={{ __html: posts.excerpt.rendered }}
                  ></span>
                </Truncate>
              </p>
            </div>
          </div>
        </Link>
      </FadeIn>
    </div>
  );
};

export default PostCard;
