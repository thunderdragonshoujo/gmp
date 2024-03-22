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
  <Carousel className='container' opts={{loop:true}} plugins={[Autoplay()]}>
  <CarouselContent className="items-center w-full">
    <CarouselItem><Image src='/2M229H.JPG' height='600' width='600' alt="img" /></CarouselItem>
    <CarouselItem><Image src='/0_90MF.JPG' height='600' width='600' alt="img"/></CarouselItem>
    <CarouselItem><Image src='/GLC_14-104_1_4.JPG' height='600' width='600' alt="img"/></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
  )}
