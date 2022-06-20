import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./pages/HomePage";
import Signup from "./pages/SignupPage";
import Signin from "./pages/SigninPage";
import BestBook from "./pages/BestBookPage";
import Contact from "./pages/ContactPage";
import { useSelector } from "react-redux";
import AuthorBook from "./AuthorBook/AuthorBook";
import BooksGenre from "./pages/GenresBookPage/BooksGenre";
import GenrePage from "./pages/GenresBookPage/GenrePage";
import Carts from "./CartItems/Carts";
import Buyed from "./pages/Profile/Buyed";
import Bookmarks from "./pages/Profile/Bookmarks";
import BasketPage from "./pages/BasketPage";
import PaginationDiscount from "./pages/DiscountPage/PaginationDiscount";
import PaginationNew from "./pages/NewBookPage/PaginationNewBook";
import PaginationAllBook from "./pages/GenresBookPage/PaginationAllBook";
import Profile from "./pages/Profile";
import Book from "./pages/BooksPage/Books";

import "./App.css";

const App = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <main className="mainContainer">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/signin"
            element={token ? <Navigate to="/" /> : <Signin />}
          />
          <Route path="/novelties" element={<PaginationNew />} />
          <Route path="/best" element={<BestBook />} />
          <Route path="/searchBook" element={<Carts />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/profile/:id" element={<Profile />}>
            <Route index path="buyed" element={<Buyed />} />
            <Route path="bookmarks" element={<Bookmarks />} />
          </Route>
          <Route path="/authors/:id" element={<AuthorBook />} />
          <Route path="/discounts" element={<PaginationDiscount />} />
          <Route path="/genres" element={<GenrePage />}>
            <Route index element={<PaginationAllBook />} />
            <Route path="/genres/:id" element={<BooksGenre />} />
          </Route>
          <Route path="/books/:id" element={<Book />} />
          <Route path="/basket" element={<BasketPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};
export default App;
