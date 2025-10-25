import React from 'react'
import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import FirstDrink from '../assets/drinks/FirstDrink.jpeg'
import secondDrink from '../assets/drinks/secondDrink.jpeg'
import thirdDrink from '../assets/drinks/thirdDrink.jpeg'
import fourthDrink from '../assets/drinks/fourthDrink.jpg'
import corrosant from '../assets/baked/corrosant.jpg'
import secondBa from '../assets/baked/secondBa (1).webp'
import bluebarry from '../assets/baked/bluebarry (1).webp'
import fourthBa from '../assets/baked/fourthBa.jpg'
import firstDe from '../assets/desserts/firstDessert.jpg'
import secondDe from '../assets/desserts/secondDe.jpg'
import thirdDe from '../assets/desserts/thirdDe.jpg'
import forthDe from '../assets/desserts/forthDe.jpg'
import { Element } from 'react-scroll'

function Menu() {
  const drinks = [
    {
      img: FirstDrink
      ,title:'Elegance Espresso'
      ,price:'4.50$'
      ,desc:'Rich and full-bodied, our signature notes espresso blend with notes of dark  chocolate and toasted nuts.'
    },
    {
      img: secondDrink 
      ,title:'Caramel Macchiato'
      ,price:'5.25$'
      ,desc:'A harmonious blend of espresso, steamed milk,  our signature Caramel Macchiato and caramel  drizzle.'
    },
    {
      img: thirdDrink 
      ,title:'Mocha Delight'
      ,price:'4.95$'
      ,desc:'Silky mocha infused with a hint of  vanilla, our signature steamed crowned with velvety whipped cream.'
    },
    {
      img: fourthDrink 
      ,title:'Iced Frappuccino'
      ,price:'4.25$'
      ,desc:'A harmonious blend infused of espresso, our signature steamed milk Iced Frappuccino, and caramel drizzle.'
    }
  ]
  const pastries = [
    {
      img: corrosant 
      ,title:'Buttery Croissants'
      ,price:'2.50$'
      ,desc:'Flaky and buttery our signature Buttery harmonious blend croissants baked signature steamed to perfection.'
    },
    {
      img: bluebarry 
      ,title:'Blueberry Muffins'
      ,price:'3.25$'
      ,desc:'Moist muffins bursting with blueberries and our signature Blueberry Muffins a crumbly streusel top.'
    },
    {
      img: fourthBa
      ,title:'Choco-Filled Scones'
      ,price:'4.15$'
      ,desc:'Tender scones with a chocolate center and our signature Chocolate-Filled Scones baked to perfection.'
    },
    {
      img: secondBa 
      ,title:'Cream Danish'
      ,price:'3.95$'
      ,desc:'Sweet and tangy raspberry filling in a cream cheese danish our signature Cream Danish baked to perfection.'
    }
  ]
  const desserts = [
    {
      img: firstDe 
      ,title:'Handcrafted Bonbons'
      ,price:'3.20$'
      ,desc:'Praline-filled bonbons topped with a swirls of Handcrafted raspberry and a sprinkle caramelized nut.'
    },
    {
      img: secondDe
      ,title:'Pistachio Toffee'
      ,price:'4.65$'
      ,desc:'Creamy white chocolate with swirls of swirls of raspberry and a sprinkle raspberry and a sprinkle of almonds.'
    },
    {
      img: thirdDe 
      ,title:'Salted Caramel Bites'
      ,price:'2.95$'
      ,desc:'Fudgy brownie bites with a caramel drizzle swirls of raspberry and a sprinkle and a touch of sea salt.'
    },
    {
      img: forthDe 
      ,title:'Raspber Choco Bark'
      ,price:'5.50$'
      ,desc:'Creamy white chocolate with swirls and a sprinkle raspberry swirls of raspberry and a sprinkle of almonds.'
    }
  ];
  const [products, setProducts] = useState(drinks);
  const [active, setActive] = useState('drinks');
  const showDr = () => {
    setProducts(drinks);
    setActive('drinks');
  }
  const showPa = () => {
    setProducts(pastries);
    setActive('pastries');
  }
  const showDe = () => {
    setProducts(desserts);
    setActive('desserts');
  }
  return (
    <Element name="Menu" className='my-[180px]'>
      <h1 className='text-[12vw] md:text-[min(6vw,90px)] text-white text-center pb-[60px]'>Our Menu</h1>
      <ul className='flex gap-[15px] sm:gap-[30px] justify-center'>
        <button onClick={showDr} className={active == 'drinks' ? 'btnMActive' : 'btnM'}>Drinks</button>
        <button onClick={showPa} className={active == 'pastries' ? 'btnMActive' : 'btnM'}>Pastries</button>
        <button onClick={showDe} className={active == 'desserts' ? 'btnMActive' : 'btnM'}>Desserts</button>
      </ul>
      <AnimatePresence mode="wait">
        <div className='md:max-w-7xl max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-[40px] sm:gap-y-[60px] gap-x-[30px] my-[40px]'>
          {products.map((prodc) => {
            return(
              <motion.div 
              key={prodc.title}
              className='flex sm:gap-[30px] gap-[25px] mx-auto px-[20px]'
              smooth={true}
              initial={{opacity:0, y:40}}
              animate={{opacity:1, y:0}}
              exit={{opacity:0, y:-40}}
              transition={{duration:1}}>
                <motion.img 
                src={prodc.img} 
                alt="" 
                className='h-[min(22vw,160px)] md:h-[min(14vw,160px)] block transition-all'
                smooth={true}
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration:1
                }}/>
                <div className='max-w-[360px] flex flex-col sm:gap-[25px] gap-[15px] justify-center'>
                  <div className='flex justify-between'>
                    <h4 className='text-white text-[min(4.2vw,24px)] md:text-[min(2.2vw,26px)]'>{prodc.title}</h4>
                    <h5 className='text-[var(--button-second-bg)] text-[min(4.4vw,26px)] md:text-[min(2.5vw,28px)] underline font-bold'>{prodc.price}</h5>
                  </div>
                  <p className='text-[var(--text-main-c)] text-[min(3.2vw,18px)] md:text-[min(1.5vw,18px)]'>{prodc.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </AnimatePresence>
    </Element>
  )
}

export default Menu
