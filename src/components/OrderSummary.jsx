import React from "react";

const OrderSummary = ({ subtotal, shipping, postage, total }) => {
  return (
    <div className="order-summary">
      <h2>ORDER SUMMARY</h2>
      <p>
        <span>Subtotal:</span> <span>Rs.{subtotal.toFixed(2)}</span>
      </p>
      <p>
        <span>Shipping:</span> <span>{shipping}</span>
      </p>
      <p>
        <span>Postage:</span> <span>Rs.{postage}</span>
      </p>
      <hr />
      <p className="total">
        <span>Total:</span> <span>Rs.{total.toFixed(2)}</span>
      </p>
      <button className="checkout-btn">CHECKOUT</button>
    </div>
  );
};

export default OrderSummary;
