"use client";
import { useEffect } from "react";
import "../styles/CyclingText.css";

const CyclingText = ({ cycle }) => {
    useEffect(()=>{
    const texts = document.querySelectorAll(".cycle-div span");
    for (let i = 0; i < texts.length; i++) {
      texts[i].style.setProperty("--anim-delay", `${i * 3 * 1000}ms`);
      texts[i].style.setProperty(
        "--anim-length",
        `${texts.length * 3 * 1000}ms`
      );}
    })
  return (
    <div className="cycle-div relative">
      {cycle.map((c) => (
        <span
          style={{
            "--anim-length": `${cycle.length * 3 * 1000}ms`,
            "--anim-delay": `${cycle.indexOf(c) * 3 * 1000}ms`,
          }}
        >
          {c}
        </span>
      ))}
    </div>
  );
};

export default CyclingText;
