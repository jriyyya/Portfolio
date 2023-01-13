"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import Skill from "../components/Skill";
import { skillsIcon } from "../constants";
import './Skills.css'

const Skills = () => (
  <section
    className={`${styles.paddings} relative z-10 flex flex-col justify-center items-center`}
  >
    <motion.div
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <TypingText title="| My Skills" textStyles="text-center" />
    </motion.div>
    <div className="parent-element">
            {skillsIcon.map((icon) => (
              <div className="w-1/8 p-4 element hover:scale-150 transition ease-in duration-100">
              <Skill
                key={icon.name}
                {...icon}
              />
              </div>
            ))}
          </div>
  </section>
);

export default Skills;
