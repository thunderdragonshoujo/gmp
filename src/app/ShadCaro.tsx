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
    <CarouselItem><Image src='/Globe-med.png' height='350' width='450' alt="Globe"/></CarouselItem>
    <CarouselItem><Image src='/tile-00.jpg' height='600' width='600' alt="Magnetron" /></CarouselItem>
    <CarouselItem><Image src='/tile-01.jpg' height='600' width='600' alt="Fuses" /></CarouselItem>
    <CarouselItem><Image src='/tile-02.jpg' height='600' width='600' alt="Magnetron" /></CarouselItem>
    <CarouselItem><Image src='/tile-03.jpg' height='600' width='600' alt="Magnetron" /></CarouselItem>
    <CarouselItem><Image src='/tile-04.jpg' height='600' width='600' alt="Switches"/></CarouselItem>
    <CarouselItem><Image src='/tile-05.jpg' height='600' width='600' alt="Fuses"/></CarouselItem>
    <CarouselItem><Image src='/tile-06.jpg' height='600' width='600' alt="Fuses"/></CarouselItem>
    <CarouselItem><Image src='/tile-07.jpg' height='600' width='600' alt="Magnetron"/></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
  )}
