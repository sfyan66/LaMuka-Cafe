import React from 'react'
import ga01 from '../assets/gallery-01.jpg'
import ga02 from '../assets/gallery-02.jpg'
import ga03 from '../assets/gallery-03.jpg'
import ga04 from '../assets/gallery-04.jpg'
import ga05 from '../assets/gallery-05.jpg'
import ga06 from '../assets/gallery-06.jpg'
import ga07 from '../assets/gallery-07.jpg'
import ga08 from '../assets/gallery-08.jpg'
import { Element } from 'react-scroll'

const  Gallry = () => {
  const gallery = [
    {id:1 ,img:ga01}, {id:2 ,img:ga02}, {id:3 ,img:ga03}, {id:4 ,img:ga04}, {id:5 ,img:ga05}, {id:6 ,img:ga06}, {id:7 ,img:ga07}, {id:8 ,img:ga08}
  ]
  return (
    <Element name="Gallry" className='m-auto md:max-w-7xl max-w-5xl py-[90px]'>
      <h1 className='text-[13vw] md:text-[min(6.5vw,90px)] text-white text-center pb-[50px]'>Gallery</h1>
      <div className='grid grid-cols-2 md:grid-cols-4'>
        {gallery.map((imgage) => {
          return (
          <div key={imgage.id} className='overflow-hidden relative h-[40vh]'>
            <img src={imgage.img} alt="" className="w-[120%] transition-transform duration-500 ease-in-out hover:opacity-[.5] hover:scale-110 opacity-[.7] hover:rotate-2"/>
          </div>
          )
        })}
      </div>
    </Element>
  )
}

export default Gallry
