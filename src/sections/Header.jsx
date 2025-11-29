import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Header() {
  const [active, setActive] = useState("Intro");
  const [show, setShow] = useState(false);
  return (
    <header
      className={`px-4 md:px-[5px] py-[10px]  fixed top-0 left-0 w-full backdrop-blur-md z-100 bg-black/30 shadow-xl ${
        active === "Intro" ? "md:py-[25px]" : "md:py-[15px]"
      } transition-all duration-500 ease-in-out`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        <nav className="md:max-w-7xl max-w-5xl flex justify-between items-center m-auto relative">
          <div className="text-[min(7vw,36px)] tracking-[1.2px] text-white font-serif">
            LaMuka.
          </div>
          <ul
            className={`justify-between text-[18px] md:flex md:flex-row md:relative absolute flex-col border-[#d6ebfd30] border bg-black rounded-lg right-0 top-[100%] w-full md:w-fit gap-6 md:borde px-4 py-4 md:py-[2px] ${
              show ? "flex" : "hidden"
            }`}
          >
            {[
              { name: "Intro", offset: -180 },
              { name: "About", offset: -120 },
              { name: "Menu", offset: -100 },
              { name: "Gallry", offset: -10 },
            ].map((section) => {
              return (
                <Link
                  to={section.name}
                  className={`py-[5px] px-[10px] hover:text-[var(--text-second-c)] cursor-pointer transition-all duration-500 ease-in-out  hover:opacity-100 md:hover:text-[21px] w-full md:w-fit text-center hover:bg-white/10 md:hover:bg-inherit rounded-2xl ${
                    active === section.name
                      ? "text-[21px] text-white opacity-100 bg-white/10 md:bg-inherit"
                      : "text-[19px] text-[var(--text-main-c)] opacity-70"
                  }`}
                  smooth={true}
                  duration={1500}
                  offset={section.offset}
                  spy={true}
                  ease="easeInOutQuad"
                  onSetActive={() => setActive(section.name)}
                >
                  {section.name}
                </Link>
              );
            })}
            <Link
              to="Clients"
              spy={true}
              className="hidden"
              onSetActive={() => setActive("")}
            ></Link>
            <button className="btnmd md:hidden">Contact us</button>
          </ul>
          <button className="btn hidden md:block">Contact us</button>
          <div
            className="md:hidden text-white size-12"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 690 690"
                fill="white"
              >
                <path d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 525.3 515.9 505.1 504.6 491.5L361.7 320L504.6 148.5z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                fill="white"
              >
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
              </svg>
            )}
          </div>
        </nav>
      </motion.div>
    </header>
  );
}

export default Header;
