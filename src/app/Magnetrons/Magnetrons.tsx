'use client'
import { Button } from "@/components/ui/button";
import { addToCart } from '../../../redux/cart.slice';
import { useDispatch } from 'react-redux';

    const products = [
        {
          id: "GMP-2M248H-EH",
          partType: "Magnetron",
          product: "2M248H-EH",
          price: 69.90,
          imgSrc: "/2M248H-EH.JPG",
          imgAlt:"",
        },
        {
        id:"GMP-2M229E",
        partType:"Magnetron",
        product:"2M229E",
        price:69.90,
        imgSrc:"/2M229E.JPG",
        imgAlt:"",
        desc:"A basic part with great qualities a good value.",
        },
        {
                id:"GMP-2M229E-EH",
								partType:"Magnetron",
                product:"2M229E-EH",
                price:69.90,
                imgSrc:"/2M229E-EH.JPG",
								desc:"A basic part with great qualities a good value.",
        },
            
             {
                id:"GMP-2M229E2",
								partType:"Magnetron",
                product:"2M229E",
                price:69.90,
                imgSrc:"/2M229E.JPG",
								desc:"A basic part with great qualities a good value.",
             }
        ]

export default function Magnetron() {

  const dispatch = useDispatch();

    return (
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id}  className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imgSrc}
                    alt={product.imgAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.product}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                <Button onClick={() => dispatch(addToCart(product))}>add to cart</Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }