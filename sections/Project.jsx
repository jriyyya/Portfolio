"use client";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import ProjectComponent from "./ProjectComponent";
import { projectDetails } from "../constants";

const Project = () => (
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
      <TypingText title="| My Projects" size={32} textStyles="text-center"/>
      {/* <TitleText
        title={
          <>
            Choose the project you wish <br className="md:block hidden" />
            to explore
          </>
        }
        textStyles="text-center"
      /> */}
    </motion.div>
<div className="mt-12 gap-28 flex flex-col">

    {projectDetails.map((project, index) => (
      <div className="relative">
        <ProjectComponent key={project.id} {...project} index={index} />
        <div className="gradient-03 -z-10" />

      </div>
    ))}
</div>

    {/* <div className="relative">
    < ProjectComponent />
    <div className='gradient-03 -z-10' />
    < ProjectComponent />
    </div>
    <div className="relative">
    < ProjectComponent />
    <div className='gradient-04 -z-10' />
    < ProjectComponent />
    </div> */}
  </section>
);

export default Project;
