'use client'
import React from 'react'
import Tstats from './Tstats'
import { Provider } from 'react-redux';
import store from '../../../redux/store'

const page = () => {
  return (
    <>
    <Provider store={store}>
    <Tstats/>
    </Provider>
    </>
  )
}

export default page
