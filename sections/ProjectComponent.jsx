"use client";
import { motion } from "framer-motion";
import { TypingText, StartSteps } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const ProjectComponent = ({title, name, content, github, hosting_link}) => (
  <section className="border-2 border-white rounded-xl w-[1000px] h-[600px] z-10 mt-32 flex flex-row justify-between hover:cursor-pointer hover:bg-[#0000002a] transition ease-in duration-200">
    <motion.div
      className="pt-6 pl-6 basis-[50%] flex flex-col justify-between h-full py-8"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
    >
      <div>
        <TypingText title={title} className="tracking-wide"/>
        <div className=" text-white font-bold lg:text-[60px] md:text-[40px] sm:text-[30px] text-[30px] mb-2 -mt-5">
          {name}
        </div>
        <div className="flex flex-col gap-[16px] ">
          {content.map((feature, index) => (
            <StartSteps key={feature} number={index + 1} text={feature} />
          ))}
        </div>
      </div>
      <div className="flex flex-row">
        <button 
          className="border font-medium text-[18px] transition ease-in duration-300 border-white px-2 rounded-lg text-white mr-4 hover:cursor-pointer z-10 hover:bg-white hover:text-black hover:scale-110
        hover:shadow-[rgba(255,_255,_255,_0.15)_0px_0px_20px_0px] hover:bg-opacity-80"
        >
          <a href={hosting_link} target="_blank">
            Launch Website
            </a>
        </button>
        <a href={github} target="_blank"
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[12px] glassmorphism hover:cursor-pointer z-10 transition ease-in duration-200 hover:scale-110 hover:shadow-[rgba(255,_255,_255,_0.1)_1px_1px_15px_0px]`}
        >
          <img src="/github.png" alt="headset" className="object-contain" />
        </a>
      </div>
    </motion.div>
    <div className="relative basis-1/2">
      <img src="/monitorProject.png" alt="monitor" className="absolute right-0"/>
      <img src="/circle.png" alt="circle" className="absolute -z-5 bottom-5 opacity-50 right-10 overflow-hidden " />
      <img src="/keyboard.png" alt="keyboard" className="absolute bottom-5 opacity-50 right-70 w-[50%]" />
      <img src="/phone.png" alt="phone" className="absolute bottom-44 opacity-50 right-100 w-[25%]"/>
    </div>
  </section>
);

export default ProjectComponent;
