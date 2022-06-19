import React from "react";
import { useSelector } from "react-redux";
import CartItems from "../../CartItems";
import Skeleton from "../../Skeleton";

const Allbooks = ({elements}) => {
  const loading = useSelector((state) => state.genresBook.loading);

  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      {loading
        ? skeleton
        :  elements.map((item) => {
          return <CartItems key={item._id} book={item} />;
        })}
    </>
  );
};

export default Allbooks;
