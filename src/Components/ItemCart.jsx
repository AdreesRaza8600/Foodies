/* eslint-disable react/prop-types */
import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import toast  from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../Redux/Slices/CartSlice";

const ItemCart = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();
  
  return (
    <div className="flex shadow-md rounded-lg p-2 gap-2 mb-3">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, name, img, price, qty }));
          toast.error(`${name} Removed!`)

        }}
        className="absolute right-7 text-gray-700 cursor-pointer  "
      />
      <img src={img} className="w-[50px] h-[50px]" />

      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">RS:{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <FaPlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-liner cursor-pointer "
            />
            <span>{qty}</span>
            <FaMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-liner cursor-pointer "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
