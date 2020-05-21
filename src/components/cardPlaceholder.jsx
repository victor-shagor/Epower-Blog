import React from "react";
import ContentLoader from "react-content-loader";

const CardPlaceholder = () => (
  <div className="pb-5" style={{ width: "342px" }}>
    <ContentLoader
      height={500}
      width={342}
      speed={2}
      primaryColor="#cccccc"
      secondaryColor="#f3f3f3"
    ></ContentLoader>
  </div>
);

export default CardPlaceholder;
