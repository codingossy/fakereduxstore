import React from "react";
import { useEffect } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../store/cartSlice";
import Product from "./Product";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  

  return (
    <div className="container mx-auto h-full w-full">
      <h1 className="py-5 text-center text-4xl font-semibold uppercase">
        all products
      </h1>
      <div className="grid grid-cols-1 place-items-center gap-x-10 gap-y-10 text-black md:grid-cols-2 lg:grid-cols-3">


        {products.map((item) => {
            return (
                <Product item={item} key={item.id} />
            )
        })}
      </div>
    </div>
  );
};

export default Home;
