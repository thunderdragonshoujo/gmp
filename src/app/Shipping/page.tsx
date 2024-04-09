'use client'
import React from 'react'
import ShippingForm from './shippingForm'
import { Provider } from 'react-redux'
import store from '../../../redux/store'

const page = () => {
  return (
    <Provider store={store}>
    <ShippingForm/>
    </Provider>
  )
}

export default page