import Link from 'next/link'
import React from 'react'

const InfoHeader = () => {
  return (
    <div className='flex gap-8 columns-3 bg-black text-white'>
        <div>
            <h1 >Global Microwave Parts</h1>
            <i className='text-[11px]'>Call to setup a Wholesale Account</i>
            </div>
        <div>
        <p>(P) 800-325-8488</p>
        <p>(F) 800-433-2060</p>
        </div>
        <div>
            <p>9894 Monroe Dr Dallas, TX 75220</p><Link href={'/ContactUs'}>order@globalmicrowaveparts.com</Link>
        </div>
    </div>
  )
}

export default InfoHeader
