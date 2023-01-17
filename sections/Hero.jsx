"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import "../styles/Hero.css"
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import CyclingText from "../components/CyclingText";

const Hero = () => {
  return (
    <section
      className={`${styles.yPaddings} sm:pl-16 pl-6 h-screen flex flex-col justify-center`}
    >
      <div className="flex flex-row justify-center gap-14">
        <div className="name-words-container flex flex-row justify-center gap-1">
          {/* R Word  */}

          <div className="name-word-container relative">
            <div className="name-word aspect-square w-36 flex flex-row z-[1]">
              <div className="basis-1/2 border-2 border-white"></div>
              <div className="basis-1/2 flex flex-col">
                <div className="basis-1/2 border-2 border-white border-l-transparent rounded-tr-full"></div>{" "}
              </div>
            </div>
            <div className="absolute top-0 left-0 aspect-square w-36 flex flex-row">
              <div className="name-word-gradient name-word-gradient-back basis-1/2 border-2 border-white"></div>
              <div className="basis-1/2 flex flex-col">
                <div className="name-word-gradient name-word-gradient-front basis-1/2 border-2 border-white border-l-transparent rounded-tr-full"></div>{" "}
              </div>
            </div>
          </div>

          <div className="name-word-container relative">
            <div className="name-word h-36 w-20 flex flex-col z-[1]">
              <div className=" basis-full border-2 border-white"></div>
            </div>
            <div className="absolute top-0 left-0 name-word h-36 w-20 flex flex-col">
              <div className="name-word-gradient name-word-gradient-front basis-full border-2 border-white"></div>
            </div>
          </div>

          <div className="name-word-container relative">
            <div className="name-word aspect-square w-36 flex flex-row">
              <div className="basis-1/2 flex flex-col">
                <div className=" basis-1/2 border-2 border-white border-r-transparent rounded-bl-full"></div>{" "}
              </div>
              <div className="basis-1/2 flex flex-col">
                <div className="basis-full border-2 border-white rounded-br-full"></div>{" "}
              </div>
            </div>
            <div className="absolute top-0 left-0 name-word aspect-square w-36 flex flex-row">
              <div className="basis-1/2 flex flex-col">
                <div className="name-word-gradient name-word-gradient-front basis-1/2 border-2 border-white border-r-transparent rounded-bl-full"></div>{" "}
              </div>
              <div className="basis-1/2 flex flex-col">
                <div className="name-word-gradient name-word-gradient-back basis-full border-2 border-white rounded-br-full"></div>{" "}
              </div>
            </div>
          </div>

          <div className="name-word-container relative">
            <div className="name-word aspect-square w-36 flex relative">
              <div className="z-[1] border-2 basis-full border-white rounded-full"></div>
              <div className="absolute border-2 border-white w-1/2 h-full border-l-transparent right-0"></div>
            </div>
            <div className="absolute top-0 left-0 name-word aspect-square w-36 flex">
              <div className="name-word-gradient name-word-gradient-front z-[1] border-2 basis-full border-white rounded-full"></div>
              <div className="name-word-gradient name-word-gradient-back absolute border-2 border-white w-1/2 h-full border-l-transparent right-0"></div>
            </div>
          </div>
        </div>

        <div className="name-words-container flex flex-row justify-center gap-1">
          <div className="name-word-container relative">
            <div className="name-word aspect-square w-36 flex flex-row">
              <div className="basis-1/2 flex flex-col">
                <div className="basis-1/2"></div>
                <div className=" basis-1/2 border-2 border-white border-r-transparent rounded-bl-full"></div>{" "}
              </div>
              <div className="basis-1/2 flex flex-col">
                <div className="basis-full border-2 border-white rounded-br-full"></div>{" "}
              </div>
            </div>
            <div className="absolute top-0 left-0 name-word aspect-square w-36 flex flex-row">
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
            <div className="name-word aspect-square w-36 flex relative">
              <div className="z-[1] border-2 basis-full border-white rounded-full"></div>
              <div className="absolute border-2 border-white w-1/2 h-full border-l-transparent right-0"></div>
            </div>
            <div className="absolute top-0 left-0 name-word aspect-square w-36 flex">
              <div className="name-word-gradient name-word-gradient-front z-[1] border-2 basis-full border-white rounded-full"></div>
              <div className="name-word-gradient name-word-gradient-back absolute border-2 border-white w-1/2 h-full border-l-transparent right-0"></div>
            </div>
          </div>

          <div className="name-word-container relative">
            <div className="name-word h-36 w-20 flex flex-col z-[1]">
              <div className=" basis-full border-2 border-white"></div>
            </div>
            <div className="absolute top-0 left-0 name-word h-36 w-20 flex flex-col">
              <div className="name-word-gradient name-word-gradient-front basis-full border-2 border-white"></div>
            </div>
          </div>

          <div className="name-word-container relative">
            <div className="name-word aspect-square w-36 flex flex-row z-[1]">
              <div className="basis-1/2 flex flex-col">
                <div className="basis-full border-2 border-white border-r-transparent  border-b-transparent rounded-tl-full"></div>{" "}
              </div>
              <div className="basis-1/2 border-2 border-white"></div>
            </div>

            <div className="name-word absolute top-0 left-0 aspect-square w-36 flex flex-row">
              <div className="basis-1/2 flex flex-col">
                <div className="name-word-gradient name-word-gradient-front basis-full border-2 border-white border-r-transparent border-b-transparent rounded-tl-full"></div>{" "}
              </div>
              <div className="name-word-gradient name-word-gradient-back basis-1/2 border-2 border-white"></div>
            </div>
          </div>
        </div>
      </div>


      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}>
        
      <div className="text-white flex flex-col mt-20 font-bold text-5xl items-center w-[100%] relative">
        <motion.div  variants={textVariant(2)} className="flex flex-col items-start gap-4 font-bold">
          <div>I am a student at IIIT Gwalior</div>
          <div className="flex flex-row gap-4">and a  
            <CyclingText cycle={["Web Developer","Programmer","Blockchain enthusiast","Anime Lover"]}/>
          </div>
        </motion.div>
      </div>
      
      </motion.div>
    </section>
  );
};

export default Hero;
