import {React, useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-scroll'

function Header() {
  const [active, setActive] = useState("Intro");
  return (
    <header className={`bg-black px-[5px] fixed top-0 left-0 w-full backdrop-blur-md z-100 bg-black/30 shadow-xl ${active === "Intro" ? "py-[25px]" : "py-[15px]"} transition-all duration-500 ease-in-out`}>
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1,delay:3.5}}
      className={'md:max-w-7xl max-w-5xl flex justify-between items-center m-auto'}>
        <div className='text-[32px] tracking-[1.2px] text-white text-[28px] font-serif'>LaMuka.</div>
        <ul className='justify-between text-[18px] hidden md:flex'>
          {[
            {name:"Intro" ,offset:-180},
            {name:"About" ,offset:-120},
            {name:"Menu" ,offset:-100},
            {name:"Gallry" ,offset:-10}
          ].map((section) => {
            return (
              <Link to={section.name}
              className={`py-[5px] px-[10px] hover:text-[var(--text-second-c)] cursor-pointer transition-all duration-500 ease-in-out  hover:opacity-100 hover:text-[21px] ${
                active === section.name 
                ? "text-[21px] text-white opacity-100"
                : "text-[19px] text-[var(--text-main-c)] opacity-70"
              }`}
              smooth={true}
              duration={1500}
              offset={section.offset}
              spy={true}
              ease="easeInOutQuad"
              onSetActive={() => setActive(section.name)}>
                {section.name}
              </Link>
            )
          })}
          <Link to="Clients" spy={true} className='hidden' onSetActive={() => setActive("")}></Link>
        </ul>
        <button className='btn hidden md:block'>Contact us</button>
      </motion.div>
    </header>
  )
}

export default Header
