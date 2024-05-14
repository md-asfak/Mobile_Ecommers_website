import React, { useState } from "react";
import Products from "../Home/Product/Products";
import Cart from "../Cart/Cart";
import ProductDetails from "../Home/ProductDetails/ProductDetails";
import Search from "../Home/SearchInput/Search";
import Navber from "../Home/Navber/Navber";
import { Route, Routes } from "react-router-dom";
import { items } from "../Data/Data";

export default function Router() {
  const [item, setItem] = useState([...items]);
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navber setData={setItem} Cart={cart} />
      <Routes>
        <Route
          path="/"
          element={<Products items={item} Cart={cart} setCart={setCart} />}
        />
        <Route
          path="/ProductDetails/:id"
          element={<ProductDetails Cart={cart} setCart={setCart} />}
        />
        <Route
          path="/Cart"
          element={<Cart Cart={cart} setCart={setCart} item={item} />}
        />
        <Route
          path="/Products/:term"
          element={<Search Cart={cart} setCart={setCart} />}
        />
      </Routes>
    </>
  );
}
