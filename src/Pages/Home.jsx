import React from "react";
import Navbar from "../Components/Navbar";
import CategoryMenu from "../Components/CategoryMenu";
import Fooditems from "../Components/Fooditems";
import Cart from "../Components/Cart";

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <Fooditems />
      <Cart />
    </>
  );
};

export default Home;
