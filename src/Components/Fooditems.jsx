import React from "react";
import FoodCard from "./FoodCard";
import fooddata from "../Assets/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const Fooditems = () => {
  const handleToast = (name) => toast.success(`Added ${name} to cart`);
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex justify-center flex-wrap gap-10 lg:justify-start mx-6 my-10">
        {fooddata
          .filter((food) => {
            if (category === "All") {
              return food.name.toLowerCase().includes(search.toLowerCase());
            } else {
              return  category === food.category &&
                food.name.toLowerCase().includes(search.toLowerCase())
            }
          })
          .map((food) => (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              rating={food.rating}
              price={food.price}
              img={food.img}
              desc={food.desc}
              handleToast={handleToast}
            />
          ))}
      </div>
    </>
  );
};

export default Fooditems;
