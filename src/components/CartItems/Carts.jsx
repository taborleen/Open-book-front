import styles from "./cart.module.css"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from '../../features/cartSlice';
import CartItems from '../CartItems';

const Carts = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts)
  

  useEffect(() => {
    dispatch(fetchCart())
  }, [dispatch])


  return (<div className={styles.main} >
    {carts.map((item) => {
      const newPrice = item.price - (item.price / 100 * item.discount)
      console.log(newPrice);
      return <CartItems key={item.id} newPrice={newPrice} item={item} />;
    })}
  </div>
  )
}

export default Carts