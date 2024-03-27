'use client'
import React from 'react'
import Diodes from './Diodes'
import { Provider } from 'react-redux';
import store from '../../../redux/store'

const page = () => {
  return (
    <>
    <Provider store={store}>
    <Diodes/>
    </Provider>
    </>
  )
}

export default page