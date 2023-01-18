'use client';
import { motion } from "framer-motion";
import styles from '../styles';
import { staggerContainer,fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10 nav-section`} id="Location">
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once:'false', amount:0.25}} className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <TypingText title="| My Location" size={32} textStyles="text-center" />
        <TitleText title={(<>There I am, in India </>)} textStyles="text-center">
        </TitleText>
      <motion.div variants={fadeIn('up','tween',0.3,1)}
      className="relative mt-[68px] flex w-full h-[500px]">
        <img src="map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute right-[35%] bottom-[51%] w-[70px]h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full"/>
        </div>
      </motion.div>
    </motion.div>
  </section> 
);

export default World;
