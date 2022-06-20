import React from "react";
import styles from "./pagination.module.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const WatchPagination = ({
  elementsPerPage,
  totalElements,
  paginate,
  nextPage,
  prevPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil((totalElements + 1) / elementsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className={styles.paginationWrapper}>
        <button
          disabled={currentPage === 1 && "true"}
          className={styles.prevPage}
          onClick={prevPage}
        >
          <BsFillArrowLeftCircleFill size="2rem" />
        </button>
        {pageNumbers.map((number) => {
          return (
            <div className={styles.wrapperBtnPagination} key={number}>
              <button
                className={styles.btnPagination}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </div>
          );
        })}
        <button
          disabled={pageNumbers.length === currentPage && "true"}
          className={styles.nextPage}
          onClick={nextPage}
        >
          <BsFillArrowRightCircleFill size="2rem" />
        </button>
      </div>
    </div>
  );
};

export default WatchPagination;
