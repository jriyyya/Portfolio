"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn, slideIn, monitorFramer } from "../utils/motion";
import { StartSteps, TitleText, TypingText } from "../components";
import { startingFeatures } from "../constants";
import { useEffect } from "react";

const GetStarted = () => {
  const parallaxFunction = (e) =>{
    document.querySelectorAll("#parallax").forEach(function(move){
      var moving_value = move.getAttribute("data-value");
      var x = (e.clientX * moving_value)/100;
      var y = (e.clientY * moving_value)/100;
    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)" 
    })
  }
   useEffect(()=>{
    document.addEventListener("mousemove",parallaxFunction)
   })

  return (

  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-col flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className={`flex ${styles.flexCenter}`}
      >
        {" "}
        <TypingText title="| How i can help you" />
      </motion.div>

      <div className="flex flex-row justify-between">
        <motion.div className="basis-1/2" variants={fadeIn('right','tween',0.2,1)}>
          <TitleText title={<>Get your work done with just a few clicks</>} />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>

        <div className="basis-1/2 flex justify-end relative">
        <motion.img variants={monitorFramer('tween',0.4,1.5,'130%')} className={`object-cover`}  src='/monitor.png' alt='monitor' />
        <motion.img variants={monitorFramer('tween',0.6,1.5,"600%")} className={` object-cover absolute bottom-10 left-40`}  src='/block.png' alt='block' data-value="1" id="parallax"/>
        <motion.img variants={monitorFramer('tween',0.7,1.5,"500%")} className=" object-cover absolute top-10 right-20"  src='/smallBlock.png' alt='SmallBlock' data-value="1" id="parallax"/>

          </div>
      </div>
    </motion.div>
  </section>
);
            }
export default GetStarted;
