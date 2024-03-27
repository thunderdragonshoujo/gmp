'use client'
import React from 'react'
import Switches from './Switches'
import { Provider } from 'react-redux';
import store from '../../../redux/store'

const page = () => {
  return (
    <>
    <Provider store={store}>
    <Switches/>
    </Provider>
    </>
  )
}

export default page