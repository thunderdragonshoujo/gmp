'use client'
import React from 'react'
import Header from '../HeaderFullNav'
import Footer from '../Footer'
import Capacitors from './Capacitors'
import { Provider } from 'react-redux';
import store from '../../../redux/store'

const page = () => {
  return (
    <>
    <Provider store={store}>
    <Header/>
    <Capacitors/>
    <Footer/>
    </Provider>
    </>
  )
}

export default page