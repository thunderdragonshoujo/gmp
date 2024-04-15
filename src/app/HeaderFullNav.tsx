'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CartWidget from './CartWiget';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Button, buttonVariants } from "@/components/ui/button"







function Header() {
  const isDesktop = useMediaQuery("(min-width: 768px)") 
    return isDesktop ?( 
      <Provider store={store}>
        <div>
          <nav className="flex object-top justify-start space-x-4 items-center mx-auto bg-black text-white">
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
                <div className='justify-end'>
            
            <Image src='/FedEx-200px.png' 
            alt="Globe Logo" 
            height={100}
            width={100}/>
            
            </div>
                </nav>
                <div className='flex gap-8 columns-3 bg-black text-white'>
        <div>
            <h1 className='text-4xl'>Global Microwave Parts</h1>
            <i className='text-md'>Call to setup a Wholesale Account</i>
            </div>
        <div>
        <p>(P) 800-325-8488</p>
        <p>(F) 800-433-2060</p>
        </div>
        <div className='hidden lg:block'>
            <p className=''>9894 Monroe Dr Dallas, TX 75220</p><Link href={'/ContactUs'} className='underline hover:text-cyan-500 font-sans font-extrabold'> order@globalmicrowaveparts.com</Link>
        </div>
    </div>
                </div>
                </Provider>
    )
    :
    <Provider store={store}>
      <div className='sticky top-0 z-50'>
      <div className='flex gap-8 columns-3 bg-black text-white font-extrabold'>
        <div>
            <h1 className='text-lg' >Global Microwave Parts</h1>
            <i className='text-sm'>Call to setup a Wholesale Account</i>
            </div>
        <div>
        <p>(P) 800-325-8488</p>
        <p>(F) 800-433-2060</p>
        </div>
        <div className='hidden lg:block'>
            <p>9894 Monroe Dr Dallas, TX 75220</p><Link href={'/ContactUs'}>order@globalmicrowaveparts.com</Link>
        </div>
    </div>
        <nav className='bg-black text-white'>
          <ul className='columns-2'>
          
            <Link href="/Magnetrons">Magnitrons</Link>
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
          </ul>
        </nav>
      </div>

</Provider>
}

export default Header
