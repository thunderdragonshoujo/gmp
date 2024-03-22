'use client'
import React from 'react'
import CartPage from './Cart'
import { Provider } from 'react-redux';
import store from '../../../redux/store'
import Header from '../HeaderFullNav';

export const page = () => {
  return (
    <Provider store={store}>
    <Header/>
    <CartPage/>
    </Provider>
  )
}
export default page

