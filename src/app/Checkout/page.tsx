'use client'
import React from 'react'
import Header from '../HeaderFullNav'
import Footer from '../Footer'
import { Provider } from 'react-redux';
import store from '../../../redux/store'
import CheckoutPage from './Checkout'

const page = () => {
  return (
    <>
    <Provider store={store}>
    <Header/>
    <CheckoutPage/>
    <Footer/>
    </Provider>
    </>
  )
}

export default page