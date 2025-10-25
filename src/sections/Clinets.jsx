import React from 'react';
import {useState, useEffect} from 'react';
import user01 from '.././assets/avatars/user-01.jpg'
import user02 from '.././assets/avatars/user-02.jpg'
import user03 from '.././assets/avatars/user-03.jpg'
import user04 from '.././assets/avatars/user-04.jpg'
import user05 from '.././assets/avatars/user-05.jpg'
import user06 from '.././assets/avatars/user-06.jpg'
import {motion, AnimatePresence} from 'framer-motion'
import { Element } from 'react-scroll';


const Clinets = () => {
  const client31 = [
    {
      img: user01
      ,name: 'Joun Raffry'
      ,city: 'New York City'
    },
    {
      img: user02
      ,name: 'Andrew Carinal'
      ,city: 'Berlin Germani'
    },
    {
      img: user03
      ,name: 'Ben Morgan'
      ,city: 'Paris France'
    }
  ]
  const client32 = [
    {
      img: user04
      ,name: 'aliem Clinton'
      ,city: 'New York City'
    },
    {
      img: user05
      ,name: 'Bin Morgan'
      ,city: 'Berlin Germani'
    },
    {
      img: user06
      ,name: 'Andreo Carinal'
      ,city: 'Paris France'
    }
  ]
  const client21 = [
    {
      img: user01
      ,name: 'Joun Raffry'
      ,city: 'New York City'
    },
    {
      img: user02
      ,name: 'Andrew Carinal'
      ,city: 'Berlin Germani'
    }
  ]
  const client22 = [
    {
      img: user03
      ,name: 'Ben Morgan'
      ,city: 'Paris France'
    },
    {
      img: user04
      ,name: 'Joun Raffrry'
      ,city: 'New York City'
    }
  ]
  const client23 = [
    {
      img: user05
      ,name: 'Andrew Carinal'
      ,city: 'Berlin Germani'
    },
    {
      img: user06
      ,name: 'Bin Morgan'
      ,city: 'Paris France'
    }
  ]
  const [clients, setClients] = useState(client31);
  const [size, setSize] = useState(true);
  const [active, setActive] = useState(1);
  useEffect(() => {
    const getWidth = () => {
      if(window.innerWidth > 768){
        setSize(true);
      } else setSize(false);
    }
    window.addEventListener('resize', getWidth);
    getWidth();
    return () => window.removeEventListener('resize', getWidth)
  }, []);
  useEffect(() => {
    if(size){
      setClients(client31)
    } else setClients(client21)
  }, [size]);
  const showCli1 = () => {
    if(size){
      setClients(client31)
    } else setClients(client21)
    setActive(1)
  }
  const showCli2 = () => {
    if(size){
      setClients(client32)
    } else setClients(client22)
    setActive(2)
  }
  const showCli3 = () => {
    if(size == false){
      setClients(client23)
    }
    setActive(3)
  }
  return (
    <Element name="Clients" className='m-auto md:max-w-7xl max-w-5xl py-[180px]'>
    <h1 className='text-[7vw] md:text-[min(4vw,70px)] text-white text-center pb-[70px] sm:pb-[120px]'>What Our Clients Say</h1>
      <div className='flex gap-[50px]'>
        <AnimatePresence mode='wait'>
          {clients.map((cli) => {
            return(
              <motion.div 
              key={cli.name} 
              className='w-[50%] md:w-[33%]'
              layout
              initial={{opacity:0, x:30}}
              animate={{opacity:1, x:0}}
              exit={{opacity:0, x:-30}}
              transition={{duration: .5}}>
                <div className='flex lg:gap-[30px] md:gap-[20px] gap-[30px] items-center pb-[30px] sm:pb-[50px]'>
                  <img src={cli.img} alt="" className='size-[min(12vw,100px)] md:size-[min(8vw,100px)] rounded-full p-[8px] bg-[#1c1e1d]' />
                  <div>
                    <h4 className='text-white md:text-[min(2vw,28px)] text-[min(2.8vw,24px)]'>{cli.name}</h4>
                    <h5 className='text-[var(--text-main-c)] text-[min(2.5vw,21px)] md:text-[min(1.8vw,22px)]'>{cli.city}</h5>
                  </div>
                </div>
                <p className='text-[var(--text-third-c)] text-[min(2.5vw,21px)] md:text-[min(1.8vw,22px)]'>
                  ipsum dolor sit amet consectetur adipisicing elit. Non illum dolorem nobis! Repellat ipsam, quisquam quis quos sed Lorem quam, vel optio placeat error ducimus doloremque?
                </p>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
      <div className='flex gap-[20px] mt-[100px] justify-center'>
        <button 
        onClick={showCli1} 
        style={{backgroundColor:active === 1 ? 'white':'#5f6362'}}
        className='btnCli'></button>
        <button
        onClick={showCli2} 
        style={{backgroundColor:active === 2 ? 'white':'#5f6362'}}
        className='btnCli'></button>
        <button 
        onClick={showCli3} 
        style={{backgroundColor: active === 3 ? 'white':'#5f6362', display: size?'none':'block'}}
        className='btnCli'></button>
      </div>  
    </Element>
  )
}

export default Clinets
