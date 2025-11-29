import introPrim from "../assets/intro-pic-primary.jpg";
import introSec from "../assets/intro-pic-secondary.jpg";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

function Intro() {
  return (
    <Element
      name="Intro"
      className="m-auto md:max-w-7xl max-w-5xl my-[80px] md:my-[180px]"
    >
      <section className="flex flex-col md:flex-row md:h-screen">
        <div
          className="relative py-[30px] md:w-[min(64vw, 820px)] md:pr-[30px] l
        g:pr-[50px] mb-[30px] md:flex-1 flex flex-col md:flex-row"
        >
          <div className="relative flex-1 md:block grid grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="relative text-[min(3.65vw,28px)] font-[slackside One] after:content-[' '] after:w-[min(8.2vw,90px)] after:h-[1px] after:absolute after:left-[max(-10vw,-110px)] after:top-[20px] text-[var(--text-third-c)] after:bg-[var(--text-main-c)] md:ml-[min(10vw,110px)] font-serif font-w italic after:hidden md:after:block col-span-6"
            >
              Welcom to
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 400 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="md:text-[min(10vw,160px)] text-white font-serif md:ml-[min(10vw,110px)] leading-[1.2] text-[17vw] col-start-1 col-span-5"
            >
              <h1>
                LaMuka
                <br />
                Cafe
              </h1>
            </motion.div>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="-z-1 w-[min(56vw,420px)] md:w-[min(29.7vw,380px)] md:absolute md:right-[30px] lg:right-[50px] col-start-6 row-span-2 col-span-7 top-0 md:m-0 -mt-6 rounded-2xl"
              src={introPrim}
              alt=""
            />
          </div>
          <div className="w-full mr-auto md:ml-auto md:w-[min(27vw,400px)] text-[var(--text-third-c)] my-18 md:my-0">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.25 }}
              className="w-full rounded-2xl"
              src={introSec}
              alt=""
            />
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3 }}
              className="text-[4.5vw] md:text-[min(1.65vw,22px)] mt-[40px]"
            >
              Savor moments of bliss with every sip, as our expertly crafted
              coffees and delect pastries embrace your senses.
            </motion.div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Intro;
