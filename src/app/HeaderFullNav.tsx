'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CartWidget from './CartWiget';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { MenuIcon } from 'lucide-react';



function Header() {
  const isDesktop = useMediaQuery("(min-width: 768px)") 
    return isDesktop ?( 
      <Provider store={store}>
        <div>
          <nav className="flex object-top justify-center space-x-4 items-center mx-auto bg-black text-white">
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
                </div>
                </Provider>
    )
    : 
    <Provider store={store}>
    <div className='flex justify-between'>
      <Drawer direction='right'>
        <DrawerTrigger>
          <MenuIcon/>
        </DrawerTrigger>
        <DrawerContent>

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
        </DrawerContent>
      </Drawer>
      <CartWidget/>
      </div>
      </Provider>
  }
export default Header
