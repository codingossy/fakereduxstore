import React, { useState } from "react";
import { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";


// redux
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/main/Loader";
import { fetchAllProducts } from "../store/cartSlice";

import Product from "./Product";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const { products, loading, carts } = useSelector((state) => state.items);

  // handle search iuput
  const [searchInput, setSearchInput] = useState("");

   // prevent default state
   const handleSubmit = (e) => {
    e.preventDefault();
  };

  // if (loading) return (
  //   <div className="grid place-items-center">
  //     <Loader />
  //   </div>
  //   )

  return (
    <div className="container mx-auto h-full w-full">
      <h1 className="py-5 text-center text-4xl font-semibold uppercase">
        all products
      </h1>

    <div className="flex gap-x-5 items-center justify-center py-4 pb-8">
      <form action="" onSubmit={handleSubmit} className='flex items-center gap-x-3'>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        type="text" className="w-full rounded-md border bg-none p-1 px-2 text-black outline-none placeholder:text-black" placeholder="enter search" />
        <BiSearch size={30} className="cursor-pointer" />
      </form>

      <div>
      <Link to={"/cart"}>
          <p className="lg:hidden rounded-md bg-blue-500 py-2 px-5 capitalize text-white">
            cart: <span>{carts.length}</span>
          </p>
        </Link>
      </div>
    </div>

      <div className="grid w-full grid-cols-1 place-items-center gap-x-10 gap-y-10 text-black  sm:grid-cols-1 lg:grid-cols-4">
        {products.filter(item => item.title.toLowerCase().includes(searchInput)).map((item) => {
          return <Product item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
