import React from "react";
import styles from "./pagination.module.css";
const WatchPagination = ({ elementsPerPage, totalElements, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalElements / elementsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <a href="#" className="pageLink" onClick={() => paginate(number)}>
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WatchPagination;
