import React, { useState } from 'react'
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa'

const imageurl =[
    {
        image: '/images/batman.jpg'
    }, {
        image: '/images/flash.jpg'
    }, {
        image: '/images/groot.jpg'
    }, {
        image: '/images/ironman.jpg'
    }, {
        image: '/images/joker.jpg'
    }, {
        image: '/images/spiderman.jpg'
    }, {
        image: '/images/superman.jpg'
    }, {
        image: '/images/thor.jpg'
    }, {
        image: '/images/venom.jpg'
    }, {
        image: '/images/wonderwomen.jpg'
    }
]

export const ImageSlider = () => {
    const [current,setCurrent] = useState(0)
    const length = imageurl.length

    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current + 1);
        console.log(current);
    }
    const preSlide = () => {
        setCurrent(current === 0 ? length-1 : current -1);
        console.log(current);
    }

  return (
    <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={preSlide}/>
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
        {imageurl.map((img,index) => {
            return (
                <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                    {index===current && (
                        <img className='image'  src={img.image} alt="image" />
                    )}
                </div>
            );
        })}
    </section>
  )
}
