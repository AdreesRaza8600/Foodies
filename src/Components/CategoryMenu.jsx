import React, { useState, useEffect } from "react";
import FoodData from "../Assets/FoodData.js";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Redux/Slices/CateogarySlice.jsx";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const ListUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };
  useEffect(() => {
    ListUniqueCategories();
  }, []);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  <button
    onClick={() => dispatch(setCategory("All"))}
    className="px-3 py-2 bg-gray-200 font-bold- font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer"
  ></button>;
  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best foods</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button className={`px-3 py-2 bg-gray-200 font-bold- font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer ${selectedCategory === "All" && "bg-green-500 text-white"}`}>
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className="px-3 py-2 bg-gray-200 font-bold- font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer"
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
