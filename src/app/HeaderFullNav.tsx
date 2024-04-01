'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CartWidget from './CartWiget';
import { Provider } from 'react-redux';
import store from '../../redux/store';



function Header() {
    return (
      <Provider store={store}>
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
                <CartWidget/>
                
                </nav>
                </div>
                </Provider>
                
               
        
    )
}

export default Header
