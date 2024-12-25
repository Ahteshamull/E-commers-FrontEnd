import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Card from "./pages/Card";
import Layout from "./layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import WishList from "./pages/WishList";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/card" element={<Card />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
