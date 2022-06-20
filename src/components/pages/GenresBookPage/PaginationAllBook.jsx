import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { fetchGetBooks } from "../../../features/genresBookSlice";
import { useState } from "react";
import BtnPagination from "../../BtnPagination";
import Allbooks from "./Allbooks";
import styles from "./Genre.module.css";

const PaginationAllBook = () => {
  const dispatch = useDispatch();

  const [elements, setElements] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [elementsPerPage] = useState(8);

  useEffect(() => {
    dispatch(fetchGetBooks()).then((data) => {
      setElements(data.payload);
    });
  }, [dispatch]);

  const lastElementIndex = currentPage * elementsPerPage;
  const firstElementIndex = lastElementIndex - elementsPerPage;
  const currentElement = elements.slice(firstElementIndex, lastElementIndex);

  const nextPage = () =>
    setcurrentPage((pr) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return pr + 1;
    });

  const prevPage = () =>
    setcurrentPage((pr) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return pr - 1;
    });

  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.cartsWrapper}>
      <div className={styles.carts}>
        <Allbooks elements={currentElement} key={elements.id} />
      </div>
      <BtnPagination
        elementsPerPage={elementsPerPage}
        totalElements={elements.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default PaginationAllBook;
