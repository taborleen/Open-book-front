import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { fetchGetBasketBooks, deletBasketBooks } from "../../../features/basketSlice";
import styles from './Basket.module.css'
import { dec, inc, } from "../../../features/basketSlice";


const BasketPage = () => {
  const BasketBooks = useSelector((state) => state.basketBookSlice.books);
  const amount = useSelector((state) => state.basketBookSlice.amount);
  const userId = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const basket = BasketBooks.filter((item) => item.userId === userId);

 
  console.log(basket)
  const handleDec = (id) => {
    dispatch(dec(id))
  }
  const handleInc = (id) => {
    dispatch(inc(id))
  }
    const delet = (id) => {
      dispatch(deletBasketBooks(id))
    }
  

  useEffect(() => {
    dispatch(fetchGetBasketBooks());
  }, [dispatch]);

  return (
    <>
      <span></span>
      <div className={styles.main}>
        <div className={styles.cartWindow}>
          <table>
            <thead className={styles.thead}>
              <tr className={styles.tr}>
                <th>Изображение</th>
                <th>название</th>
                <th>Кол-во</th>
                <th>Цена</th>
              </tr>
            </thead>
            <tbody>
              {basket.map((item) => {
                return item.bookId.map((book) => {
                  return (
                    <>
                    <tr className={styles.tr}>
                      <td style={{ display: "flex" }}>
                        <div>
                          <img
                            src={book.image}
                            alt={book.id}
                            style={{ width: "30px" }}
                          />
                        </div>
                      </td>
                      <td>{book.name} </td>
                      <td className={styles.td}>
                        <button onClick={() => handleDec()}>-</button>
                        <p>{amount}</p>
                        <button onClick={() => handleInc()}>+</button>
                      </td>
                      <td></td>
                      <td className={styles.del}>{book.price}</td>
                      <td> <button onClick={() => delet(book._id)}>X</button></td>
                    </tr>
                    
                    <div>{book.totalPrice}</div>
                    </>
                  );
                });
              })}
            </tbody>
          </table>
          
        </div>
      </div>
    </>
  );
};

export default BasketPage;
