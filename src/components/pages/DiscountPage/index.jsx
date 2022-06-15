import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { fetchDiscountBooks } from "../../../features/discountBookSlice";

function DiscountPage(props) {
  const discountBook = useSelector((state) => state.discountBook.discountBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDiscountBooks());
  }, [dispatch]);

  return <div></div>;
}

export default DiscountPage;
