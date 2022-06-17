//import styles from "./cart.module.css"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthorBook, fetchBooks } from '../../features/authorSlice';
import CartItems from '../CartItems';
import { fetchCart } from '../../features/cartSlice';
import { search } from '../../features/value';

const AuthorBook = () => {
  const dispatch = useDispatch();
  const author = useSelector((state) => state.author.author)
  const book = useSelector((state) => state.author.book)
  const books = useSelector((state)=> state.cart.carts)
  const value = useSelector((state)=> state.search.value)

  const result = books.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase())
  })

    const [get, setGet] = useState(false)
    const [getBooks, setGetBooks] = useState(true)
  
  useEffect(() => {
    dispatch(fetchAuthorBook())
  }, [dispatch])
  useEffect(()=> {
    dispatch(fetchCart())
  }, [dispatch])
  // useEffect(()=>{
  //   dispatch(search(value))
  // }, [dispatch], value)

  const booksAuthor = (authorId) => {
    //console.log(authorId)
    dispatch(fetchBooks(authorId))
    setGet(true)
    setGetBooks(false)
  }

  return (< >
    <h1>Авторы</h1>
    {author.map((item) => {
      return (
      <div>
      <li onClick={() => booksAuthor(item._id)}>{item.name}</li>
      </div>
      );
    })}
    <div>
    {getBooks && result.map((item)=> {
      return <CartItems key={item.id} item={item} />;
    })}
    {get && book.map((item) => {
        
        return <CartItems key={item.id} item={item} />;
      })}
      </div>
  </>
  )
}

export default AuthorBook