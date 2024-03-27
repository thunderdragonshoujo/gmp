'use client'
import React from 'react'
import { Provider } from 'react-redux';
import store from '../../../redux/store'
import CheckoutPage from './Checkout'

const page = () => {
  return (
    <>
    <Provider store={store}>
    <CheckoutPage/>
    </Provider>
    </>
  )
}

export default page