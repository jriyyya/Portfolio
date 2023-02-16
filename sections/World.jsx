'use client';
import { motion } from "framer-motion";
import styles from '../styles';
import { staggerContainer,fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`mx-36 my-28 relative z-10 nav-section mobile:mx-2 mobile:mb-10 mobile:mt-20`} id="Location">
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once:'false', amount:0.25}} className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <TypingText title="| My Location" size={32} textStyles="text-center" />
        <TitleText title={(<p className="text-centers">There I am, in India </p>)} textStyles="text-center">
        </TitleText>
      <motion.div variants={fadeIn('up','tween',0.3,1)}
      className="relative mt-[68px] flex w-full h-[500px] mobile:my-0 mobile:h-max">
        <img src="map.png" alt="map" className="w-full h-full object-contain mobile:mt-10" />
      </motion.div>
    </motion.div>
  </section> 
);

export default World;
