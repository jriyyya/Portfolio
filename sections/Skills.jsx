"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import Skill from "../components/Skill";
import { skillsIcon } from "../constants";

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
    <div className="p-2 grid grid-cols-8 gap-4 mt-8 border border-white h-[auto] w-[100%]">
    <div className="flex gap-4">
            {skillsIcon.map((icon) => (
              <Skill
                key={icon.name}
                {...icon}
              />
            ))}
          </div>
    </div>
  </section>
);

export default Skills;
