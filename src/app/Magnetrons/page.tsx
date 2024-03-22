'use client'
import React from 'react'
import Magnetron from './Magnetrons'
import Header from '../HeaderFullNav'
import Footer from '../Footer'
import { Provider } from 'react-redux';
import store from '../../../redux/store'

const page = () => {
  return (
    <>
    <Provider store={store}>
    <Header/>
    <Magnetron/>
    <Footer/>
    </Provider>
    </>
  )
}

export default page