
import styles from "./cart.module.css"
import React from 'react'

const CartItems = (props) => {
  return (
    <div className={styles.cart}>
        <div><img src={props.item.image[0]} alt="" /></div>
        <div>{props.item.author.name}</div>
        <div>{props.item.name}</div>
        <div>{props.item.price}</div>
    </div>
  )
  
}

export default CartItems