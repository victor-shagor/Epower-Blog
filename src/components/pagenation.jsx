import { gotoPage, previous, next } from "../state/actions";
import { useSelector, useDispatch } from "react-redux";
import React from "react";

function Pagenation(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let count = [];
  for (let i = 0; i < props.count; i++) {
    count.push(
      <li
        key={i}
        className={props.page === i + 1 ? "page-item active" : "page-item"}
        onClick={() => {
          dispatch(gotoPage(i + 1));
        }}
      >
        <p className="page-link">{i + 1}</p>
      </li>
    );
  }
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <p
              className="page-link"
              onClick={() => {
                dispatch(previous());
              }}
            >
              Previous
            </p>
          </li>
          {count}
          <li className="page-item">
            <p onClick={() => dispatch(next())} className="page-link">
              Next
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagenation;
