import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { fetchGetBasketBooks, deletBasketBooks, decrement, increment } from "../../../features/basketSlice";
import styles from './Basket.module.css'



const BasketPage = () => {
  const BasketBooks = useSelector((state) => state.basketBookSlice.basket);
  const amount = useSelector((state) => state.basketBookSlice.amount);
  const userId = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const basket = BasketBooks.filter((item) => item.userId === userId);
//console.log(basket)

let amountBook

const newAmountBook = BasketBooks.map((item) => {
  if (item.userId === userId) {
    amountBook = item.amount
  }
  return amountBook
})

//const amountBasket = basket.map((item) => amout = item.amout)
 // console.log(amout);
  let basketId
 const basketUser = BasketBooks.map((item)=> {
  if(item.userId === userId){
    basketId = item._id
  }
  return basketId
})

 
 
  const handleDec = (bookId, amount, price) => {
    dispatch(decrement({bookId, amount, price}))
  }
  const handleInc = (bookId, amount, price) => {
    dispatch(increment({ bookId, amount, price}))
    // console.log(id);
  }
    const delet = (bookId, amount) => {
      dispatch(deletBasketBooks({basketId, bookId, amount}))
  
    }
  

  useEffect(() => {
    dispatch(fetchGetBasketBooks());
  }, [dispatch, basket]);

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
                            src={book.image[0]}
                            alt={book.id}
                            style={{ width: "30px" }}
                          />
                        </div>
                      </td>
                      <td>{book.name} </td>
                      <td className={styles.td}>
                        <button onClick={() => handleDec(book._id, book.amount, book.price)}>-</button>
                        <p>{book.amount}</p>
                        
                        <button onClick={() => handleInc(book._id, book.amount, book.price)}>+</button>
                      </td>
                      <td></td>
                      <td className={styles.del}>{(book.price - (book.price / 100) * book.discount)}</td>
                      <td> <button onClick={() => delet(book._id, book.amount)}>X</button></td>
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
