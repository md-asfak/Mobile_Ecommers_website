import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart({ Cart, setCart }) {
  function hundleDel(el) {
    const del = [...Cart];
    del.splice(el, 1);
    setCart(del);
  }

  const checkOutHindle = () => {
    const totalPrice = Cart.reduce((total, item) => total + item.price, 0);
    alert(`Confirm Your Order Rs-${totalPrice}`);
  };

  const addToCart = () => {
    const totalPrice = Cart.reduce((total, item) => item.price, 0);
    alert(`Confirm Your Order Rs-${totalPrice}`);
  };

  const cartAllClear = () => {
    setCart([]);
  };

  const totalPrice = Cart.reduce((total, item) => total + item.price, 0);
  return (
    <>
      <div className="pt-20 ">
        {Cart.length == 0 ? (
          <>
            <div className="text-center flex flex-col gap-3 py-10">
              <h1 className="text-3xl">Your Cart Is Empty</h1>
              <Link to="/">
                <button className=" bg-yellow py-2 px-3 rounded-md">
                  Continue Shopping...
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 place-items-center items-center  gap-5 px-6 pb-10">
            {Cart.map((el) => {
              return (
                <>
                  <div className=" flex flex-col  md:flex-row justify-center items-center gap-5  text-center border-[1px] border-gray-400 p-5">
                    <div className="max-w-60 flex justify-center items-center">
                      <img src={el.imgSrc} alt=".." />
                    </div>
                    <div className="max-w-80 flex-col justify-center items-center ">
                      <h2 className="text-2xl font-semibold pb-2 ">
                        {el.title}
                      </h2>
                      <p>{el.description}</p>
                      <span className="text-xl font-semibold">
                        {el.price} ₹
                      </span>
                      <div className="flex flex-row gap-5 py-5 justify-center item-center">
                        <button
                          className=" bg-blue text-white py-1 px-2 rounded-md"
                          onClick={() => hundleDel(el)}
                        >
                          Delete
                        </button>
                        <button
                          className=" bg-yellow py-1 px-2 rounded-md"
                          onClick={() => addToCart(el)}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>

      <div className="text-center text-2xl">
        <h3>Total Amount: {totalPrice} ₹</h3>
      </div>
      {Cart.length != 0 && (
        <div className="flex flex-row gap-5 justify-center item-center py-5">
          <button
            className=" bg-red py-1 px-2 rounded-md text-white"
            onClick={checkOutHindle}
          >
            checkout
          </button>
          <button
            className=" bg-yellow py-1 px-2 rounded-md "
            onClick={cartAllClear}
          >
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
}
