"use client";
import KUTE from "kute.js";
import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import React, { useState, useEffect, useRef } from "react";



const Skill = ({ name, icon }) => {

  return (
    <section className={`flex ${styles.flexCenter} flex-col hover:cursor-pointer`}>
      <img src={icon} alt={name} className="object-cover w-16 h-16"/>
    </section>
  );
};

export default Skill;
