import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__image">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Durgamati/Launch/1500x600_Hero-Tall_np._CB415069441_.jpg" />
        </div>

        <div className="home__row">
          <Product />
          <Product />
          {/* P3 */}
        </div>
        <div className="home__row">
          {/* Product */}
          {/* P2 */}
        </div>
        <div className="home__row">{/* Product */}</div>
      </div>
    </div>
  );
}
export default Home;
