import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "../../Data/Data";

export default function Navber({ setData, Cart }) {
  const location = useLocation();
  const [inputText, setInputText] = useState("");

  const navigate = useNavigate();

  const filterByCategory = (el) => {
    const element = items.filter((product) => product.category === el);
    setData(element);
  };

  const priceByFilter = (price) => {
    const priceElement = items.filter((el) => el.price <= price);
    setData(priceElement);
  };

  const searchHundle = (e) => {
    e.preventDefault();
    navigate(`/Products/${inputText}`);
    setInputText("");
  };

  const [toggle, setToggle] = useState(false);

  const toggleHundler = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <navber className="fixed w-[100%] top-0 left-0">
        <header>
          <section className="flex flex-row bg-color_1 justify-between items-center text-white px-10 py-[10px] outline-none">
            <Link to={"/"} className="text-2xl">
              Wowly
            </Link>

            <form className="" onSubmit={searchHundle}>
              <input
                type="text"
                placeholder="Search Product"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="px-2 py-2 hidden xs:block  xs:w-[320px] text-black outline-none"
              />
            </form>

            <div className="mt-1">
              <Link to="/Cart" className="">
                <FaCartArrowDown className="relative text-[35px]" />
                <span className="absolute top-1 cursor-pointer right-[29px] bg-red px-[2px]  rounded-[50%] text-2xl">
                  {Cart.length}
                </span>
              </Link>
            </div>
          </section>

          {location.pathname == "/" && (
            <div className="flex-row bg-color_2  text-white justify-around text-[18px] items-center hidden md:flex">
              <div className="flex flex-row gap-2 py-2 cursor-pointer">
                Filter By
                <span>
                  <i class="fa-solid fa-filter"></i>
                </span>
              </div>
              <div onClick={() => setData(items)} className="cursor-pointer">
                No Filter
              </div>
              <div
                onClick={() => filterByCategory("mobiles")}
                className="cursor-pointer"
              >
                Mobiles
              </div>
              <div
                onClick={() => filterByCategory("laptops")}
                className="cursor-pointer"
              >
                Laptop
              </div>
              <div
                onClick={() => filterByCategory("tablets")}
                className="cursor-pointer"
              >
                Tablets
              </div>
              <div
                className="flex flex-row gap-1 cursor-pointer"
                onClick={() => priceByFilter(29999)}
              >
                <span>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                29999
              </div>
              <div
                className="flex flex-row gap-1 cursor-pointer"
                onClick={() => priceByFilter(49999)}
              >
                <span>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                </span>
                49999
              </div>
              <div
                className="flex flex-row gap-1 cursor-pointer"
                onClick={() => priceByFilter(69999)}
              >
                <span>
                  <i class="fa-solid fa-indian-rupee-sign cursor-pointer"></i>
                </span>
                69999
              </div>
              <div
                className="flex flex-row gap-1 cursor-pointer"
                onClick={() => priceByFilter(89999)}
              >
                <span>
                  <i class="fa-solid fa-indian-rupee-sign "></i>
                </span>
                89999
              </div>
            </div>
          )}
        </header>
        {location.pathname == "/" && (
          <section className=" inset-0 fixed mt-[55px] text-white text-[18px] md:hidden bg-color_2  h-[45px] ">
            <div
              className="flex flex-row gap-2 py-2 cursor-pointer  px-10"
              onClick={toggleHundler}
            >
              Filter By
              <span>
                <i class="fa-solid fa-filter"></i>
              </span>
            </div>

            {toggle && (
              <section className="bg-color_1  px-10 flex flex-col gap-4 py-5 w-[250px]">
                <div onClick={() => setData(items)}>No Filter</div>
                <div onClick={() => filterByCategory("mobiles")}>Mobiles</div>
                <div onClick={() => filterByCategory("laptops")}>Laptop</div>
                <div onClick={() => filterByCategory("tablets")}>Tablets</div>

                <div
                  className="flex flex-row gap-1"
                  onClick={() => priceByFilter(29999)}
                >
                  <span>
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                  </span>
                  29999
                </div>
                <div
                  className="flex flex-row gap-1"
                  onClick={() => priceByFilter(49999)}
                >
                  <span>
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                  </span>
                  49999
                </div>
                <div
                  className="flex flex-row gap-1"
                  onClick={() => priceByFilter(69999)}
                >
                  <span>
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                  </span>
                  69999
                </div>
                <div
                  className="flex flex-row gap-1"
                  onClick={() => priceByFilter(89999)}
                >
                  <span>
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                  </span>
                  89999
                </div>
                <hr />
                <form className="" onSubmit={searchHundle}>
                  <input
                    type="text"
                    placeholder="Search Product"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="px-2 py-[7px]  w-[180px] text-black outline-none"
                  />
                </form>
              </section>
            )}
          </section>
        )}
      </navber>
    </>
  );
}
