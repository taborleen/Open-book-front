import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { fetchNewBooks } from "../../../features/newBooksSlice";
import { useState } from "react";
import BtnPagination from "../../BtnPagination";
import NewBookPage from "./index";
const PaginationDiscount = () => {
  const dispatch = useDispatch();

  const [elements, setElements] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [elementsPerPage] = useState(8);

  useEffect(() => {
    dispatch(fetchNewBooks()).then((data) => {
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
    <div>
      <NewBookPage elements={currentElement} key={elements.id} />
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

export default PaginationDiscount;
