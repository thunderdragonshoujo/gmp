'use client'
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
// Importing actions from  cart.slice.js
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
  cartReducer,
} from '../../../redux/cart.slice';
import styles from './CartPage.module.css';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { randomUUID } from 'crypto';



const CheckoutPage = () => {

    function onSubmit(cart) {
      const orderNumber = getordernumber();
        axios({
          method: "post",
          url: "http://44.239.43.181:8080/LiftAndShift/post",
          data: {
            orderNumber: orderNumber,
            cart:cart,
          },
          headers: { "Content-Type": "application/json" },
        }).then((response) => {
          dispatch(clearCart(cart));
        });
    }

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  }

  const getordernumber = () => {
    return Math.floor(Math.random()* 1000).toString()

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
            <div className={styles.body}>
              <div className={styles.image}>
                <Image src={item.imgSrc} alt={item.imgAlt} height="90" width="65" />
              </div>
              <p>{item.product}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <p>$ {item.quantity * item.price}</p>
            </div>
          ))}
          <div className='text-lg font-extrabold text-white'>Please call 1-800-325-8488 to make payment</div>
          <Button onClick={() =>onSubmit(cart)}>click to confirm order number {getordernumber()} with a Grand Total $ {getTotalPrice()}</Button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage