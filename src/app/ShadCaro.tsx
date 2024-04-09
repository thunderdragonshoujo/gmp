'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Image from "next/image"
  import Autoplay from "embla-carousel-autoplay";

  export default function ShadCaro(){
    return(
  <Carousel className='flex-grow justify-center' opts={{loop:true}} plugins={[Autoplay()]}>
  <CarouselContent className=" container items-center basis-1/3">
    <CarouselItem><Image src='/Globe-med.png' height='600' width='600' alt="Globe"/></CarouselItem>
    <CarouselItem><Image src='/2M229H.JPG' height='600' width='600' alt="Magnetron" /></CarouselItem>
    <CarouselItem><Image src='/0_90MF.JPG' height='600' width='600' alt="Capacitor"/></CarouselItem>
    <CarouselItem><Image src='/GLC_0526.JPG' height='600' width='600' alt="Diode"/></CarouselItem>
    <CarouselItem><Image src='/tile-05.jpg' height='600' width='600' alt="Fuses"/></CarouselItem>
    <CarouselItem><Image src='/tile-04.jpg' height='600' width='600' alt="Switches"/></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
  )}
