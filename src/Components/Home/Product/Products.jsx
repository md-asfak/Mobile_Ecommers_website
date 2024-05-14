import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
export default function Products({ items, Cart, setCart }) {
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };

    setCart([...Cart, obj]);

    toast.success("Item  Added On Cart!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 px-10 pt-[130px]">
        {items.map((el) => {
          return (
            <div
              className="flex flex-col justify-center items-center "
              key={el.id}
            >
              <div className="w-60">
                <Link to={`/productDetails/${el.id}`}>
                  <img src={el.imgSrc} alt="...." />
                </Link>
              </div>

              <div className="text-center ">
                <h4 className="text-xl font-semibold pb-[5px] ">{el.title}</h4>
                <p>{el.description}</p>
                <div className="flex flex-row gap-5 justify-center items-center py-5">
                  <button className=" bg-blue text-white py-1 px-2 rounded-md">
                    {el.price} ₹
                  </button>
                  <button
                    className=" bg-yellow py-1 px-2 rounded-md"
                    onClick={() =>
                      addToCart(
                        el.id,
                        el.price,
                        el.title,
                        el.description,
                        el.imgSrc
                      )
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
