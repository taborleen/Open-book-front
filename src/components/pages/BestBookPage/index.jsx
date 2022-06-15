import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestBook } from "../../../features/bestBookSlice";
import CartItems from "../../CartItems";

const BestBook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBestBook());
  }, [dispatch]);

  const ratingBook = useSelector((state) => state.bestBook.bestBook);

  return (
    <div>
      {ratingBook.map((item) => {
        return <CartItems key={item.id} item={item} />;
      })}
    </div>
  );
};

export default BestBook;
