'use client'
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
// Importing actions from  cart.slice.js
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../../../redux/cart.slice';
import styles from './CartPage.module.css';
import { Button } from '@/components/ui/button';
import { buttonVariants } from "@/components/ui/button"

import Link from 'next/link';

const CartPage = () => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    const totalPrice = cart.reduce(
        (accumulator, item) => accumulator + item.quantity * item.price,
        0
    );

    // Use toFixed() to limit decimal places to 2
    return totalPrice.toFixed(2);
};

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item) => (
            <div key={item.id} className={styles.body}>
              <div className={styles.image}>
                <Image src={item.imgSrc} alt={item.imgAlt} height="90" width="65" />
              </div>
              <p>{item.product}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
<Link className={buttonVariants({ variant: "outline" })}href='/Shipping'>Checkout Grand Total: $ {getTotalPrice()}</Link>
        </>
      )}
    </div>
  );
};

export default CartPage
