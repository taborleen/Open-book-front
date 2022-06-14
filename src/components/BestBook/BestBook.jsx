import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchBestBook } from '../../features/bestBookSlice';
import CartItems from '../CartItems/CartItems'
import styles from "./cart.module.css"

const BestBook = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchBestBook())
      }, [dispatch])    

    const ratingBook = useSelector((state) => state.bestBook)

  return (<div className={styles.main}>
    {ratingBook.map((item)=>{
        return <CartItems key={item.id} item={item} />
    })} 
  </div>
  )
}

export default BestBook