import React from "react";
import "../../sass/components/_hero.scss";
import applelogo from "../assets/images/apple.png";
import banner from "../assets/images/hero_endframe__cvklg0xk3w6e_large 2.png";
function Hero() {
  return (
    <section class="hero_sections">
      <div className="container">
        <div className="hero_section">
          <div className="hero__section_info">
            <div className="hero_section_brand">
              <img src={applelogo} alt="" />
              <p>iPhone 14 Series</p>
            </div>
            <h1>Up to 10% off Voucher</h1>
            <p>
              <span>Shop Now</span>
              <img src="./img/hero_right.png" alt="" />
            </p>
          </div>
          <div className="hero__section_img">
            <img src={banner} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

// <div className="hero">
// <h1>Main</h1>
// <div>
//   {Links.map((value, index) => {
//     return <button key={index}>{value}</button>;
//   })}
// </div>
// </div>

// const Links = ["Learn more ", "buy now", "see more"];
