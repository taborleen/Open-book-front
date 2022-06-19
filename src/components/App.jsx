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
import DiscountPage from "./Pages/DiscountPage";
import BooksGenre from "./Pages/GenresBookPage/BooksGenre";
import GenrePage from "./Pages/GenresBookPage/GenrePage";
import Allbooks from "./Pages/GenresBookPage/Allbooks";
import Carts from "./CartItems/Carts";
import Buyed from "./Pages/Profile/Buyed";
import Bookmarks from "./Pages/Profile/Bookmarks";
import BasketPage from "./Pages/BasketPage";

const App = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <>
      <Header />

      <div className="mainContainer">
        <main>
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
            <Route path="/novelties" element={<NewBookPage />} />
            <Route path="/best" element={<BestBook />} />
            <Route path="/searchBook" element={ <Carts /> } />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/profile/:id" element={<Profile />}>
              <Route index path="buyed" element={<Buyed />} />
              <Route path="bookmarks" element={<Bookmarks />} />
            </Route>
            <Route path="/authors" element={<AuthorBook />} />
            <Route path="/discounts" element={<DiscountPage />} />
            <Route path="/genres" element={<GenrePage />}>
              <Route index element={<Allbooks />} />
              <Route path="/genres/:id" element={<BooksGenre />} />
            </Route>
            <Route path="/books/:id" element={<Book />} />
           <Route path="/basket" element={<BasketPage/>} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
};
export default App;