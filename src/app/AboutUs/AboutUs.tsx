import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'

const AboutUs = () => {
  return (
	<div className='flex justify-center'>
<Card className='flex justify-center w-1/3'>
  <div>
  <Image 
  src="/map-img.png"
  width={100}
  height={100}
  alt='Logo' 
  />
		<h1>About Us</h1>
			<h2>Our People:</h2>
			<ul>
			<li>Roy Cook, Chief Executive Officer</li>
			</ul>
			<br />
		<h2>Our Address:</h2>
		<ul>
			<li>Global Microwave Parts, LLC</li>
			<li>9894 Monroe Dr</li>
			<li>Dallas, TX 75220</li>
		</ul>
		<br />
		<h2>Hours of Operation:</h2>
		<ul>
			<li>Monday-Friday</li>
			<li>9:00 a.m. to 5:00 p.m.</li>
			<li>Central Standard Time</li>
		</ul>
		<br />
		<h2>Our Location:</h2>
		<ul>
			<li><a href="https://goo.gl/maps/n5u86e6YLU3AhkgZ9" target="_blank" rel="noopener noreferrer">Directions </a></li>
		</ul>
		<br />
  </div>
		</Card>
		</div>
  )
}

export default AboutUs
