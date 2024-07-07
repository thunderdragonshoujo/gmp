import { Button } from "@/components/ui/button";
import { addToCart } from '../../../redux/cart.slice';
import { useDispatch } from 'react-redux';
import Image from 'next/image';

const products = [
  {
    id: "GMP-GLC_L190",
    partType: "Thermostat",
    product: "GLC L190",
    price: 10.50,
    imgSrc: "/DSCN0738.JPG",
    imgAlt: "/DSCN0738.JPG",
    desc: "190 F - 1/4 Terminals"
  },
  {
    id: "GMP-GLC_L220",
    partType: "Thermostat",
    product: "GLC L220",
    price: 10.50,
    imgSrc: "/DSCN0738.JPG",
    imgAlt: "/DSCN0738.JPG",
    desc: "220 F - 1/4 Terminals"
  },
  {
    id: "GMP-GLC_L260",
    partType: "Thermostat",
    product: "GLC L260",
    price: 10.50,
    imgSrc: "/DSCN0738.JPG",
    imgAlt: "/DSCN0738.JPG",
    desc: "260 F - 1/4 Terminals"
  },
  {
    id: "GMP-GLC_L280",
    partType: "Thermostat",
    product: "GLC L280",
    price: 10.50,
    imgSrc: "/DSCN0738.JPG",
    imgAlt: "/DSCN0738.JPG",
    desc: "280 F - 1/4 Terminals"
  },
  {
    id: "GMP-GLC_L300",
    partType: "Thermostat",
    product: "GLC L300",
    price: 10.50,
    imgSrc: "/DSCN0738.JPG",
    imgAlt: "/DSCN0738.JPG",
    desc: "300 F - 1/4 Terminals"
  },
  {
    id: "GMP-GLC_L350",
    partType: "Thermostat",
    product: "GLC L350",
    price: 10.50,
    imgSrc: "/DSCN0739.JPG",
    imgAlt: "/DSCN0739.JPG",
    desc: "350 F - 3/16 Terminals"
  },
  {
    id: "GMP-GLC_100_CIT",
    partType: "Thermostat",
    product: "GLC 100 CIT",
    price: 10.50,
    imgSrc: "/DSCN0737.JPG",
    imgAlt: "/DSCN0737.JPG",
    desc: "100 C - 3/16 Terminals"
  }
]

export default function Tstats() {
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
                 <h3 className="mt-1 text-lg font-medium text-gray-900">{product.product}</h3>
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

