import React from "react";
import styles from "./HomePage.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className="container">
        <h2 className={styles.title}>BOOKSMENT</h2>
        <div className={styles.subtitle}>
          <p>О нашей компании</p>
        </div>
        <div className={styles.aboutUsDesk}>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat incididunt ut laboret.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat incididunt ut laboret.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
