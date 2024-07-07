'use client'
import { Button } from "@/components/ui/button";
import { addToCart } from '../../../redux/cart.slice';
import { useDispatch } from 'react-redux';
import Image from 'next/image';


const products = [
  {
    id: "GMP-0_55MFD",
    partType: "Capacitors",
    product: "GMP-0_55MFD",
    price: 22.90,
    imgSrc: "/0_55MFD.JPG",
    imgAlt: "/0_55MFD.JPG",
    desc:"2500 VAC"
  },
  {
    id: "GMP-0_63MFD",
    partType: "Capacitors",
    product: "GMP-0_63MFD",
    price: 22.90,
    imgSrc: "/0_63MFD.JPG",
    imgAlt: "/0_63MFD.JPG",
    desc:"2500 VAC"
  },
  {
    id:"GMP-0.97_MFD_A",
    partType:"Capacitors",
    product:"GMP-0.97_MFD",
    price: 22.90,
    imgSrc:"/0.97_MFD.JPG",
    imgAlt:"/0.97_MFD.JPG",
    desc:"2100 VAC"
  },
  {
    id:"GMP-1.00_MFD_A",
    partType:"Capacitor",
    product:"GMP-1.00 MFD",
    price:22.90,
    imgSrc:"/1.00_MFD.JPG",
    imgAlt:"/1.00_MFD.JPG",
    desc:"2500 VAC"
  },
  {
    id:"GMP-0.97_MFD_B",
    partType:"Capacitor",
    product:"GMP-0.97 MFD",
    price:22.90,
    imgSrc:"/0.97_MFD.JPG",
    imgAlt:"/0.97_MFD.JPG",
    desc:"2500 VAC"
  },
  {
    id:"GMP-1.00_MFD_B",
    partType:"Capacitor",
    product:"GMP-1.00 MFD",
    price:22.90,
    imgSrc:"/1.00_MFD.JPG",
    imgAlt:"/1.00_MFD.JPG",
    desc:"2500 VAC"
  },
  {
    id:"GMP-0.97_MFD_C",
    partType:"Capacitor",
    product:"GMP-0.97 MFD",
    price: 22.90,
    imgSrc:"/0.97_MFD.JPG",
    imgAlt:"/0.97_MFD.JPG",
    desc:"2500 VAC"
  }
];

export default function Capacitors() {

  const dispatch = useDispatch();
  

    return (
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src={product.imgSrc}
                    alt={product.imgAlt}
		    height='500'
		    width='500'
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.product}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{(product.price).toFixed(2)}</p>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.desc}</p>
                <Button onClick={() => dispatch(addToCart(product))}>add to cart</Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
