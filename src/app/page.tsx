import React, { Children } from 'react'
import ShadCaro from './ShadCaro'
import Header from './HeaderFullNav'
import Footer from './Footer'
import InfoHeader from './InfoHeader'


const page = () => {
  return (
    <div className="wrapper">
    <Header/>
    <InfoHeader/>
    <ShadCaro/>
    <Footer/>
    </div>
  )
}

export default page