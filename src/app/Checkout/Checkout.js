'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from '../../../redux/cart.slice';
import styles from './CartPage.module.css';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import globalUserStateObject from '../../../redux/globalUserStateObject';

const getGeoState = () => {
let geoState = globalUserStateObject.geoState
return geoState
}

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [orderNumber, setOrderNumber] = useState('');
  
  

  // Function to generate and set a new order number
  const generateOrderNumber = () => {
    const newOrderNumber = Math.floor(Math.random() * 1000).toString();
    console.log('new order number'+ newOrderNumber)
    setOrderNumber(newOrderNumber); // Update state
    console.log("XXX Displaying set orderNumber:", orderNumber); // Right before return statement
    return newOrderNumber;
  };

  // Generate an initial order number when the component mounts
  useEffect(() => {
    generateOrderNumber();
  }, []);

  function onSubmit(cart) {
    console.log("XXX Submitting orderNumber:", orderNumber); // Inside onSubmit, before axios call
    
    axios({
      method: "post",
      url: "http://44.239.43.181:8080/LiftAndShift/post",
      data: {
        orderNo: orderNumber, // Use stateful order number
        cart: cart,
      },
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      dispatch(clearCart());
    }).then((responnse) => {
      router.push('/')
    })
  }

  const getTotalPrice = (taxRate) => {
    const totalPriceWithoutTax = cart.reduce((accumulator, item) => accumulator + (Number(item.quantity) * Number(item.price)), 0);
    const taxAmount = totalPriceWithoutTax * taxRate;
    const totalPriceWithTax = totalPriceWithoutTax + taxAmount;
    return totalPriceWithTax;
};

const taxRate = getGeoState() === 'TX' ? 0.0815 : 0;
console.log('Tax Rate:', taxRate);
const totalPrice = getTotalPrice(taxRate);
console.log("Total Price with Tax: ", totalPrice);


  const router = useRouter()
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
                <Image src={item.imgSrc} alt={item.imgAlt} height="60" width="45" />
              </div>
              <p>{item.product}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <p>$ {item.quantity * item.price}</p>
            </div>
          ))}
          <div>
            Your total Price With Tax {totalPrice.toFixed(2)}</div>
          <div className='text-lg font-extrabold text-white'>Please call 1-800-325-8488 to make payment</div>
          <Button onClick={() => onSubmit(cart)}>Submit your Order</Button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;

