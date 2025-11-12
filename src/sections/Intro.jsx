import { useEffect, useState } from 'react'
import introPrim from '../assets/intro-pic-primary.jpg'
import introSec from '../assets/intro-pic-secondary.jpg'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'

function Intro() {
  const [height, setHeight] = useState(550);
  useEffect(() => {
    const getWidth = () => {
      const screenWidth = window.innerWidth;
      if(screenWidth <= 715) {
        setHeight((screenWidth * .56) * 1.38)
      } else setHeight(550)
    }
    getWidth();
    window.addEventListener('resize', getWidth);
    return () => window.removeEventListener('resize', getWidth)
  }, [])
  return (
    <Element name="Intro"  className='m-auto md:max-w-7xl max-w-5xl my-[80px] md:my-[180px] px-[15px]'>
      <section className='flex flex-col md:flex-row'>
        <div style={{height: `${height}px`}} 
        className='relative py-[30px] md:w-[min(64vw, 820px)] md:pr-[30px] l
        g:pr-[50px] mb-[30px] md:flex-1'>
          <div>
            <motion.div 
            initial={{opacity:0,y:120}}
            animate={{opacity:1,y:0}}
            transition={{duration:1,delay:2.5}}
            className="relative text-[28px] font-[slackside One] after:content-[' '] after:w-[min(8.2vw,90px)] after:h-[1px] after:absolute after:left-[max(-10vw,-110px)] after:top-[20px] text-[var(--text-third-c)] after:bg-[var(--text-main-c)] after:block md:ml-[min(10vw,110px)] font-serif font-w italic after:hidden md:after:block">
              Welcom to
            </motion.div>
            <motion.div 
            initial={{opacity:0,y:400}}
            animate={{opacity:1,y:0}}
            transition={{duration:1,delay:2.5}}
            className='md:text-[min(10vw,160px)] text-white font-serif md:ml-[min(10vw,110px)] leading-[1.2] text-[17vw]'>
              <h1>LaMuka<br/>Cafe</h1>
            </motion.div>
            <motion.img 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1,delay:1}}
            className='z-[-1] w-[min(56vw,400px)] md:w-[min(29.7vw,380px)] absolute top-0 right-0 md:right-[30px] lg:right-[50px]' 
            src={introPrim} alt="" />
          </div>
          <div className='w-[85vw] m-auto md:m-0 md:w-[min(27vw,400px)] text-[var(--text-third-c)]'>
            <motion.img 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1,delay:1.25}}
            className='w-full' 
            src={introSec} alt="" />
            <motion.div 
            initial={{opacity:0,y:150}}
            animate={{opacity:1,y:0}}
            transition={{duration:.5,delay:3}}
            className='text-[4.5vw] md:text-[min(1.65vw,22px)] mt-[40px]'>
              Savor moments of bliss with every sip, as our expertly crafted coffees and delect pastries embrace your senses.
            </motion.div>
          </div>
        </div>
      </section>
    </Element>
  )
}

export default Intro