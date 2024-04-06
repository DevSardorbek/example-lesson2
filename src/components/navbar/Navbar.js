import React from "react";
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  const links = ["Home", "Contact", "About", "Sign in"];

  return (
    <header>
      <div className="header_top">
        <div className="container">
          <div className="header__top">
            <div className="header__top__one"></div>
            <div className="header__top__two">
              <p>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </p>
              <a href="#">ShopNow</a>
            </div>
            <div className="header__top__three">
              <select>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <div className="header__bottomm">
            <div className="header__botttom__logo">
              <a href="#">Exclusive </a>
            </div>
            <div className="header_bottom__nav">
              <div className="header__bottom_nav_links">
                {links.map((el, index) => {
                  return <a key={index} href="#">{el}</a>;
                })}
              </div>
              <div className="header__bottom_nav_item">
                <div className="header__bottom_nav_item_input">
                  <input type="text" placeholder="What are you looking for?" />
                  <FiSearch />
                </div>
                <GoHeart />
                <AiOutlineShoppingCart />
              </div>
            </div>
            <div className="burger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M3.5 5a1 1 0 0 0 0 2h17a1 1 0 1 0 0-2zm-1 7a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1m0 6.001a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
