import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../../Data/Data";
import Products from "../Product/Products";

export default function Search({ Cart, setCart }) {
  const [searchData, setSearchData] = useState([]);
  const { term } = useParams();

  useEffect(() => {
    const serchFilter = () => {
      const SearchData = items.filter((el) =>
        el.title.toLowerCase().includes(term.toLowerCase())
      );
      setSearchData(SearchData);
    };

    serchFilter();
  }, [term]);
  return (
    <div>
      <Products items={searchData} />
    </div>
  );
}
