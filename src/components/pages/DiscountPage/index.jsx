import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { fetchDiscountBooks } from "../../../features/discountBookSlice";
import CartItems from "../../CartItems";
import styles from "../../CartItems/cart.module.css";

function DiscountPage(props) {
  const discountBook = useSelector((state) => state.discountBook.discountBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDiscountBooks());
  }, [dispatch]);
  return (
    <div className={styles.main}>
      {discountBook.map((bookDis) => {
        return <CartItems key={bookDis._id} book={bookDis} />;
      })}
    </div>
  );
}

export default DiscountPage;
