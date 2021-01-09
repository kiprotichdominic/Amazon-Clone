import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating }) {
  return (
    <div className='checkoutProduct'>
      <img className="checkoutProduct__image" src={image} alt='' />

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div>
        <button>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
