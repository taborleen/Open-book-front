import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { Link } from "react-router-dom";
import styles from "./Contact.module.css";
import imageInstagram from "../../assets/image/instagram.svg";
import imageFacebook from "../../assets/image/facebook.svg";

const Contact = () => {
  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <div className={styles.infoText}>
          <ul>
            <li><Link className={styles.link} to="/">Главная</Link></li>
            <li>{"›"}</li>
            <li><Link className={styles.link} to="/contacts"> Контакты </Link> </li>
          </ul>
          <h1>Контакты</h1>
          <div className={styles.street}>
            <p>Чеченская Республика, г. Грозный,</p> 
              ул. Геннадия Н. Трошева, 7.
            <p> +7 928 475 00 05</p>
            <p>+7 928 511 71 91</p>
            <p>iblaev.idris@mail.ru</p>
          </div>
          <div className={styles.social}>
            <h3>Мы в социальных сетях</h3>
            <div className={styles.logo}>
            <img src={imageFacebook} alt="" />
            <img src={imageInstagram} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.concatConteiner}>
        <div className={styles.concat}>
          <YMaps>
            <Map
              width={"744px"}
              height={"321px"}
              defaultState={{
                center: [43.324732, 45.692374],
                zoom: 17,
              }}
            >
              <Placemark geometry={[43.324732, 45.692374]} />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
};

export default Contact;
