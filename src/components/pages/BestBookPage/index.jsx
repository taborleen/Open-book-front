import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchBestBook } from '../../../features/bestBookSlice';
import CartItems from '../../CartItems';

import styles from "../../CartItems/cart.module.css"

const BestBook = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchBestBook())
      }, [dispatch])    

    const ratingBook = useSelector((state) => state.bestBook.bestBook)
    

    const best = ratingBook.filter((item)=> item.rating.length)

  return (<div className={styles.main}>
    
    {best.map((item)=>{
      console.log(item);
     // console.log(item.rating.review.grade);
        return <CartItems key={item.id} item={item} />
    })} 
  </div>
  )
}

export default BestBook