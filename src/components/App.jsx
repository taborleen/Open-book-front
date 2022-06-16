import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./pages/HomePage";
import "./App.css";
import Signup from "./pages/SignupPage";
import Signin from "./pages/SigninPage";
import NewBookPage from "./pages/NewBookPage";
import BestBook from "./pages/BestBookPage";
import Contact from "./pages/ContactPage";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile/Profile";
import AuthorBook from "./AuthorBook/AuthorBook";
import DiscountPage from "./pages/DiscountPage";

const App = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <>
      <Header />
      <div className="container">
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
            <Route path="/contacts" element={<Contact />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/authors" element={<AuthorBook />} />
            <Route path="/discounts" element={<DiscountPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default App;
