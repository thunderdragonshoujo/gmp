'use client'
import React from 'react'
import Switches from './Switches'
import Header from '../HeaderFullNav'
import Footer from '../Footer'
import { Provider } from 'react-redux';
import store from '../../../redux/store'

const page = () => {
  return (
    <>
    <Provider store={store}>
    <Header/>
    <Switches/>
    <Footer/>
    </Provider>
    </>
  )
}

export default page