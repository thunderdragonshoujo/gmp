'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'


const ImageArray = [<Image src='/0_90MF.JPG' height={400} width={400} alt="img"/>,
  <Image src='/2M229H.JPG' height={400} width={400} alt="img"/>,
  <Image src='/GLC_FNMH.JPG' height={400} width={400} alt="img"/>]

type PropType = {
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
        {Array.from({ length: 3 }).map((_, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{ImageArray[index]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel