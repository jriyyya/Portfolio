"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { useEffect, useState } from "react";



const Navbar = () => {

  const [activeItem, setActiveItem] = useState('');

  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.nav-section');
      const navbarItems = document.querySelectorAll('.nav-name-word-container');

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        if (sectionTop <=  window.innerHeight/2  && sectionBottom > 0) {
          navbarItems.forEach((item) => {
            item.classList.remove('active');
            if (item.getAttribute('data-link') === section.id) {
              item.classList.add('active');
              setActiveItem(section.id);
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  
  return (
    <nav className={`fixed w-full py-4 glassmorphism border-none top-0 z-50`}>
      <div className="flex flex-row justify-center gap-14">
        <div className="name-words-container flex flex-row justify-center align-middle gap-1">

          {/* R Word  */}

          <a className={`nav-name-word-container relative ${activeItem === 'nav-1' ? 'active' : ''}` } href="#nav-1" data-link="nav-1">
            <div className="name-word aspect-square w-12 flex flex-row z-[1]">
              <div className="basis-1/2 border-2 border-white"></div>
              <div className="basis-1/2 flex flex-col">
                <div className="basis-1/2 border-2 border-white border-l-transparent rounded-tr-full"></div>{" "}
              </div>
            </div>
            <div className="absolute top-0 left-0 aspect-square w-12 flex flex-row">
              <div className="name-word-gradient name-word-gradient-back basis-1/2 border-2 border-white"></div>
              <div className="basis-1/2 flex flex-col">
                <div className="name-word-gradient name-word-gradient-front basis-1/2 border-2 border-white border-l-transparent rounded-tr-full"></div>{" "}
              </div>
            </div>
          </a>

          {/* I WORD */}

          <a className={`nav-name-word-container relative ${activeItem === 'nav-2' ? 'active' : ''}` } href="#nav-2" data-link="nav-2">
            <div className="name-word h-12 w-6 flex flex-col z-[1]">
              <div className=" basis-full border-2 border-white"></div>
            </div>
            <div className="absolute top-0 left-0 name-word h-12 w-6 flex flex-col">
              <div className="name-word-gradient name-word-gradient-front basis-full border-2 border-white"></div>
            </div>
          </a>

          {/* Y WORD */}
          
          <div className={`nav-name-word-container relative ${activeItem === 'nav-3' ? 'active' : ''}` } data-link="nav-3">
            <div className="name-word aspect-square w-12 flex flex-row">
              <div className="basis-1/2 flex flex-col">
                <div className=" basis-1/2 border-2 border-white border-r-transparent rounded-bl-full"></div>{" "}
              </div>
              <div className="basis-1/2 flex flex-col">
                <div className="basis-full border-2 border-white rounded-br-full"></div>{" "}
              </div>
            </div>
            <div className="absolute top-0 left-0 name-word aspect-square w-12 flex flex-row">
              <div className="basis-1/2 flex flex-col">
                <div className="name-word-gradient name-word-gradient-front basis-1/2 border-2 border-white border-r-transparent rounded-bl-full"></div>{" "}
              </div>
              <div className="basis-1/2 flex flex-col">
                <div className="name-word-gradient name-word-gradient-back basis-full border-2 border-white rounded-br-full"></div>{" "}
              </div>
            </div>
          </div>

          {/* A WORD */}


          <div className={`nav-name-word-container relative ${activeItem === 'nav-4' ? 'active' : ''}` } data-link="nav-4">
            <div className="name-word aspect-square w-12 flex relative">
              <div className="z-[1] border-2 basis-full border-white rounded-full"></div>
              <div className="absolute border-2 border-white w-1/2 h-full border-l-transparent right-0"></div>
            </div>
            <div className="absolute top-0 left-0 name-word aspect-square w-12 flex">
              <div className="name-word-gradient name-word-gradient-front z-[1] border-2 basis-full border-white rounded-full"></div>
              <div className="name-word-gradient name-word-gradient-back absolute border-2 border-white w-1/2 h-full border-l-transparent right-0"></div>
            </div>
          </div>
        </div>

{/* JAIN WORD */}
        <div className="name-words-container flex flex-row justify-center gap-1">
          
        {/* J WORD */}
        <div className={`nav-name-word-container relative ${activeItem === 'nav-5' ? 'active' : ''}` } data-link="nav-5">
            <div className="name-word aspect-square w-12 flex flex-row">
              <div className="basis-1/2 flex flex-col">
                <div className="basis-1/2"></div>
                <div className=" basis-1/2 border-2 border-white border-r-transparent rounded-bl-full"></div>{" "}
              </div>
              <div className="basis-1/2 flex flex-col">
                <div className="basis-full border-2 border-white rounded-br-full"></div>{" "}
              </div>
            </div>
            <div className="absolute top-0 left-0 name-word aspect-square w-12 flex flex-row">
              <div className="basis-1/2 flex flex-col">
                <div className="basis-1/2"></div>
                <div className="name-word-gradient name-word-gradient-front basis-1/2 border-2 border-white border-r-transparent rounded-bl-full"></div>{" "}
              </div>
              <div className="basis-1/2 flex flex-col">
                <div className="name-word-gradient name-word-gradient-back basis-full border-2 border-white rounded-br-full"></div>{" "}
              </div>
            </div>
          </div>

          {/* A WORD */}
          
          <a className={`nav-name-word-container relative ${activeItem === 'nav-6' ? 'active' : ''}` } data-link="nav-6" href="#nav-6" >
            <div className="name-word aspect-square w-12 flex relative">
              <div className="z-[1] border-2 basis-full border-white rounded-full"></div>
              <div className="absolute border-2 border-white w-1/2 h-full border-l-transparent right-0"></div>
            </div>
            <div className="absolute top-0 left-0 name-word aspect-square w-12 flex">
              <div className="name-word-gradient name-word-gradient-front z-[1] border-2 basis-full border-white rounded-full"></div>
              <div className="name-word-gradient name-word-gradient-back absolute border-2 border-white w-1/2 h-full border-l-transparent right-0"></div>
            </div>
          </a>

          {/* I WORD  */}
          
          <a className={`nav-name-word-container relative ${activeItem === 'nav-7' ? 'active' : ''}` } data-link="nav-7" href="#nav-7" >
            <div className="name-word h-12 w-6 flex flex-col z-[1]">
              <div className=" basis-full border-2 border-white"></div>
            </div>
            <div className="absolute top-0 left-0 name-word h-12 w-6 flex flex-col">
              <div className="name-word-gradient name-word-gradient-front basis-full border-2 border-white"></div>
            </div>
          </a>

          {/* N WORD */}
          
          <a className={`nav-name-word-container relative ${activeItem === 'nav-8' ? 'active' : ''}` } data-link="nav-8" href="#nav-8" >
            <div className="name-word aspect-square w-12 flex flex-row z-[1]">
              <div className="basis-1/2 flex flex-col">
                <div className="basis-full border-2 border-white border-r-transparent  border-b-transparent rounded-tl-full"></div>{" "}
              </div>
              <div className="basis-1/2 border-2 border-white"></div>
            </div>
            <div className="name-word absolute top-0 left-0 aspect-square w-12 flex flex-row">
              <div className="basis-1/2 flex flex-col">
                <div className="name-word-gradient name-word-gradient-front basis-full border-2 border-white border-r-transparent border-b-transparent rounded-tl-full"></div>{" "}
              </div>
              <div className="name-word-gradient name-word-gradient-back basis-1/2 border-2 border-white"></div>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
