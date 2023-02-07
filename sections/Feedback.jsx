"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, zoomIn, fadeIn } from "../utils/motion";

const Feedback = () => (
  <section
    className={` relative px-40 py-10 nav-section mobile:px-4 mobile:mt-20 mobile:mb-0`}
    id="Feedback"
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-row gap-6 mobile:flex-col`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex align-middle justify-center flex-col basis-3/5  gradient-05 px-10 rounded-[32px] border-[1px] border-[#6a6a6a] relative py-4"
      >
        {/* <div className="feedback-gradient" /> */}
        <h4 className="font-bold text-[26px]   text-white">Riya Jain</h4>
        <p className=" text-[20px]  text-white">Graduation Year - 2025</p>
        <div className="mt-[24px] font-normal text-[20px] sm:leading-[45px]  text-white">
          I'm a sophomore at{" "}
          <span className="font-extrabold">IIIT Gwalior</span> pursuing BTech in
          Information Technology. I have my expertise in web development,
          especially with the MERN stack.
          <br />
          Technologies I've worked with:
          <br />• Programming - Python, JavaScript, C/C++
          <br />
          • Web Development - HTML, CSS, JS, React, Vue, Next, Nuxt, Node,
          Express
          <br />
          • Game Development - GameMaker Studio, Godot Engine
          <br />
          • Database Management - MySQL, PostgresSQL, MongoDB
          <br />
          • Technologies - Firebase, Adobe Photoshop, Canva, Figma, Git, GitLab
          <br />
          <br />
          I'm always ready to have new experiences, meet new people and work in
          the latest fast paced environments.
        </div>
      </motion.div>

      <div className="basis-2/5 flex flex-col gap-4">
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="gradient-05 border rounded-[32px] relative p-6"
        >
          <form action="https://formspree.io/f/mvongdvb" method="POST">
            <div className="flex flex-row justify-between">
              <h4 className="font-bold text-[26px] text-white">
                Let's get in touch
              </h4>
              <button className="bg-[#92b8f4ae] font-extrabold text-white rounded-lg px-4 hover:scale-110 transition ease-in-out">
                Send
              </button>
            </div>
            <h4 className="text-[20px] text-white mt-2">Email</h4>
            <input className="rounded w-full p-1" name="email" type="email" />

            <h4 className="text-[20px] text-white mt-4">
              Your/Your Organization Name
            </h4>
            <input className="rounded w-full p-1" name="name" type="text" />

            <h4 className="text-[20px] text-white mt-4">Any message</h4>
            <textarea className="w-full rounded p-1" name="message" />
          </form>
        </motion.div>

        <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
          <img src="/cat.webp" alt="cat" className="rounded-[32px]" />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Feedback;
