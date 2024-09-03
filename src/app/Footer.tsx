import React from 'react';
import Link from 'next/link';


function Footer() {
    return (
    <footer className="flex justify-center items-center sticky bottom-0 space-x-4  px-0 py-1 max-md:flex-row gap-y-10 bg-black text-white">		
		<Link href={"/"}>Home</Link>
		<Link href={"/PrivacyPolicy"}>Privacy</Link>
		<Link href={"/AboutUs"}>About Us</Link>
		<Link href={"/ContactUs"}>Contact Us</Link>
		<Link href={"/SiteMap"}>Site Map</Link>
	</footer>
    );
}

export default Footer

