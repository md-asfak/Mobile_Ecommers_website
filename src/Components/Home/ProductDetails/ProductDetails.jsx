import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../../Data/Data";
import Products from "../Product/Products";

export default function ProductDetails({ Cart, setCart }) {
  const { id } = useParams();

  const [data, setData] = useState({});

  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    const productFilter = items.filter((el) => el.id == id);
    setData(productFilter[0]);

    const RelatedProducts = items.filter((el) => el.category === data.category);
    setRelatedProduct(RelatedProducts);
  }, [id, data.category]);

  function addToCart(id, price, title, description, imgSrc) {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };

    setCart([...Cart, obj]);
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center py-10">
        <div className="w-80">
          <img src={data.imgSrc} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center max-w-96 text-center ">
          <h1 className="text-xl font-semibold pb-[5px] ">{data.title}</h1>
          <p>{data.description}</p>
          <div className="flex flex-row justify-center items-center gap-5 py-5">
            <button className=" bg-blue text-white py-1 px-2 rounded-md">
              {data.price}-₹
            </button>
            <button
              className=" bg-yellow py-1 px-2 rounded-md"
              onClick={() =>
                addToCart(
                  data.id,
                  data.price,
                  data.title,
                  data.description,
                  data.imgSrc
                )
              }
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-center text-2xl font-bold">Relative Product</h1>
      <div>
        <Products items={relatedProduct} Cart={Cart} setCart={setCart} />
      </div>
    </>
  );
}
