"use client";

import { useEffect } from "react";

const PortfolioComponent = () => {
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      const dy = window.innerHeight / 2 - event.clientY;
      const dx = window.innerWidth / 2 + window.innerWidth / 4 - event.clientX;
      const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
      const sc = `${10 + 19 * (40 / (d > 200 ? d : 200))}rem`;
      document.querySelector(".gradient-spandan").style.width = sc;
      document.querySelector(".gradient-spandan").style.height = sc;
    });
  }, []);

  return (
    <div className="relative basis-1/2 flex justify-center items-center overflow-hidden mobile:hidden">
      <div className="gradient-spandan absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-[2] aspect-square bg-[linear-gradient(pink,cyan,transparent,pink,blue,violet)] blur-3xl"></div>
      <div className="text-white text-[13rem] font-black z-[3] font-sans" style={{letterSpacing:'-1.6rem'}}>
        RJ
      </div>
    </div>
  );
};

export default PortfolioComponent;
