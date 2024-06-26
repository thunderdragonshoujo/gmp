import React from 'react';
import Link from 'next/link';


function Footer() {
    return (
    <div className="flex justify-center sticky bottom-0 space-x-4 border-t-8 border-black px-20 py-1 max-md:flex-row w-full gap-y-10  body-text bg-black text-white">		
		<Link href={"/"}>Home</Link>
		<Link href={"/PrivacyPolicy"}>Privacy Policy</Link>
		<Link href={"/Copyright"}>Copyright</Link>
		<Link href={"/AboutUs"}>About Us</Link>
		<Link href={"/ContactUs"}>Contact Us</Link>
		<Link href={"/SiteMap"}>Site Map</Link>
	</div>
    );
}

export default Footer

