import React, { Children } from 'react'
import ShadCaro from './ShadCaro'
import Header from './HeaderFullNav'
import Footer from './Footer'
import InfoHeader from './InfoHeader'


const page = () => {
  return (
    <>
    <Header/>
    <InfoHeader/>
    <ShadCaro/>
    <Footer/>
    </>
  )
}

export default page