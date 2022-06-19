import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { fetchDiscountBooks } from "../../../features/discountBookSlice";
import DiscountPage from "./index";
import { useState } from "react";
import WatchPagination from "./BtnPagination";

const PaginationDiscount = () => {
  const discountBook = useSelector((state) => state.discountBook.discountBooks);
  const dispatch = useDispatch();

  const [elements, setElements] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [elementsPerPage] = useState(8);

  useEffect(() => {
    dispatch(fetchDiscountBooks()).then((data) => {
      setElements(data.payload);
    });
  }, [dispatch]);

  const lastElementIndex = currentPage * elementsPerPage;
  const firstElementIndex = lastElementIndex - elementsPerPage;
  const currentElement = elements.slice(firstElementIndex, lastElementIndex);

  const nextPage = () => setcurrentPage((pr) => pr + 1);
  const prevPage = () => setcurrentPage((pr) => pr - 1);

  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  return (
    <div>
      <DiscountPage
        elements={currentElement}
        key={elements.id}
      />
      <WatchPagination
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
