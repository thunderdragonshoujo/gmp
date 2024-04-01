'use client'
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import Link from 'next/link';
import store from '../../redux/store'; // Import your Redux store here
import Image from 'next/image';

const CartWidget = () => {
  // Select the cart items from Redux store
  const cart = useSelector((state) => state.cart);

  // Calculate the total quantity of items in the cart
  const totalQuantity = cart.reduce((accumulator, item) => accumulator + item.quantity, 0);

  return (
    <Link href='/Cart'>
                <div className='flex flex-row gap-2'><Image src='/shopping-cart.svg' alt="cart" width={25} height={25} /> Cart : <span className='font-bold text-red-500 inline-block'>
                      {totalQuantity}
                  </span></div>
            </Link>
  );
};

export default CartWidget;
