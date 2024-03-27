'use client'
import React from 'react'
import Capacitors from './Capacitors'
import { Provider } from 'react-redux';
import store from '../../../redux/store'

const page = () => {
  return (
    <>
    <Provider store={store}>
    <Capacitors/>
    </Provider>
    </>
  )
}

export default page