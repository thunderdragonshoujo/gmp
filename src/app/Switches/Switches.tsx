'use client'
import { Button } from "@/components/ui/button";
import { addToCart } from '../../../redux/cart.slice';
import { useDispatch } from 'react-redux';
import Image from "next/image";


const products = [
  {
    id:"GMP-GLC_14-104_1_4",
    partType:"Switch",
    product:"GLC_14-104 1_4",
    price:"10.95",
    imgSrc:"/GLC_14-104_1_4.JPG",
    imgAlt:"/GLC_14-104_1_4.JPG",
    desc:"16 Amps"
  },
  {
    id: "GLC_14-104_3_16",
    partType: "Switch",
    product: "GLC_14-104_3_16",
    price: "9.95",
    imgSrc: "/GLC_14-104_3_16.JPG",
    imgAlt: "/GLC_14-104_3_16.JPG",
    desc:"16 Amps"
  },
  {
    id:"GMP-GLC_14-22A",
    partType:"Switch",
    product:"GMP-GLC_14-22A",
    price:"10.95",
    imgSrc:"/GLC_14-22A.JPG",
    imgAlt:"/GLC_14-22A.JPG",
    desc:"22 Amps"
  },
  {
    id: "GLC_22A316ZE",
    partType: "Switch",
    product: "GLC_22A316ZE",
    price: "10.95",
    imgSrc: "/22A316ZE.JPG",
    imgAlt: "/22A316ZE.JPG",
    desc:"22 Amps"
  },
];

export default function Switches() {
  const dispatch = useDispatch();
    return (
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id}  className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    height='500'
                    width='500'
                    src={product.imgSrc}
                    alt={product.imgAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.product}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">$ {product.price}</p>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.desc}</p>
                <Button onClick={() => dispatch(addToCart(product))}>add to cart</Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
