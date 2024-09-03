'use client'
import { Button } from "@/components/ui/button";
import { addToCart } from '../../../redux/cart.slice';
import { useDispatch } from 'react-redux';
import Image from "next/image";

const products = [
  {
      id: "GMP-15928",
      partType: "Magnetron",
      product: "15928",
      price: 69.90,
      imgSrc: "/15928.JPG",
      imgAlt: "",
      desc: "1030 Watts",
  },
  {
      id: "GMP-2M210",
      partType: "Magnetron",
      product: "2M210-M1",
      price: 69.90,
      imgSrc: "/2M210.JPG",
      imgAlt: "",
      desc: "900 Watts",
  },
  {
      id: "GMP-2M229E-EH",
      partType: "Magnetron",
      product: "2M229E-EH",
      price: 69.90,
      imgSrc: "/2M229E-EH.JPG",
      imgAlt: "",
      desc: "850 Watts",
  },
  {
      id: "GMP-2M229E",
      partType: "Magnetron",
      product: "2M229E",
      price: 69.90,
      imgSrc: "/2M229E.JPG",
      imgAlt: "",
      desc: "850 Watts",
  },
  {
      id: "GMP-2M229H3H",
      partType: "Magnetron",
      product: "2M229H3H",
      price: 69.90,
      imgSrc: "/2M229H3H.JPG",
      imgAlt: "",
      desc: "850 Watts",
  },
  {
      id: "GMP-2M229H",
      partType: "Magnetron",
      product: "2M229H",
      price: 69.90,
      imgSrc: "/2M229H.JPG",
      imgAlt: "",
      desc: "850 Watts",
  },
  {
      id: "GMP-2M240H",
      partType: "Magnetron",
      product: "2M240H",
      price: 69.90,
      imgSrc: "/2M240H.JPG",
      imgAlt: "",
      desc: "850 Watts",
  },
  {
      id: "GMP-2M240H-NS",
      partType: "Magnetron",
      product: "2M240H-NS",
      price: 69.90,
      imgSrc: "/2M240H-NS.JPG",
      imgAlt: "",
      desc: "850 Watts",
  },
  {
      id: "GMP-2M244",
      partType: "Magnetron",
      product: "2M244-M1",
      price: 69.90,
      imgSrc: "/2M244.JPG",
      imgAlt: "",
      desc: "1010 Watts",
  },
  {
      id: "GMP-2M248E",
      partType: "Magnetron",
      product: "2M248E",
      price: 69.90,
      imgSrc: "/2M248E.JPG",
      imgAlt: "",
      desc: "1030 Watts",
  },
  {
      id: "GMP-2M248H-EH",
      partType: "Magnetron",
      product: "2M248H-EH",
      price: 69.90,
      imgSrc: "/2M248H-EH.JPG",
      imgAlt: "",
      desc: "1030 Watts",
  },
  {
      id: "GMP-2M248H",
      partType: "Magnetron",
      product: "2M248H",
      price: 69.90,
      imgSrc: "/2M248H.JPG",
      imgAlt: "",
      desc: "1030 Watts",
  },
  {
      id: "GMP-2M248H-NS",
      partType: "Magnetron",
      product: "2M248H-NS",
      price: 69.90,
      imgSrc: "/2M248H-NS.JPG",
      imgAlt: "",
      desc: "1030 Watts",
  },
  {
      id: "GMP-2M248J",
      partType: "Magnetron",
      product: "2M248J",
      price: 69.90,
      imgSrc: "/2M248J.JPG",
      imgAlt: "",
      desc: "1030 Watts",
  },
  {
      id: "GMP-2M248K",
      partType: "Magnetron",
      product: "2M248K",
      price: 69.90,
      imgSrc: "/2M248K.JPG",
      imgAlt: "",
      desc: "1030 Watts",
  },
  {
      id: "GMP-2M248K-NS",
      partType: "Magnetron",
      product: "2M248K-NS",
      price: 69.90,
      imgSrc: "/2M248K-NS.JPG",
      imgAlt: "",
      desc: "1030 Watts",
  },
  {
      id: "GMP-2M254H",
      partType: "Magnetron",
      product: "2M254H",
      price: 69.90,
      imgSrc: "/2M254H.JPG",
      imgAlt: "",
      desc: "850 Watts",
  },
  {
      id: "GMP-2M254J",
      partType: "Magnetron",
      product: "2M254J",
      price: 69.90,
      imgSrc: "/2M254J.JPG",
      imgAlt: "",
      desc: "850 Watts",
  },
  {
      id: "GMP-2M303H",
      partType: "Magnetron",
      product: "2M303H",
      price: 69.90,
      imgSrc: "/2M303H.JPG",
      imgAlt: "",
      desc: "1080 Watts",
  },
  {
      id: "GMP-4150019905",
      partType: "Magnetron",
      product: "4150019905",
      price: 69.90,
      imgSrc: "/4150019905.JPG",
      imgAlt: "",
      desc: "1030 Watts",
  },
  {
      id: "GMP-4358059",
      partType: "Magnetron",
      product: "4358059",
      price: 69.90,
      imgSrc: "/4358059.JPG",
      imgAlt: "",
      desc: "850 Watts",
  },
  {
      id: "GMP-57-030",
      partType: "Magnetron",
      product: "57-030",
      price: 69.90,
      imgSrc: "/57-030.JPG",
      imgAlt: "",
      desc: "860 Watts",
  },
  {
      id: "GMP-WB27X10249",
      partType: "Magnetron",
      product: "WB27X10249",
      price: 69.90,
      imgSrc: "/WB27X10249.JPG",
      imgAlt: "",
      desc: "860 Watts",
  },
  {
      id: "GMP-WB27X10249-EH",
      partType: "Magnetron",
      product: "WB27X10249-EH",
      price: 69.90,
      imgSrc: "/WB27X10249-EH.JPG",
      imgAlt: "",
      desc: "860 Watts",
  },
  {
      id: "GMP-WB27X10249-NS-BH",
      partType: "Magnetron",
      product: "WB27X10249-NS-BH",
      price: 69.90,
      imgSrc: "/WB27X10249-NS-BH.JPG",
      imgAlt: "",
      desc: "860 Watts",
  },
  {
      id: "GMP-WB27X10505",
      partType: "Magnetron",
      product: "WB27X10505",
      price: 69.90,
      imgSrc: "/WB27X10505.JPG",
      imgAlt: "",
      desc: "850 Watts",
  },
  // Add more products as needed
];

// Format currency values with a dollar sign and two decimal places
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}


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
                  <Image
                    height='600'
                    width= '500'
                    src={product.imgSrc}
                    alt={product.imgAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-1 text-lg font-medium text-gray-900">{product.product}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{formatCurrency(product.price)}</p>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.desc}</p>
                <Button onClick={() => dispatch(addToCart(product))}>add to cart</Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
