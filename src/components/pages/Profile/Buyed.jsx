import React from "react";
import { useSelector } from "react-redux";

const Buyed = () => {
  const user = useSelector((state) => state.auth.userAuth);

  return (
    <div>
      <div>
        <div>
          {user.buyed?.map((book) => {
            return <div>{book.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Buyed;
