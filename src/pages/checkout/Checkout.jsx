import React from "react";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from 'reselect'
import "./Checkout.scss";
import { connect } from 'react-redux'

function CheckoutPage({ cartItems, cartTotal}) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <div className="total">TOTAL: ${cartTotal}</div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartTotal: selectCartTotal,
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CheckoutPage);
