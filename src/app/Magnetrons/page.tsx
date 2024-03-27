'use client'
import React from 'react'
import Magnetron from './Magnetrons'
import { Provider } from 'react-redux';
import store from '../../../redux/store'

const page = () => {
  return (
    <Provider store={store}>
    <Magnetron/>
    </Provider>
  )
}

export default page