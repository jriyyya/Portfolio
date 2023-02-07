"use client";

import React from "react";
import { socials } from "../constants";

const FooterNew = () => {
  return (
    <>
      <div className="border-t-2 border-gray-600 flex flex-row justify-around py-4 text-white">
        <div className="text-2xl font-semibold">Socials</div>
        <div className="flex flex-row text-lg">
          Made with <h6 id="heart" > ❤️</h6>
        </div>
        <div className="flex flex-row gap-x-3">
          {socials.map((social) => (
            <img
              onClick={() => {
                window.open(social.link, "_newWindow");
              }}
              src={social.url}
              alt={social.name}
              key={social.name}
              className="cursor-pointer w-[3ch] object-contain aspect-square brightness-0 invert"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FooterNew;
