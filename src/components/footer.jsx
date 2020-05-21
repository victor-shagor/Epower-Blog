import React from "react";

function Footer(props) {
  return (
    <div
      className="container-fluid bg-footer"
      style={{
        backgroundColor: "rgb(24, 136, 165)",
        height: "90px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div className="text-white">Copyright 2019</div>
      </div>
    </div>
  );
}

export default Footer;
