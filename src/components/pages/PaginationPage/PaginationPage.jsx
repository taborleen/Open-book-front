// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchGetBooks } from "../../../features/genresBookSlice";
// import AllBookPagination from "./AllBookPagination";
// import { useState } from "react";
// import WatchPagination from "./WatchPagination";

// const PaginationPage = () => {
//   const dispatch = useDispatch();
//   const discountBook = useSelector((state) => state.discountBook.discountBooks);

//   const [elements, setElements] = useState(discountBook);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setcurrentPage] = useState(1);
//   const [elementsPerPage] = useState(5);

//   useEffect(() => {
//     setLoading(true);
//     dispatch(fetchGetBooks()).then((books) =>
//       setElements(discountBook.payload)
//     );
//     setLoading(false);
//   }, [dispatch]);

//   const lastElementIndex = currentPage * elementsPerPage;
//   const firstElementIndex = lastElementIndex - elementsPerPage;
//   const currentElement = elements.slice(firstElementIndex, lastElementIndex);

//   const nextPage = () => setcurrentPage((pr) => pr + 1);
//   const prevPage = () => setcurrentPage((pr) => pr - 1);

//   const paginate = (pageNumber) => {
//     setcurrentPage(pageNumber);
//   };
//   return (
//     <div>
//       <AllBookPagination
//         elements={currentElement}
//         loading={loading}
//         key={elements.id}
//       />
//       <WatchPagination
//         elementsPerPage={elementsPerPage}
//         totalElements={elements.length}
//         paginate={paginate}
//         nextPage={nextPage}
//         prevPage={prevPage}
//         currentPage={currentPage}
//       />
//     </div>
//   );
// };

// export default PaginationPage;
