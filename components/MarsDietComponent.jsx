"use client";
import { useEffect } from "react";
import "../styles/Project.css";

const MarsFoodComponent = () => {
    const parallaxFunction = (e) => {
        document.querySelectorAll(".laptop").forEach(function (move) {
          var moving_value = move.getAttribute("data-value");
          var x = (e.clientX * moving_value) / 50;
          move.style.transform = "translateX(" + x + "px)"
        });
      };
      useEffect(() => {
        document.addEventListener("mousemove", parallaxFunction);
      });
    return(
        <div className="relative basis-1/2 overflow-hidden flex justify-center items-center mobile:basis-full mobile:hidden">
        <img className="laptop object-contain" src="/laptop.webp" alt="laptop" id="laptop" data-value="1"/>
      </div>
)
}

export default MarsFoodComponent;
