                                                                                                                                  // import React from "react";
                                                                                                                                  // import styles from "./pagination.module.css";
                                                                                                                                  // const WatchPagination = ({
                                                                                                                                  //   elementsPerPage,
                                                                                                                                  //   totalElements,
                                                                                                                                  //   paginate,
                                                                                                                                  //   nextPage,
                                                                                                                                  //   prevPage,
                                                                                                                                  //   currentPage,
                                                                                                                                  // }) => {
                                                                                                                                  //   const pageNumbers = [];

                                                                                                                                  //   for (let i = 1; i < Math.ceil((totalElements + 1) / elementsPerPage); i++) {
                                                                                                                                  //     pageNumbers.push(i);
                                                                                                                                  //   }

                                                                                                                                  //   return (
                                                                                                                                  //     <div>
                                                                                                                                  //       <div className={styles.paginationWrapper}>
                                                                                                                                  //         <button
                                                                                                                                  //           disabled={currentPage === 1 && "true"}
                                                                                                                                  //           className="prevPage"
                                                                                                                                  //           onClick={prevPage}
                                                                                                                                  //         >
                                                                                                                                  //           Назад
                                                                                                                                  //         </button>
                                                                                                                                  //         {pageNumbers.map((number) => {
                                                                                                                                  //           return (
                                                                                                                                  //             <div className={styles.wrapperBtnPagination} key={number}>
                                                                                                                                  //               <button
                                                                                                                                  //                 className={styles.btnPagination}
                                                                                                                                  //                 onClick={() => paginate(number)}
                                                                                                                                  //               >
                                                                                                                                  //                 {number}
                                                                                                                                  //               </button>
                                                                                                                                  //             </div>
                                                                                                                                  //           );
                                                                                                                                  //         })}
                                                                                                                                  //         <button
                                                                                                                                  //           disabled={pageNumbers.length === currentPage && "true"}
                                                                                                                                  //           className="nextPage"
                                                                                                                                  //           onClick={nextPage}
                                                                                                                                  //         >
                                                                                                                                  //           Далее
                                                                                                                                  //         </button>
                                                                                                                                  //       </div>
                                                                                                                                  //     </div>
                                                                                                                                  //   );
                                                                                                                                  // };

                                                                                                                                  // export default WatchPagination;
