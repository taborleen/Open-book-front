import React from "react";
import CartItems from "../../CartItems";

const Allbooks = ({elements}) => {
console.log(elements)
  return (
    <div>
      {elements.map((item) => {
        return <CartItems key={item._id} book={item} />;
      })}
    </div>
  );
};

export default Allbooks;
