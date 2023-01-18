"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, zoomIn, fadeIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings} nav-section`} id="Feedback">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="basis-2/3 gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        {/* <div className="feedback-gradient" /> */}
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
            Riya Jain
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
            Expected Graduation - 2025
          </p>
          <div className="mt-[24px] font-normal sm:text-[24px] sm:leading-[45px] leading-[39px] text-white">
            I'm a sophomore at <span className="font-extrabold">IIIT Gwalior</span> pursuing BTech in Information
            Technology I have my expertise in web development, especially with
            the MERN stack. Technologies I've worked with : 
            <br />• Programming -
            Python, JavaScript, C/C++ 
            <br />
            • Web Development - HTML, CSS, JS, React,
            Vue, Next, Node, Express 
            <br />
            • Game Development - GameMaker Studio,
            Godot Engine 
            <br/>
            • Database Management - MySQL, PostgresSQL, MongoDB 
            <br/>
            • Technologies - Firebase, Adobe Photoshop, Canva, Figma, Git, GitLab
            <br/>
            I'm always ready to have new experiences, meet new people and work
            in the latest fast paced environments.
          </div>
        </div>
      </motion.div>


      <div className="flex flex-col gap-4">
        
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="gradient-05 border rounded-[32px] relative p-6"
      >
        <form>
        <h4 className="font-bold text-[26px] text-white">
            FeedBack
          </h4>
          <h4 className="text-[20px] text-white mt-4">
            Email
          </h4>
          <input className="rounded" type="email"/>

          <h4 className="text-[20px] text-white mt-8">
            Your/Your Organization Name
          </h4>
          <input className="rounded" type="text"/>

          <h4 className="text-[20px] text-white mt-8">
            Feedback
          </h4>
          <textarea className="rounded"/>


        </form>
      </motion.div>

      <div className="basis-1/3">
        <img src="/cat.webp" alt="cat" className="rounded-[32px]" />
      </div>
      
      </div>


    </motion.div>
  </section>
);

export default Feedback;
