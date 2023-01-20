"use client";
import { useEffect } from "react";
import "../styles/Project.css";

const MarsFoodComponent = () => {
  const parallaxFunction = (e) => {
    document.querySelectorAll(".tablet").forEach(function (move) {
      var moving_value = move.getAttribute("data-value");
      var y = (e.clientY * moving_value) / 25;
      move.style.transform = "translateY(" + y + "px)";
    });
  };
  useEffect(() => {
    document.addEventListener("mousemove", parallaxFunction);
  });
  return (
    <div className="relative basis-1/2 overflow-hidden flex justify-center items-center">
      <img
        src="/tablet.webp"
        alt="tablet"
        id="tablet"
        className="tablet absolute w-[68%] right-12 z-20"
        data-value="1"
        style={{
          "--project-monitor": `url('/monitor-marsfood.webp')`,
        }}
      />
      <img
        src="/tablet-down.webp"
        alt="tablet-down"
        id="tablet-down"
        className="absolute bottom-0 z-10"
      />
    </div>
  );
};

export default MarsFoodComponent;
