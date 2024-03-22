'use client'
import React from 'react'
import Header from '../HeaderFullNav'
import Footer from '../Footer'
import Fuses from './Fuses'
import { Provider } from 'react-redux';
import store from '../../../redux/store'

const page = () => {
  return (
    <>
    <Provider store={store}>
    <Header/>
    <Fuses/>
    <Footer/>
    </Provider>
    </>
  )
}

export default page