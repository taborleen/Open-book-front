import { Carousel } from "react-responsive-carousel";
import styles from "./books.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
const ChosenBook = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.pic}>
        <Carousel infiniteLoop autoPlay onSwipeMove>
          {props.book.image.map((img, index) => {
            return (
              <div>
                <img src={img} alt="" />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className={styles.author}>
        <Link to={`/authors/${props.book.author._id}`}>
          <div className={styles.authorName}>{props.book.author.name}</div>
        </Link>
        <div className={styles.nameOfTheBook}>{props.book.name}</div>
        <div className={styles.inStock}>
          {props.book.left > 0 ? "✔️  В наличии" : "✖️ Нет в наличии"}
        </div>
        <div className={styles.priceAndBtn}>
          <span className={styles.price}>{props.book.price}</span>{" "}
          <button className={styles.btn}>В корзину</button>
        </div>
        <div>
          <table>
            <tr>
              <td className={styles.text}>Жанр</td>
              <td className={styles.text}>{props.book.genres.name}</td>
            </tr>
            <tr>
              <td className={styles.text}>Год публикации</td>
              <td className={styles.text}>{props.book.publicationYear}</td>
            </tr>
            <tr>
              <td className={styles.text}>Количество страниц</td>
              <td className={styles.text}>{props.book.amountPages}</td>
            </tr>
            <tr>
              <td className={styles.text}>Тип обложки</td>
              <td className={styles.text}>{props.book.coverType}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChosenBook;
