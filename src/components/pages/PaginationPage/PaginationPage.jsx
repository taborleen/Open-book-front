import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetBooks } from "../../../features/genresBookSlice";
import AllBookPagination from "./AllBookPagination";
import { useState } from "react";
import WatchPagination from "./WatchPagination";
const PaginationPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.genresBook.books);

  const [elements, setElements] = useState(books);
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [elementsPerPage] = useState(5);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchGetBooks()).then((books) => setElements(books.payload));
    setLoading(false);
  }, [dispatch]);

  const lastElementIndex = currentPage * elementsPerPage;

  const firstElementIndex = lastElementIndex - elementsPerPage;

  const currentElement = elements.slice(firstElementIndex, lastElementIndex);

  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber);
  };
  return (
    <div>
      <h2>Все книги</h2>
      <AllBookPagination
        elements={currentElement}
        loading={loading}
        key={elements.id}
      />
      <WatchPagination
        elementsPerPage={elementsPerPage}
        totalElements={elements.length}
        paginate={paginate}
      />
    </div>
  );
};

export default PaginationPage;
