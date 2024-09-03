'use client'
import { Button } from "@/components/ui/button";
import { addToCart } from '../../../redux/cart.slice';
import { useDispatch } from 'react-redux';
import Image from "next/image";


const products = [
  {
    id: "GLC_0526",
    partType: "Diodes",
    product: "GLC_0526",
    price: "10.25",
    imgSrc: "/GLC_0526.JPG",
    imgAlt: "/GLC_0526.JPG",
    desc:"A basic part with great qualities a good value."
  },
  {
    id:"GLC_0529",
    partType:"Diodes",
    product:"GLC_0529",
    price: "10.25",
    imgSrc:"/GLC_0529.JPG",
    imgAlt:"/GLC_0529.JPG",
    desc:"A basic part with great qualities a good value."
  },
  {
    id:"GLC_0530",
    partType:"Diodes",
    product:"GLC_0530",
    price: "10.25",
    imgSrc:"/GLC_0530.JPG",
    imgAlt:"/GLC_0530.JPG",
    desc:"A basic part with great qualities a good value."
  },
  {
    id:"GLC_3-A",
    partType:"Diodes",
    product:"GLC_3-A",
    price: "10.25",
    imgSrc:"/GLC_3-A.JPG",
    imgAlt:"/GLC_3-A.JPG",
    desc:"A basic part with great qualities a good value."
  },
  {
    id:"GLC_3-M",
    partType:"Diodes",
    product:"GLC_3-M",
    price: "10.25",
    imgSrc:"/GLC_3-M.JPG",
    imgAlt:"/GLC_3-M.JPG",
    desc:"A basic part with great qualities a good value."
  },
  {
    id:"WB27X1160",
    partType:"Diodes",
    product:"WB27X1160",
    price: "11.25",
    imgSrc:"/WB27X1160.JPG",
    imgAlt:"/WB27X1160.JPG",
    desc:"A basic part with great qualities a good value."
  }
];

export default function Diodes() {
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
                    height='500'
                    width= '500'
                    src={product.imgSrc}
                    alt={product.imgAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.product}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">$ {product.price}</p>
                <Button onClick={() => dispatch(addToCart(product))}>add to cart</Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
