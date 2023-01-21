"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import Skill from "../components/Skill";
import { skillsIcon } from "../constants";
import "../styles/Skills.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Skills = () => {
  const [currSkill, setCurrSkill] = useState("");

  return (
    <section
      className={`relative z-10 flex flex-col justify-center items-center nav-section mobile:w-screen`} id="Skills"
    >
      <motion.div
        className={`${styles.innerWidth} mx-auto mb-16 ${styles.flexCenter} flex-col`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingText title="| My Skills" size={32} textStyles="text-center" />
      </motion.div>

      <div className={`skills-text ${styles.flexCenter} flex flex-col`}>
        <div className="parent-element flex flex-row flex-wrap w-[70vw] justify-center mobile:w-full">
          {skillsIcon.map((icon) => (
            <div key={icon.name} 
              className="w-1/8 p-4 element transition ease-in-out duration-100 "
              onMouseEnter={() => {
                setCurrSkill(icon.name);
              }}
            >
              <Skill {...icon} />
            </div>
          ))}
        </div>
        <div className="relative">
          <div
            id="text-box"
            className={` text-white border top-0 left-0 p-[3px] glassmorphism  w-[400px] rounded-lg mt-10 flex ${styles.flexCenter} cursor-pointer mobile:w-[90vw]`}
          >
            <TypeAnimation
              sequence={[
                "Javascript",
                1000,
                "React",
                1000,
                "Express Js",
                1000,
                "Rest APIs",
                1000,
                "MongoDB",
                1000,
                "Node Js",
                1000,
                "Google cloud platform",
                1000,
                "Python",
                1000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1.5em" }}
            />
          </div>
          <div
            id="text-box-hover"
            className={`border  top-0 left-0 p-[3px] w-[400px] rounded-lg glassmorphism text-white bg-white mt-10 cursor-pointer`}
          >
            <h3 className=" mx-auto text-[1.5em]">{currSkill}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
