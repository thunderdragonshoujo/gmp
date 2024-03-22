'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


function Header() {
    
    return (
        <div>
          <nav className="flex justify-inbetween space-x-4 items-center mx-auto bg-black text-white">
            <div>
            <Link href="/">
            <Image src='/5-1-globe.png' 
            alt="Globe Logo" 
            height={50}
            width={50}/>
            </Link>
            </div>

            <Link href="/Magnetrons">
                  <div>
                    <button>Magnetrons</button>
                  </div>
                </Link>
                
                <Link href="/Switches">
                  <div>
                    <button>Switches</button>
                  </div>
                </Link>
                
                <Link href="/Capacitors">
                  <div>
                    <button>Capacitors</button>
                  </div>
                </Link>
                
                <Link href="/Diodes">
                  <div>
                    <button>Diodes</button>
                  </div>
                </Link>
                
                <Link href="/Fuses">
                  <div>
                    <button>Fuses</button>
                  </div>
                </Link>
                <Link href="/Cart">
                  <div>
                    <button>Cart</button>
                  </div>
                </Link>
                </nav> 
                </div>
                
               
        
    )
}

export default Header
