import Link from 'next/link'
import React from 'react'

const SiteMap = () => {
  return (
    <div className=''>
        <ul className='ml-2'>
        <div>
                <Link href={"/"}>Home</Link>
        </div>
        <div>
		<Link href={"/Magnetrons"}>Magnetrons</Link>
        </div>
        <div>
		<Link href={"/Capacitors"}>Capacitors</Link>
        </div>
        <div>
		<Link href={"/Switches"}>Switches</Link>
        </div>
        <div>
		<Link href={"/Diodes"}>Diodes</Link>
        </div>
        <div>
		<Link href={"/Fuses"}>Fuses</Link>
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
        </ul>
    </div>
  )
}

export default SiteMap
