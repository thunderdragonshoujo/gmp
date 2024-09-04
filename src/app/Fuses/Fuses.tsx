import { Button } from "@/components/ui/button";
import { addToCart } from '../../../redux/cart.slice';
import { useDispatch } from 'react-redux';
import Image from "next/image";

const products = [
  {
    id: "GLC_HD30",
    partType: "Fuses",
    product: "GLC_HD30",
    price: "4.90",
    imgSrc: "/GLC_HD30.JPG",
    imgAlt: "/GLC_HD30.JPG",
    desc:"A basic part with great qualities a good value."
  },
  {
    id: "GLC_FNMH",
    partType:"Fuses",
    product:"GLC_FNMH",
    price:"11.95",
    imgSrc:"/GLC_FNMH.JPG",
    imgAlt:"/GLC_FNMH.JPG",
    desc:"A basic part with great qualities a good value."
  },
  {
    id: "GLC_FNM-20",
    partType: "Fuses",
    product: "GLC_FNM-20",
    price: "4.25",
    imgSrc: "/GLC_FNM-20.JPG",
    imgAlt: "/GLC_FNM-20.JPG",
    desc:"A basic part with great qualities a good value."
  },
  {
    id: "GLC_FNM-25",
    partType:"Fuses",
    product:"GLC_FMN-25",
    price: "4.25",
    imgSrc:"/GLC_FNM-25.JPG",
    imgAlt:"/GLC_FNM-25.JPG",
    desc:"A basic part with great qualities a good value."
  },
  {
    id: "GLC_FNM-30",
    partType: "Fuses",
    product: "GLC_FNM-30",
    price: "4.25",
    imgSrc: "/GLC_FNM-30.JPG",
    imgAlt: "/GLC_FNM-30.JPG",
    desc:"A basic part with great qualities a good value."
  },
  {
    id: "GLC_4-10",
    partType:"Fuses",
    product:"GLC_4-10",
    price: "2.50",
    imgSrc:"/GLC_4-10.JPG",
    imgAlt:"/GLC_4-10.JPG",
    desc:"A basic part with great qualities a good value."
  },
  {
    id: "GLC_4-12",
    partType: "Fuses",
    product: "GLC_4-12",
    price: "2.50",
    imgSrc: "/GLC_4-12.JPG",
    imgAlt: "/GLC_4-12.JPG",
    desc:"A basic part with great qualities a good value."
  },
  {
    id: "GLC_4-15",
    partType:"Fuses",
    product:"GLC_4-15",
    price: "2.50",
    imgSrc:"/GLC_4-15.JPG",
    imgAlt:"/GLC_4-15.JPG",
    desc:"A basic part with great qualities a good value."
  },
  {
    id: "GLC_4-20",
    partType: "Fuses",
    product: "GLC_4-20",
    price: "2.50",
    imgSrc: "/GLC_4-20.JPG",
    imgAlt: "/GLC_4-20.JPG",
    desc:"A basic part with great qualities a good value."
  },
  {
    id: "GLC_4-25",
    partType:"Fuses",
    product:"GLC_4-25",
    price: "2.50",
    imgSrc:"/GLC_4-25.JPG",
    imgAlt:"/GLC_4-25.JPG",
    desc:"A basic part with great qualities a good value."
  }
];

// Format currency values with a dollar sign and two decimal places
const formatCurrency = (amount:any) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}

export default function Fuses() {
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
                <p className="mt-1 text-lg font-medium text-gray-900">{formatCurrency(product.price)}</p>
                <Button onClick={() => dispatch(addToCart(product))}>add to cart</Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
