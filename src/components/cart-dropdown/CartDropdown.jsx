import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from "../../redux/cart/cart.selectors";

function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
