"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import "../styles/Hero.css";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import CyclingText from "../components/CyclingText";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Hero = () => {
  useEffect(() => {
    const heroNameNav = document.querySelectorAll(
      ".hero-name .name-word-container"
    );

    const h = document.querySelector(".hero-name");

    heroNameNav.addClass = (cls) => {
      for (let element of heroNameNav) {
        element.classList.add(cls);
      }
    };
    heroNameNav.removeClass = (cls) => {
      for (let element of heroNameNav) {
        element.classList.remove(cls);
      }
    };

    const heroSection = document.querySelector(".hero-section");

    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".hero-name",
          pin: false,
          start: "top 10%",
          end: "top",
          scrub: 1,
          onUpdate(self) {
            if (self.direction === -1) {
              h.classList.remove("nav-stick");
              h.classList.remove("glassmorphism");
              // heroNameNav.removeClass("nav-stick");
              // heroNameNav.removeClass("glassmorphism");
              // heroSection.classList.remove("no-justify");
            }
          },
        },
        onComplete: () => {
          h.classList.add("nav-stick");
          h.classList.add("glassmorphism");
          // heroNameNav.addClass("nav-stick");
          // heroNameNav.addClass("glassmorphism");
          // heroSection.classList.add("no-justify");
        },
      })
      .addLabel("stick")
      .to(".name-word, .name-word-gradient", {
        width: "3rem",
        height: "3rem",
      })
      .to(".name-word-i", {
        width: "1.5rem",
        height: "3rem",
      });
  }, []);

  return (
    <section
      className={`hero-section h-screen flex flex-col justify-center mobile:h-max`}
    >
      <div className="h-28"></div>
      <div className=" hero-name">
        <div className="hero-name-inner flex flex-row justify-center gap-14 mobile:flex-col mobile:scale-50">
          <div className="name-words-container flex flex-row justify-center gap-1">
            {/* R Word  */}
            <a className="name-word-container relative" href="#Skills">
              <div className="name-word aspect-square w-36 flex flex-row z-[1]">
                <div className="basis-1/2 border-2 border-white"></div>
                <div className="basis-1/2 flex flex-col">
                  <div className="basis-1/2 border-2 border-white border-l-transparent rounded-tr-full"></div>{" "}
                </div>
              </div>
              <div className="name-word-gradient absolute top-0 left-0 aspect-square w-36 flex flex-row">
                <div className="name-word-gradient-back basis-1/2 border-2 border-white"></div>
                <div className="basis-1/2 flex flex-col">
                  <div className="name-word-gradient-front basis-1/2 border-2 border-white border-l-transparent rounded-tr-full"></div>{" "}
                </div>
              </div>
            </a>

            {/* i word */}
            <a className="name-word-container relative" href="#Project1">
              <div className="name-word-i name-word h-36 w-20 flex flex-col z-[1]">
                <div className=" basis-full border-2 border-white"></div>
              </div>
              <div className="name-word-i name-word-gradient absolute top-0 left-0 name-word h-36 w-20 flex flex-col">
                <div className=" name-word-gradient-front basis-full border-2 border-white"></div>
              </div>
            </a>

            {/* y word */}

            <a className="name-word-container relative" href="#Project2">
              <div className="name-word aspect-square w-36 flex flex-row">
                <div className="basis-1/2 flex flex-col">
                  <div className=" basis-1/2 border-2 border-white border-r-transparent rounded-bl-full"></div>{" "}
                </div>
                <div className="basis-1/2 flex flex-col">
                  <div className="basis-full border-2 border-white rounded-br-full"></div>{" "}
                </div>
              </div>
              <div className="name-word-gradient absolute top-0 left-0 name-word aspect-square w-36 flex flex-row">
                <div className="basis-1/2 flex flex-col">
                  <div className="name-word-gradient-front basis-1/2 border-2 border-white border-r-transparent rounded-bl-full"></div>{" "}
                </div>
                <div className="basis-1/2 flex flex-col">
                  <div className=" name-word-gradient-back basis-full border-2 border-white rounded-br-full"></div>{" "}
                </div>
              </div>
            </a>

            {/* a word  */}

            <a className="name-word-container relative" href="#Project3">
              <div className="name-word aspect-square w-36 flex relative">
                <div className="z-[1] border-2 basis-full border-white rounded-full"></div>
                <div className="absolute border-2 border-white w-1/2 h-full border-l-transparent right-0"></div>
              </div>
              <div className="name-word-gradient absolute top-0 left-0 name-word aspect-square w-36 flex">
                <div className="name-word-gradient-front z-[1] border-2 basis-full border-white rounded-full"></div>
                <div className=" name-word-gradient-back absolute border-2 border-white w-1/2 h-full border-l-transparent right-0"></div>
              </div>
            </a>
          </div>

          {/* Jain word */}
          <div className="name-words-container flex flex-row justify-center gap-1">
            {/* j word  */}
            <a className="name-word-container relative" href="#Project4">
              <div className="name-word aspect-square w-36 flex flex-row">
                <div className="basis-1/2 flex flex-col">
                  <div className="basis-1/2"></div>
                  <div className=" basis-1/2 border-2 border-white border-r-transparent rounded-bl-full"></div>{" "}
                </div>
                <div className="basis-1/2 flex flex-col">
                  <div className="basis-full border-2 border-white rounded-br-full"></div>{" "}
                </div>
              </div>
              <div className="name-word-gradient absolute top-0 left-0 name-word aspect-square w-36 flex flex-row">
                <div className="basis-1/2 flex flex-col">
                  <div className="basis-1/2"></div>
                  <div className="name-word-gradient-front basis-1/2 border-2 border-white border-r-transparent rounded-bl-full"></div>{" "}
                </div>
                <div className="basis-1/2 flex flex-col">
                  <div className=" name-word-gradient-back basis-full border-2 border-white rounded-br-full"></div>{" "}
                </div>
              </div>
            </a>

            {/* a word  */}
            <a className="name-word-container relative" href="#GetWorkDone">
              <div className="name-word aspect-square w-36 flex relative">
                <div className="z-[1] border-2 basis-full border-white rounded-full"></div>
                <div className="absolute border-2 border-white w-1/2 h-full border-l-transparent right-0"></div>
              </div>
              <div className="name-word-gradient absolute top-0 left-0 name-word aspect-square w-36 flex">
                <div className="name-word-gradient-front z-[1] border-2 basis-full border-white rounded-full"></div>
                <div className="name-word-gradient-back absolute border-2 border-white w-1/2 h-full border-l-transparent right-0"></div>
              </div>
            </a>

            {/* i word */}
            <a className="name-word-container relative" href="#Location">
              <div className="name-word-i name-word h-36 w-20 flex flex-col z-[1]">
                <div className=" basis-full border-2 border-white"></div>
              </div>
              <div className="name-word-i name-word-gradient absolute top-0 left-0 name-word h-36 w-20 flex flex-col">
                <div className="name-word-gradient-front basis-full border-2 border-white"></div>
              </div>
            </a>

            {/* n word  */}
            <a className="name-word-container relative" href="#Feedback">
              <div className="name-word aspect-square w-36 flex flex-row z-[1]">
                <div className="basis-1/2 flex flex-col">
                  <div className="basis-full border-2 border-white border-r-transparent  border-b-transparent rounded-tl-full"></div>{" "}
                </div>
                <div className="basis-1/2 border-2 border-white"></div>
              </div>
              <div className="name-word-gradient absolute top-0 left-0 aspect-square w-36 flex flex-row">
                <div className="basis-1/2 flex flex-col">
                  <div className=" name-word-gradient-front basis-full border-2 border-white border-r-transparent border-b-transparent rounded-tl-full"></div>{" "}
                </div>
                <div className="name-word-gradient-back basis-1/2 border-2 border-white"></div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="text-white flex flex-col mt-20 font-bold text-5xl items-center w-[100%] relative mobile:text-3xl">
          <motion.div
            variants={textVariant(2)}
            className="flex flex-col items-start gap-4 font-bold"
          >
            <div>I am a student at IIIT Gwalior</div>
            <div className="flex flex-row gap-4">
              and a
              <CyclingText
                cycle={[
                  "Anime Lover",
                  "Music addict",
                  "Web Developer",
                  "Programmer",
                  "Blockchain enthusiast",
                  "Cat person",
                ]}
              />
            </div>
          </motion.div>
          <motion.div
            variants={textVariant(2.5)}
            className="flex justify-center mt-10"
          >
            <Link
              target={`_newABC`}
              href={"/Riya_Jain_IIIT_25.pdf"}
              className="text-white flex flex-row font-extra bold border-4 rounded-3xl items-center text-3xl px-5 py-4 mobile:text-xl mobile:p-3 mobile:mb-16"
            >
              Resume <img src="/download.webp" alt="download" className="invert w-[2ch] ml-2"/>
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={textVariant(3)}
          className="mt-5 text-white flex justify-center"
        >
          <img src="/scrolldown.gif" alt="scroll" className="invert w-16 mobile:hidden" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
