"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import "./Hero.css";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6 h-screen`}>
      <div className="flex flex-row justify-center gap-14 my-name">
        <div className="name-words-container flex flex-row justify-center gap-1">
          <div className="name-word-container relative">
            <div className="name-word aspect-square w-28 flex flex-row z-[1]">
              <div className="basis-1/2 border-2 border-white"></div>
              <div className="basis-1/2 flex flex-col">
                <div className="basis-1/2 border-2 border-white border-l-transparent rounded-tr-full"></div>{" "}
              </div>
            </div>
            <div className="absolute top-0 left-0 aspect-square w-28 h-28 flex flex-row">
              <div className="name-word-gradient name-word-gradient-back basis-1/2 border-2 border-white"></div>
              <div className="basis-1/2 flex flex-col">
                <div className="name-word-gradient name-word-gradient-front basis-1/2 border-2 border-white border-l-transparent rounded-tr-full"></div>{" "}
              </div>
            </div>
          </div>

          <div className="name-word-container relative">
            <div className="name-word h-28 w-14 flex flex-col z-[1]">
              <div className=" basis-full border-2 border-white"></div>
            </div>
            <div className="absolute top-0 left-0 name-word h-28 w-14 flex flex-col">
              <div className="name-word-gradient name-word-gradient-front basis-full border-2 border-white"></div>
            </div>
          </div>

          <div className="name-word-container relative">
            <div className="name-word aspect-square w-28 flex flex-row">
              <div className="basis-1/2 flex flex-col">
                <div className=" basis-1/2 border-2 border-white border-r-transparent rounded-bl-full"></div>{" "}
              </div>
              <div className="basis-1/2 flex flex-col">
                <div className="basis-full border-2 border-white rounded-br-full"></div>{" "}
              </div>
            </div>
            <div className="absolute top-0 left-0 name-word aspect-square w-28 flex flex-row">
              <div className="basis-1/2 flex flex-col">
                <div className="name-word-gradient name-word-gradient-front basis-1/2 border-2 border-white border-r-transparent rounded-bl-full"></div>{" "}
              </div>
              <div className="basis-1/2 flex flex-col">
                <div className="name-word-gradient name-word-gradient-back basis-full border-2 border-white rounded-br-full"></div>{" "}
              </div>
            </div>
          </div>

          <div className="name-word-container relative">
            <div className="name-word aspect-square w-28 flex relative">
              <div className="z-[1] border-2 basis-full border-white rounded-full"></div>
              <div className="absolute border-2 border-white w-1/2 h-full border-l-transparent right-0"></div>
            </div>
            <div className="absolute top-0 left-0 name-word aspect-square w-28 flex">
              <div className="name-word-gradient name-word-gradient-front z-[1] border-2 basis-full border-white rounded-full"></div>
              <div className="name-word-gradient name-word-gradient-back absolute border-2 border-white w-1/2 h-full border-l-transparent right-0"></div>
            </div>
          </div>
        </div>

        <div className="name-words-container flex flex-row justify-center gap-1">
          <div className="name-word-container relative">
            <div className="name-word aspect-square w-28 flex flex-row">
              <div className="basis-1/2 flex flex-col">
                <div className="basis-1/2"></div>
                <div className=" basis-1/2 border-2 border-white border-r-transparent rounded-bl-full"></div>{" "}
              </div>
              <div className="basis-1/2 flex flex-col">
                <div className="basis-full border-2 border-white rounded-br-full"></div>{" "}
              </div>
            </div>
            <div className="absolute top-0 left-0 name-word aspect-square w-28 flex flex-row">
              <div className="basis-1/2 flex flex-col">
                <div className="basis-1/2"></div>
                <div className="name-word-gradient name-word-gradient-front basis-1/2 border-2 border-white border-r-transparent rounded-bl-full"></div>{" "}
              </div>
              <div className="basis-1/2 flex flex-col">
                <div className="name-word-gradient name-word-gradient-back basis-full border-2 border-white rounded-br-full"></div>{" "}
              </div>
            </div>
          </div>

          <div className="name-word-container relative">
            <div className="name-word aspect-square w-28 flex relative">
              <div className="z-[1] border-2 basis-full border-white rounded-full"></div>
              <div className="absolute border-2 border-white w-1/2 h-full border-l-transparent right-0"></div>
            </div>
            <div className="absolute top-0 left-0 name-word aspect-square w-28 flex">
              <div className="name-word-gradient name-word-gradient-front z-[1] border-2 basis-full border-white rounded-full"></div>
              <div className="name-word-gradient name-word-gradient-back absolute border-2 border-white w-1/2 h-full border-l-transparent right-0"></div>
            </div>
          </div>

          <div className="name-word-container relative">
            <div className="name-word h-28 w-14 flex flex-col z-[1]">
              <div className=" basis-full border-2 border-white"></div>
            </div>
            <div className="absolute top-0 left-0 name-word h-28 w-14 flex flex-col">
              <div className="name-word-gradient name-word-gradient-front basis-full border-2 border-white"></div>
            </div>
          </div>

          <div className="name-word-container relative">
            <div className="name-word aspect-square w-28 flex flex-row z-[1]">

              <div className="basis-1/2 flex flex-col">
                <div className="basis-full border-2 border-white border-r-transparent  border-b-transparent rounded-tl-full"></div>{" "}
              </div>
              <div className="basis-1/2 border-2 border-white"></div>
            </div>

            <div className="name-word absolute top-0 left-0 aspect-square w-28 h-28 flex flex-row">

              <div className="basis-1/2 flex flex-col">
                <div className="name-word-gradient name-word-gradient-front basis-full border-2 border-white border-r-transparent border-b-transparent rounded-tl-full"></div>{" "}
              </div>
              <div className="name-word-gradient name-word-gradient-back basis-1/2 border-2 border-white"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Riya 
        </motion.h1>
        <motion.div variants={textVariant(1.2)}
        className="flex flex-row justify-center items-center">
          <h1 className={ styles.heroHeading}>JA</h1>
          <h1 className={styles.heroAText}>i</h1>
          <h1 className={ styles.heroHeading}>N</h1>
        </motion.div>
      </div>

      <motion.div variants={slideIn('right','tween',0.2,1)}
      className="relative w-full md:-mt-[20px] -mt-[12px]">
          <img src="/cover.jpg" alt="cover" className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative -top-[30px]"/>
          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <img
              src="/stamp.png" alt="stamp" 
              className={`sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain`} />
            </div>
          </a>
      </motion.div>
    </motion.div> */}
    </section>
  );
};

export default Hero;
