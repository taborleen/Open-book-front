import React from "react";
import CartItems from "../../CartItems";

const AllBookPagination = ({ elements, loading }) => {
  console.log(elements);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {elements.map((book) => {
        return <CartItems key={book._id} book={book} />;
      })}
    </div>
  );
};

export default AllBookPagination;
