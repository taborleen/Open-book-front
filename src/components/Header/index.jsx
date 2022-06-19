import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { search } from "../../features/value";
import { useNavigate } from "react-router-dom";
import PagesNav from "./PagesNav";
import { useDispatch } from "react-redux";
import LogoNav from "./LogoNav";
import { ImBooks } from "react-icons/im";

const Header = () => {
  const dispatch = useDispatch();
  const [text, Text] = useState("");
  const navigate = useNavigate();

  const isActive = text.length > 0 ? true : false;

  useEffect(() => {
    if (isActive) {
      return navigate("/searchBook");
    }
  }, [isActive]);

  const setText = (event) => {
    dispatch(search(event.target.value));
    Text(event.target.value);
  };
  //
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.nameShop}>
          <div className={styles.logo}>
            <ImBooks />
            <span>Booksment</span>
          </div>
        </div>
        <div className={styles.pages}>
          <PagesNav />
          <LogoNav setText={setText} />
        </div>
      </div>
    </div>
  );
};

export default Header;
