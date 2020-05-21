import React from "react";

function NavBar(props) {
  return (
    <div style={{ overflowX: "hidden" }}>
      <nav
        className="navbar navbar-light row"
        style={{ backgroundColor: "rgb(24, 136, 165)", minHeight: "200px" }}
      >
        <div className="w-100 mr-3 ml-3">
          <h3
            className="mb-0 h3 mx-auto text-white font-weight-bold"
            style={{ fontSize: "40px" }}
          >
            {props.title ? props.title : "Epower Blog"}
          </h3>
          {props.date && (
            <p className="text-white pt-4">{`PUBLISHED ON ${props.date}`}</p>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
