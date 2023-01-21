"use client";
import { motion } from "framer-motion";
import { TypingText, StartSteps } from "../components";

import "../styles/Project.css";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import MarsFoodComponent from "../components/MarsFoodComponent";
import MarsDietComponent from "../components/MarsDietComponent"
import MarsManageComponent from "../components/MarsManageComponent"
import PortfolioComponent from "../components/PortfolioComponent";

const ProjectComponent = ({number, title, name, content, github, hosting_link,index }) => {
 
  return (
    <section className="project-card border-2 border-white rounded-xl w-[1000px] h-[600px] z-10 flex flex-row justify-between hover:cursor-pointer hover:bg-[#0000002a] transition ease-in duration-200 nav-section mobile:flex-col-reverse mobile:w-full" id={`Project${number}`}>
      <motion.div
        className="pt-6 pl-6 basis-[50%] flex flex-col justify-between h-full py-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div>
          <TypingText title={title} size={24} className="tracking-wide" />
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
          <a
            href={github}
            target="_blank"
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[12px] glassmorphism hover:cursor-pointer z-10 transition ease-in duration-200 hover:scale-110 hover:shadow-[rgba(255,_255,_255,_0.1)_1px_1px_15px_0px]`}
          >
            <img src="/github.webp" alt="headset" className="object-contain" />
          </a>
        </div>
      </motion.div>
    {index===0 && <PortfolioComponent />}
     {index===1 && <MarsDietComponent />}
     {index===2 && <MarsFoodComponent />} 
     {index===3 && <MarsManageComponent />}
    </section>
  );
};

export default ProjectComponent;
