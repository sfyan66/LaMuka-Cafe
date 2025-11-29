import { useState, useEffect } from "react";
import user01 from ".././assets/avatars/user-01.jpg";
import user02 from ".././assets/avatars/user-02.jpg";
import user03 from ".././assets/avatars/user-03.jpg";
import user04 from ".././assets/avatars/user-04.jpg";
import user05 from ".././assets/avatars/user-05.jpg";
import user06 from ".././assets/avatars/user-06.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { Element } from "react-scroll";

const Clinets = () => {
  const client = [
    {
      img: user01,
      name: "Joun Raffry",
      city: "New York City",
    },
    {
      img: user02,
      name: "Andrew Carinal",
      city: "Berlin Germani",
    },
    {
      img: user03,
      name: "Ben Morgan",
      city: "Paris France",
    },
    {
      img: user04,
      name: "aliem Clinton",
      city: "New York City",
    },
    {
      img: user05,
      name: "Bin Morgan",
      city: "Berlin Germani",
    },
    {
      img: user06,
      name: "Andreo Carinal",
      city: "Paris France",
    },
  ];

  const [clients, setClients] = useState(client.slice(0, 3));
  const [size, setSize] = useState(false);
  const [active, setActive] = useState(1);
  useEffect(() => {
    const getWidth = () => {
      if (window.innerWidth > 768) {
        setSize(false);
      } else setSize(true);
    };
    window.addEventListener("resize", getWidth);
    getWidth();
    return () => window.removeEventListener("resize", getWidth);
  }, []);
  useEffect(() => {
    if (size) {
      setClients([client[0]]);
    } else setClients(client.slice(0, 3));
  }, [size]);
  const showCli = (btnnumber) => {
    if (size) {
      setClients([client[btnnumber]]);
    } else {
      if (btnnumber === 0) {
        setClients(client.slice(0, 3));
      } else setClients(client.slice(-3));
    }
    setActive(btnnumber);
  };
  return (
    <Element
      name="Clients"
      className="m-auto md:max-w-7xl max-w-5xl py-[90px] md:py-[180px]"
    >
      <h1 className="text-[7vw] md:text-[min(4vw,70px)] text-white text-center pb-[70px] sm:pb-[120px]">
        What Our Clients Say
      </h1>
      <div className="md:flex gap-[50px]">
        <AnimatePresence mode="wait">
          {clients.map((cli) => {
            return (
              <motion.div
                key={cli.name}
                className="w-full max-w-[390px] mx-auto md:mx-0 md:w-[33%] text-center md:text-start"
                layout
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex lg:gap-[30px] md:gap-[20px] gap-[30px] items-center pb-[30px] sm:pb-[50px] justify-center md:justify-start -ml-8 md:ml-0">
                  <img
                    src={cli.img}
                    alt=""
                    className="size-[80px] md:size-[min(8vw,100px)] rounded-full p-[8px] bg-[#1c1e1d]"
                  />
                  <div>
                    <h4 className="text-white md:text-[min(2vw,28px)] text-2xl">
                      {cli.name}
                    </h4>
                    <h5 className="text-[var(--text-main-c)] text-xl md:text-[min(1.8vw,22px)]">
                      {cli.city}
                    </h5>
                  </div>
                </div>
                <p className="text-[var(--text-third-c)] text-xl md:text-[min(1.8vw,22px)]">
                  ipsum dolor sit amet consectetur adipisicing elit. Non illum
                  dolorem nobis! Repellat ipsam, quisquam quis quos sed Lorem
                  quam, vel optio placeat error ducimus doloremque?
                </p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="flex gap-[20px] mt-[100px] justify-center">
        <ul className="flex gap-5">
          {(size ? [0, 1, 2, 3, 4, 5] : [0, 1]).map((btn) => (
            <li key={btn}>
              <button
                className={`btnCli ${
                  active === btn ? "bg-white" : "bg-[#5f6362]"
                }`}
                onClick={() => {
                  setActive(btn);
                  showCli(btn);
                }}
              ></button>
            </li>
          ))}
        </ul>
        {/* <button
          onClick={showCli1}
          style={{ backgroundColor: active === 1 ? "white" : "#5f6362" }}
          className="btnCli"
        ></button>
        <button
          onClick={showCli2}
          style={{ backgroundColor: active === 2 ? "white" : "#5f6362" }}
          className="btnCli"
        ></button>
        <button
          onClick={showCli3}
          style={{
            backgroundColor: active === 3 ? "white" : "#5f6362",
            display: size ? "none" : "block",
          }}
          className="btnCli"
        ></button> */}
      </div>
    </Element>
  );
};

export default Clinets;
