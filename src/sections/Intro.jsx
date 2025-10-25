import {React, useRef, useEffect, useState} from 'react'
import introPrim from '../assets/intro-pic-primary.jpg'
import introSec from '../assets/intro-pic-secondary.jpg'
import {motion, AnimatePresence} from 'framer-motion'
import { Element } from 'react-scroll'

function Intro() {
  const [height, setHeight] = useState(0);
  const heigh = useRef()
  useEffect(() => {
    const getHeight = () => {
      if(heigh.current){
        setHeight(heigh.current.getBoundingClientRect().height);
      }
    }
    window.addEventListener('resize', getHeight);
    getHeight();
    return () => window.removeEventListener('resize', getHeight)
  }, [])
  return (
    <Element name="Intro"  className='active md:flex m-auto md:max-w-7xl max-w-5xl md:my-[180px] px-[15px] h-[100vh]'>
      <div style={{height: `${height}px`}} className='relative flex-1 py-[30px] md:w-[min(64vw, 820px)] md:pr-[50px] mb-[30px]'>
        <motion.div 
        initial={{opacity:0,y:120}}
        animate={{opacity:1,y:0}}
        transition={{duration:1,delay:2.5}}
        className="relative text-[28px] font-[slackside One] after:content-[' '] after:w-[90px] after:h-[1px] after:absolute after:left-[-110px] after:top-[20px] text-[var(--text-third-c)] after:bg-[var(--text-main-c)] after:block md:ml-[110px] font-serif font-w italic after:hidden md:after:block">
          Welcom to
        </motion.div>
        <motion.div 
        initial={{opacity:0,y:400}}
        animate={{opacity:1,y:0}}
        transition={{duration:1,delay:2.5}}
        className='md:text-[min(10vw,160px)] text-white font-serif md:ml-[110px] leading-[1.2] text-[17vw]'>
          <h1>LaMuka<br/>Cafe</h1>
        </motion.div>
        <motion.img 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1,delay:1}}
        ref={heigh} 
        className='w-[min(56vw,440px)] z-[-1] w-[min(43vw,280px)] md:w-[min(30vw,380px)] absolute top-0 right-0 md:right-[50px]' 
        src={introPrim} alt="" />
      </div>
      <div className='w-[85vw] m-auto md:m-0 md:w-[min(34vw,400px)] text-[var(--text-third-c)]'>
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
        className='text-[5.6vw] md:text-[min(1.8vw,22px)] mt-[40px]'>
          Savor moments of bliss with every sip, as our expertly crafted coffees and delect pastries embrace your senses.
        </motion.div>
      </div>
    </Element>
  )
}

export default Intro