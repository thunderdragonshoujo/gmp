'use client'
import React from 'react'
import CartPage from './Cart'
import { Provider } from 'react-redux';
import store from '../../../redux/store'

const Page = () => {
  return (
    <Provider store={store}>
    <CartPage/>
    </Provider>
    
    
  )
}
export default Page

