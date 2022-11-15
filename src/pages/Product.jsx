import React from "react";
import { useDispatch } from "react-redux";
import { AddToCart } from "../store/cartSlice";

const Product = ({ item }) => {

  const dispatch = useDispatch();


  return (
    <div className="h-full w-full border border-emerald-300 p-3 text-black">
      <div className="p-2 text-white">
        <img
          src={`${item.image}`}
          alt=""
          className="h-full lg:h-60 w-full object-cover"
        />
        <div className="my-4 px-3 text-center">
          <h1 className="py-3 text-2xl font-semibold">{item.title}</h1>
          <h4 className="text-md text-blue-500">{item.category}</h4>
          <h4 className="my-3 text-3xl text-green-500">${item.price}</h4>
          <p className="mb-10 text-justify">
            {item.description}
          </p>
          
        </div>

        <div className="flex items-center justify-center">
          <button onClick={() => dispatch(AddToCart(item.id ))} className="rounded-md bg-blue-500 px-5 py-3 text-white ">
            buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
