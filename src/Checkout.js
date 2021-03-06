import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
        />
        {basket?.length === 0 ? (
          <div className='checkout_empty'>
            <h2>Your Shopping Basket is empty</h2>
            <small>Shop today's deals</small>
            <div className='checkout__emptybuttons'>
              <button className='checkout__signin'>
                Sign in to your Account
              </button>
              <button className='checkout__signup'>Sign up now</button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className='checkout__title'>Your Shopping Basket</h2>
            {/* List out all of the Checkout Products */}
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
        )}
      </div>
      {basket.length > 0 && (
        <div className='checkout__right'>
          <h1>Subtotal</h1>
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
