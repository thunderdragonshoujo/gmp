'use client'
import React from 'react'
import Header from '../HeaderFullNav'
import Footer from '../Footer'
import Diodes from './Diodes'
import { Provider } from 'react-redux';
import store from '../../../redux/store'

const page = () => {
  return (
    <>
    <Provider store={store}>
    <Header/>
    <Diodes/>
    <Footer/>
    </Provider>
    </>
  )
}

export default page