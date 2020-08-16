import React from "react";
import Header from "./Header";
import "./Homepage.css";
import Product from "./Product.jsx";
function Homepage() {
  return (
    <div className="home">
      <Header />
      <div>
        <img
          className="homepage__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>
      <Product image="https://n4.sdlcdn.com/imgs/f/n/r/Gionee-A1-64GB-Black-SDL352791824-1-ff379.jpeg" />
    </div>
  );
}

export default Homepage;
