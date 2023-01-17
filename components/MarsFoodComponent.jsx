"use client";
import { useEffect } from "react";
import "../styles/Project.css";

const MarsFoodComponent = () => {
    const parallaxFunction = (e) => {
        document.querySelectorAll(".parallax").forEach(function (move) {
          var moving_value = move.getAttribute("data-value");
          var x = (e.clientX * moving_value) / 100;
          var y = (e.clientY * moving_value) / 100;
          move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        });
        document.querySelectorAll("#monitor").forEach(function (move) {
          var moving_value = move.getAttribute("data-value");
          var x = (e.clientX * moving_value) / 100;
          move.style.transform = "translateX(" + x + "px)";
        });
      };
      useEffect(() => {
        document.addEventListener("mousemove", parallaxFunction);
      });
    return(
        
      <div className="relative basis-1/2 overflow-hidden">
        <img
          src="/monitorProject.png"
          alt="monitor"
          className="absolute left-8"
          id="monitor"
          data-value="2"
          style={{
            "--project-monitor": `url('/monitor-marsfood.png')`,
          }}
        />
        <img
          src="/circle.png"
          id="circle"
          alt="circle"
          className="absolute -z-[6] bottom-3 opacity-30 left-0 overflow-hidden "
        />
        <img
          src="/keyboard.png"
          id="keyboard"
          alt="keyboard"
          data-value="1.8"
          className="parallax absolute bottom-5 opacity-50 right-70 w-[50%]"
        />
        <img
          src="/phone.png"
          id="phone"
          alt="phone"
          data-value="0.6"
          className="parallax absolute bottom-40 opacity-50  w-[30%]"
          style={{
            "--project-phone": `url('/phone-marsfood.png')`,
          }}
        />
        </div>
 
)
}

export default MarsFoodComponent;
