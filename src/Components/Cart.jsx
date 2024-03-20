import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'


const Cart = () => {
  const [cartActive, setCartActive] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const handleToast = (name)=> toast.success(`itme added to cart`) 
  const navigate = useNavigate()

  return (
    <>
     
      <div
        className={`fixed right-0 top-0 w-full h-full p-5 lg:w-[25vw] bg-white mb-3 ${
          cartActive ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500`}
      >
        <div className=" flex justify-between my-3">
          <span className="font-bold text-xl text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setCartActive(!cartActive)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl hover:text-red-300 hover:border-red-300 rounded-md cursor-pointer"
          />
        </div>
        {cartItems?.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCart
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
               
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800">
            Your cart is empty
          </h2>
        )}

        <div className="absolute bottom-0">
          <h3 className="text-semibold text-gray-800">Items:{totalQty}</h3>
          <h3 className="text-semibold text-gray-800">
            Total amount:{totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[23vw] my-2" />
          <button onClick={()=>navigate('/success')} className="bg-green-500 text-white font-bold p-3 rounded-lg w-[90vw] lg:w-[23vw] mb-5">
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setCartActive(!cartActive)}
        className={`rounded-full bg-green-500 shadow-md text-5xl p-3 fixed cursor-pointer right-4 bottom-4 hover:bg-white ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
    </>
  );
};

export default Cart;
