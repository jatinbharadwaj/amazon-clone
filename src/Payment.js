import React, { useDebugValue } from "react";
import CheckoutProduct from "./CheckoutProduct.js";
import { useStateValue } from "./StateProvider";
import "./Payment.css";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(
          <Link to="/checkout">{basket?.length}Items</Link>)
        </h1>
        {/* payment Section */}

        <div className="payment__section">
          <div className="payment__title">
            <h3> Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>your address goes here</p>
            <p>your address goes here</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items & delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
