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
import Profile from "./Pages/Profile";
import AuthorBook from "./AuthorBook/AuthorBook";
import BooksGenre from "./pages/GenresBookPage/BooksGenre";
import GenrePage from "./pages/GenresBookPage/GenrePage";
import Allbooks from "./pages/GenresBookPage/Allbooks";
import Carts from "./CartItems/Carts";
import Buyed from "./pages/Profile/Buyed";
import Bookmarks from "./pages/Profile/Bookmarks";
import BasketPage from "./pages/BasketPage";
import PaginationDiscount from "./pages/DiscountPage/PaginationDiscount";
import PaginationNew from "./pages/NewBookPage/PaginationNewBook"
import PaginationAllBook from "./pages/GenresBookPage/PaginationAllBook"

const App = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <>
      <Header />
      <main className="mainContainer">
        <Routes>
          <Route
            path="/"
            element={!token ? <Navigate to="/signup" /> : <HomePage />}
          />
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