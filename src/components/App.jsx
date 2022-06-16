import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./Pages/HomePage";

import "./App.css";
import Signup from "./Pages/SignupPage";
import Signin from "./Pages/SigninPage";
import NewBookPage from "./Pages/NewBookPage";
import BestBook from "./Pages/BestBookPage";
import Contact from "./Pages/ContactPage";
import { useSelector } from "react-redux";
import Book from "./Pages/BooksPage/Books";

const App = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/novelties" element={<NewBookPage />} />
        <Route path="/best" element={<BestBook />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/books/:id" element={<Book/>}/>
      </Routes>
      <Footer />
    </>
  );
};
export default App;
