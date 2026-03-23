import React from "react";
import { CgMenu } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";

const categories = [
  { name: "Our Store" },
  { name: "Home & Kitchen" },
  {
    name: "Dairy Items",
    children: ["Milk", "Cheese", "Butter"],
  },
  { name: "Snacks Item" },
  { name: "Vegetable" },
  {
    name: "Fresh Bakery",
    children: ["Bread", "Cake"],
  },
  { name: "Beverages" },
  { name: "Fruit" },
  { name: "Meat & Eggs" },
  { name: "Milk" },
];

const  MainHeader =() =>{
  return (
    <section className="hidden lg:block bg-white ">
      <nav className="container mx-auto">
        {/* wrapper.... menu + submenu */}
        <div className="relative inline-block  group ">
          {/*1. menu */}
          <div className="flex items-center gap-4 py-5 cursor-pointer">
            <span className="text-[25px] text-black "> <CgMenu /> </span>
            <span className="text-base text-black font-medium font-inter leading-[150%] "> Shop By Category </span>
          </div>

          {/*2. Dropdown submenu container */}
          <ul className="absolute left-0 top-full  w-72 h-auto
                       bg-white border border-gray-100 shadow-lg
                      opacity-0 invisible group-hover:opacity-100  
                      group-hover:visible transition-all duration-200 z-50">
            {categories.map((item, index) => (
              // 2.2dropdown submenu -1
              <li key={index} className="relative group/item  ">
                <Link to="shop" className="flex justify-between items-center px-4 py-3 border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
                  <span>{item.name}</span>
                  {item.children && <span className="group-hover/item:rotate-90 transition-transform duration-300"> <IoIosArrowForward /></span>}
                </Link>

                {/*2.2 dropdown-Sub Menu2 */}
                {item.children && (
                  <ul className="absolute top-0 left-full w-56 bg-white border shadow-lg
                               opacity-0 invisible
                                group-hover/item:opacity-100 group-hover/item:visible 
                                transition-all duration-200">
                    {item.children.map((sub, i) => (
                      <li
                        key={i}
                        className="px-4 py-2 hover:bg-gray-100"
                      >
                       <Link>  {sub}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
}
export default MainHeader;
// 1. top-full means
// 2.group-hover/item: means
// 3.
// menu container
    // icon 
    // menu text