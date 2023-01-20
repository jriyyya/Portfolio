'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import '../styles/Footer.css'
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative pointer-events-none`}
  >
    <div className="footer-gradient pointer-events-none" />
    <div className='pointer-events-none'>

      <div className="flex flex-col pointer-events-none">
        <div className="mb-[50px] h-[2px] bg-white opacity-10 pointer-events-none" />

        <div className="flex items-center justify-between flex-wrap gap-4 pointer-events-none">
          <h4 className="font-extrabold text-[24px] text-white">
            Socials 
          </h4>
          <p className="font-bold text-[20px] text-white">
            Made with <span id='heart' className='z-[9999]'> ❤️ </span>
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                onClick="window.open"
                className="w-[32px] h-[32px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;