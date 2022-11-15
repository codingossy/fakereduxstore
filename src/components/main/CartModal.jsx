import React from "react";

import { useSelector, useDispatch } from "react-redux";

const CartModal = ({ visible, onclose, totalPrice }) => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.items);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm  ">
      <div
        onClick={onclose}
        className="cursor-pointer rounded-md border bg-blue-700 p-3"
      >
        <div className="border-b">
          <h1 className="text-center text-3xl text-blue-300">print receipt</h1>
          <p className="mb-5 text-center">
            thank your for patronizing us, agba baller
          </p>
        </div>
        <div className="w-72 p-4 lg:w-80">
          {carts.map((item) => (
            <div key={item.id}>
              <div className="flex flex-col items-center justify-center">
                <div className="my-3 flex items-center justify-center gap-x-4 text-center text-sm">
                  <h4 className="max-w-[200px]">{item.title}</h4>
                  <h4 className="font-semibold text-green-500">
                    ${item.price}
                  </h4>
                  <p>{item.category}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="border-t py-2">
            <h1>total items: {carts.length}</h1>
            <h3 className="text-green-500">total price:$ {totalPrice} </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
