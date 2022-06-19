import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import styles from "./Contact.module.css";
import PageLinks from "../../BreadСrumbs";
import { BsTelephone } from "react-icons/bs";
import { MdOutlinePlace } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <PageLinks link="/contacts" linkName="Контакты" />
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.infoText}>
            <h1>Контакты</h1>
            <div className={styles.street}>
              <p>
                <span>
                  <MdOutlinePlace />
                </span>
                Чеченская Республика, г. Грозный, ул. Геннадия Н. Трошева, 7.
              </p>
              <p>
                <span>
                  <BsTelephone />
                </span>
                +7 928 475 00 05
              </p>
              <p>
                <span>
                  <BsTelephone />
                </span>
                +7 928 511 71 91
              </p>
              <p>
                <span>
                  <AiOutlineMail />
                </span>
                iblaev.idris@mail.ru
              </p>
            </div>
            <div className={styles.social}>
              <h3>Мы в социальных сетях</h3>
              <div className={styles.logo}>
                <FiFacebook size='2.5rem' />
                <FiInstagram size='2.5rem' />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <div className={styles.map}>
            <YMaps>
              <Map
                width={"100%"}
                height={"500px"}
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
    </>
  );
};

export default Contact;
