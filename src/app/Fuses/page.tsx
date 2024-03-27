'use client'
import React from 'react'
import Fuses from './Fuses'
import { Provider } from 'react-redux';
import store from '../../../redux/store'

const page = () => {
  return (
    <>
    <Provider store={store}>
    <Fuses/>
    </Provider>
    </>
  )
}

export default page