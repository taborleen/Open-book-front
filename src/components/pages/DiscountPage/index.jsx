import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { fetchDiscountBooks } from "../../../features/discountBookSlice";
import BreadCrumbs from "../../BreadСrumbs";
import CartItems from "../../CartItems";
import styles from "../../CartItems/cart.module.css";
import Skeleton from "../../Skeleton";

function DiscountPage(props) {
  const discountBook = useSelector((state) => state.discountBook.discountBooks);
  const loading = useSelector((state) => state.discountBook.loading);
  const dispatch = useDispatch();

  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  useEffect(() => {
    dispatch(fetchDiscountBooks());
  }, [dispatch]);
  return (
    <>
      <BreadCrumbs link="/discounts" linkName="Скидки" />
      <h1 className={styles.title}>Скидки %</h1>
      <div className={styles.main}>
        {loading
          ? skeleton
          : discountBook.map((bookDis) => {
              return <CartItems key={bookDis._id} book={bookDis} />;
            })}
      </div>
    </>
  );
}

export default DiscountPage;
