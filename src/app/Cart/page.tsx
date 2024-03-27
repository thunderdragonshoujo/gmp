'use client'
import React from 'react'
import CartPage from './Cart'
import { Provider } from 'react-redux';
import store from '../../../redux/store'

export const page = () => {
  return (
    <Provider store={store}>
    <CartPage/>
    </Provider>
    
    
  )
}
export default page

