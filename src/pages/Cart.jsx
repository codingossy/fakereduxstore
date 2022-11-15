import React, { useState } from "react";
import { FaArrowLeft, FaTimes } from "react-icons/fa";

// image
import emptyCart from "../assets/056.png";

// redux
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartModal from "../components/main/CartModal";
import { clearCart, RemoveFromCart } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.items);

  // modal
  const [showModal, setShowModal] = useState(false);

  // handle close modal

  const handleCloseModal = () => {
    setShowModal(false);
    
  };

  // total price
  const totalPrice = carts.reduce((acc, a) => {
    return acc + a.price;
  }, 0);

  return (
    <div className="h-full w-full pt-10 capitalize">
      <div className="container mx-auto py-4">
        <div className="flex flex-col rounded-md border border-emerald-400 p-4">
          <div className="flex w-full justify-between px-4">
            <h1 className="text-2xl font-semibold ">shopping cart</h1>
            <h6>total items: {carts.length}</h6>
          </div>

          <hr className="my-8" />
          {carts && Object.keys(carts).length > 0 ? (
            carts.map((item) => {
              return (
                <>
                  <div className="flex flex-col items-center justify-between border-b px-4 py-5 lg:flex-row">
                    <div>
                      <img
                        src={`${item.image}`}
                        alt=""
                        className="w-80 rounded-md object-cover lg:h-44 lg:w-52"
                      />
                    </div>
                    <div className="my-3 text-center text-4xl lg:text-2xl">
                      <h4 className="max-w-[200px]">{item.title}</h4>
                    </div>

                    <div className="text-xl text-gray-500">
                      <h4>{item.category}</h4>
                    </div>

                    <div className="my-4 text-green-500">
                      <h4>${item.price}</h4>
                    </div>

                    <div>
                      <button
                        onClick={() => dispatch(RemoveFromCart(item.id))}
                        className="rounded-md bg-red-500 px-5 py-3 text-white"
                      >
                        remove item
                      </button>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <>
              <h1 className="border-b py-10 text-center text-xl">
                your cart is empty egbon, sapa choke? try buy something eje mi,
                even if its just boxers
              </h1>

              <div className="flex items-center justify-center py-5">
                <img src={emptyCart} alt="" className="w-72" />
              </div>
            </>
          )}

          <div className="flex flex-col items-center justify-around py-10 capitalize lg:flex-row">
            <Link to={"/"} className="mb-5 flex items-center gap-x-4 lg:mb-0">
              <FaArrowLeft size={30} />
              <h2 className="text-2xl underline"> go back home</h2>
            </Link>

            <h1 className="text-xl ">total price: {totalPrice}</h1>

            <div className="flex items-center justify-center gap-x-5 gap-y-5">
              <button
                onClick={() => setShowModal(true)}
                className="mt-5 rounded-md bg-green-500 px-5 py-3 text-2xl capitalize text-white lg:mt-0"
              >
                checkout
              </button>

              <button
                className="mt-5 rounded-md bg-red-500 px-5 py-3 text-[19px] lg:text-2xl capitalize text-white lg:mt-0"
                onClick={() => dispatch(clearCart())}
              >
                clear cart: {carts.length}
              </button>
            </div>

          </div>
        </div>
      </div>

      <CartModal
        visible={showModal}
        onclose={handleCloseModal}
        totalPrice={totalPrice}
      />
    </div>
  );
};

export default Cart;
