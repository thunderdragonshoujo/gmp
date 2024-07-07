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
import { useToast } from "@/components/ui/use-toast"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const getGeoState = () => {
let geoState = globalUserStateObject.geoState
return geoState
}

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [orderNumber, setOrderNumber] = useState('');
  const { toast } = useToast()

  

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

  function showSuccess() {
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM",
    })
  }
  
    

  function onSubmit() {
    
    console.log("XXX Submitting orderNumber:", orderNumber); // Inside onSubmit, before axios call
    toast({
      title: "Thanks Your Order was accepted",
      description: "",
    })
    axios({
      method: "post",
      url: "http://44.239.43.181:8080/LiftAndShift/post",
      data: {
        orderNo: orderNumber, // Use stateful order number
        cart: cart
      },
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      dispatch(clearCart());
      router.push('/')
    })
    
  }

  const getTotalPrice = (taxRate) => {
    const totalPriceWithoutTax = cart.reduce((accumulator, item) => accumulator + (Number(item.quantity) * Number(item.price)), 0);
    const taxAmount = totalPriceWithoutTax * taxRate;
    const totalPriceWithTax = totalPriceWithoutTax + taxAmount;
    return totalPriceWithTax;
};

const Subtotal = cart.reduce((accumulator, item) => accumulator + (Number(item.quantity) * Number(item.price)), 0);
const taxRate = getGeoState().toUpperCase() === 'TX' ? 0.0825 : 0;
console.log('Tax Rate:', taxRate);
const totalPrice = getTotalPrice(taxRate);
console.log("Total Price with Tax: ", totalPrice);
const taxAmount = Subtotal * taxRate;

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
                <Image src={item.imgSrc} alt={item.imgAlt} height="100" width="100" />
              </div>
              <p>{item.product}</p>
              <p>$ {item.price.toFixed(2)}</p>
              <p>{item.quantity}</p>
              <p>$ {(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
          <div className='w-1/2 mx-auto my-10'>
          <Card className='max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg'>
           <CardHeader>
          <CardTitle>Checkout</CardTitle>
          <CardDescription className='text-black text-balance text-lg font-extrabold'>Please call 1-800-325-8488 to make payment</CardDescription>
          </CardHeader>
          <CardContent className='grid col-span-1 justify-center items-center'>
          <div>Subtotal - {Subtotal.toFixed(2)}</div>
          <div>Tax - {taxAmount.toFixed(2)}</div>
          <div>_______________________________</div>
          <div>total with tax - {totalPrice.toFixed(2)}</div>
          </CardContent>
          <CardFooter className='flex justify-center'>
          <Button onClick={() => onSubmit()}>Submit Your Order</Button>
          </CardFooter>
          </Card>
          </div>
          
          
          
        </>
      )}
    </div>
  );
};

export default CheckoutPage;

