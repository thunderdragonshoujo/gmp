import Link from 'next/link'
import React from 'react'

const SiteMap = () => {
  return (
    <div className=''>
        <ul className=''>
         <div>
        <Link href={"/"}>Home</Link>
        </div>
        <div>
		<Link href={"/PrivacyPolicy"}>Privacy Policy</Link>
        </div>
        <div>
		<Link href={"/Copyright"}>Copyright</Link>
        </div>
		<div>
        <Link href={"/AboutUs"}>About Us</Link>
        </div>
		<div>
        <Link href={"/ContactUs"}>Contact Us</Link>
        </div>
		<div>
        <Link href={"/SiteMap"}>Site Map</Link>
        </div>
        </ul>
    </div>
  )
}

export default SiteMap