import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Lean Startup: How Constant</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐⭐⭐</p>
        </div>
      </div>

      <img
        src="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg"
        alt=""
        srcset=""
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
