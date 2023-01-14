"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import Skill from "../components/Skill";
import { skillsIcon } from "../constants";
import "./Skills.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Skills = () => {
  const [skillsName, setSkillsName] = useState([
    "Python",
    1000,
    "Java",
    1000,
    "Google cloud platform",
    1000,
  ]);

  return (
    <section
      className={`${styles.paddings} relative z-10 flex flex-col justify-center items-center`}
    >
      <motion.div
        className={`${styles.innerWidth} mx-auto mb-16 ${styles.flexCenter} flex-col`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingText title="| My Skills" textStyles="text-center" />
      </motion.div>

      <div className={`skills-text ${styles.flexCenter} flex flex-col`}>
        <div
          className="parent-element"
        >
          {skillsIcon.map((icon) => (
            <div
              className="w-1/8 p-4 element transition ease-in-out duration-100 "
              onMouseEnter={() => setSkillsName([icon.name, 5000])}
            >
              <Skill key={icon.name} {...icon} />
            </div>
          ))}
        </div>
        <div
          id="text-box"
          className={`border p-[3px] ease-in duration-500 border-white w-[400px] rounded-lg bg-white mt-10 flex ${
            styles.flexCenter
          } cursor-pointer`}
        >
          <TypeAnimation
            sequence={skillsName}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1.5em" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
