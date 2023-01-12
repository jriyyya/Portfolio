'use client';
import { motion } from "framer-motion";
import { TypingText } from "../components";


import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0"/>
    <motion.div variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
      <TypingText title="| About Me" textStyles="text-center" />
      <motion.p variants={fadeIn('up','tween',0.2,1)}
      className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
        I'm a sophomore at <span className="font-extrabold text-white">IIIT Gwalior</span> pursuing BTech in Information Technology 

I have my expertise in web development, especially with the <span className="font-extrabold text-white">MERN stack</span>.
Technologies I've worked with :
• Programming - Python, JavaScript, C/C++
• Web Development - HTML, CSS, JS, React, Next, Node, Express
• Game Development - GameMaker Studio, Godot Engine
• Database Management - MySQL, PostgresSQL, MongoDB
• Technologies - Firebase, Adobe Photoshop, Canva, Figma, Git, GitLab

I'm always ready to have new experiences, meet new people and work in the latest fast paced environments
      </motion.p>
      <motion.img variants={fadeIn('up','tween',0.3,1)}
      src="/arrow-down.svg" 
      alt="arrow down"
      className="w-[18px] h-[28px] object-contain mt-[28px]" />
    </motion.div>
  </section>
);

export default About;
