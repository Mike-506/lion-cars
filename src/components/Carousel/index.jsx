'use client'

import './style.css';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";


const Carousel = ({ slides }) => { 

  const [currentImg, setCurrentImg] = useState(0);
  const length = slides.length;

  const nextSlide = useMemo(() => {
    return () => {
      setCurrentImg((prevImg) => (prevImg === length - 1 ? 0 : prevImg + 1));
    };
  }, [length]);

  const previousSlide = useMemo(() => {
    return () => {
      setCurrentImg((prevImg) => (prevImg === 0 ? length - 1 : prevImg - 1));
    };
  }, [length]);


  return (
    <div className='main-container'>
    <div className="slider-container">

      {slides.map((slide, index) => (
        <div className={index === currentImg ? "slide active" : "slide"}
        key={slide.id} >
          {index === currentImg && (
            <Image
              key={slide.id}
              src={slide.url}
              width={900}
              height={550}
              alt={`Slide ${slide.id}`}
              className='imgs'
              transition-style="in:polygon:opposing-corners"
            />
          )}
        </div>
      ))}

      <div className='slider-buttons h-full w-full text-3xl'>
        <button onClick={previousSlide}>
        <SlArrowLeft className='slider-icon' />
        </button>
        <button onClick={nextSlide}> 
        <SlArrowRight className='slider-icon' />
        </button>
      </div>
    
      <div className="carousel-indicators">
      {slides.map((slide, index) => (
        <button
        key={slide.id} 
        className={index === currentImg ? "indicator active" : "indicator"}
        onClick={() => setCurrentImg(index)}/>
      ))}
    </div>

    </div>
    </div>
  )
}  

export default Carousel;