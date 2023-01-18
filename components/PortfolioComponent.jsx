"use client"

const PortfolioComponent = () => {
  return (
    <div className="className=relative basis-1/2 overflow-hidden flex justify-center items-center">
      <div className="flex flex-col justify-center gap-14">
        <div className="name-words-container flex flex-row justify-center gap-1">
          {/* R Word  */}

          <div className="name-word-container relative">
            <div className="name-word aspect-square w-24 flex flex-row z-[1]">
              <div className="basis-1/2 border-2 border-white"></div>
              <div className="basis-1/2 flex flex-col">
                <div className="basis-1/2 border-2 border-white border-l-transparent rounded-tr-full"></div>{" "}
              </div>
            </div>
            <div className="absolute top-0 left-0 aspect-square w-24 flex flex-row">
              <div className="name-word-gradient name-word-gradient-back basis-1/2 border-2 border-white"></div>
              <div className="basis-1/2 flex flex-col">
                <div className="name-word-gradient name-word-gradient-front basis-1/2 border-2 border-white border-l-transparent rounded-tr-full"></div>{" "}
              </div>
            </div>
          </div>

          <div className="name-word-container relative">
            <div className="name-word h-24 w-12 flex flex-col z-[1]">
              <div className=" basis-full border-2 border-white"></div>
            </div>
            <div className="absolute top-0 left-0 name-word h-24 w-12 flex flex-col">
              <div className="name-word-gradient name-word-gradient-front basis-full border-2 border-white"></div>
            </div>
          </div>

          <div className="name-word-container relative">
            <div className="name-word aspect-square w-24 flex flex-row">
              <div className="basis-1/2 flex flex-col">
                <div className=" basis-1/2 border-2 border-white border-r-transparent rounded-bl-full"></div>{" "}
              </div>
              <div className="basis-1/2 flex flex-col">
                <div className="basis-full border-2 border-white rounded-br-full"></div>{" "}
              </div>
            </div>
            <div className="absolute top-0 left-0 name-word aspect-square w-24 flex flex-row">
              <div className="basis-1/2 flex flex-col">
                <div className="name-word-gradient name-word-gradient-front basis-1/2 border-2 border-white border-r-transparent rounded-bl-full"></div>{" "}
              </div>
              <div className="basis-1/2 flex flex-col">
                <div className="name-word-gradient name-word-gradient-back basis-full border-2 border-white rounded-br-full"></div>{" "}
              </div>
            </div>
          </div>

          <div className="name-word-container relative">
            <div className="name-word aspect-square w-24 flex relative">
              <div className="z-[1] border-2 basis-full border-white rounded-full"></div>
              <div className="absolute border-2 border-white w-1/2 h-full border-l-transparent right-0"></div>
            </div>
            <div className="absolute top-0 left-0 name-word aspect-square w-24 flex">
              <div className="name-word-gradient name-word-gradient-front z-[1] border-2 basis-full border-white rounded-full"></div>
              <div className="name-word-gradient name-word-gradient-back absolute border-2 border-white w-1/2 h-full border-l-transparent right-0"></div>
            </div>
          </div>
        </div>

        <div className="name-words-container flex flex-row justify-center gap-1">
          <div className="name-word-container relative">
            <div className="name-word aspect-square w-24 flex flex-row">
              <div className="basis-1/2 flex flex-col">
                <div className="basis-1/2"></div>
                <div className=" basis-1/2 border-2 border-white border-r-transparent rounded-bl-full"></div>{" "}
              </div>
              <div className="basis-1/2 flex flex-col">
                <div className="basis-full border-2 border-white rounded-br-full"></div>{" "}
              </div>
            </div>
            <div className="absolute top-0 left-0 name-word aspect-square w-24 flex flex-row">
              <div className="basis-1/2 flex flex-col">
                <div className="basis-1/2"></div>
                <div className="name-word-gradient name-word-gradient-front basis-1/2 border-2 border-white border-r-transparent rounded-bl-full"></div>{" "}
              </div>
              <div className="basis-1/2 flex flex-col">
                <div className="name-word-gradient name-word-gradient-back basis-full border-2 border-white rounded-br-full"></div>{" "}
              </div>
            </div>
          </div>

          <div className="name-word-container relative">
            <div className="name-word aspect-square w-24 flex relative">
              <div className="z-[1] border-2 basis-full border-white rounded-full"></div>
              <div className="absolute border-2 border-white w-1/2 h-full border-l-transparent right-0"></div>
            </div>
            <div className="absolute top-0 left-0 name-word aspect-square w-24 flex">
              <div className="name-word-gradient name-word-gradient-front z-[1] border-2 basis-full border-white rounded-full"></div>
              <div className="name-word-gradient name-word-gradient-back absolute border-2 border-white w-1/2 h-full border-l-transparent right-0"></div>
            </div>
          </div>

          <div className="name-word-container relative">
            <div className="name-word h-24 w-12 flex flex-col z-[1]">
              <div className=" basis-full border-2 border-white"></div>
            </div>
            <div className="absolute top-0 left-0 name-word h-24 w-12 flex flex-col">
              <div className="name-word-gradient name-word-gradient-front basis-full border-2 border-white"></div>
            </div>
          </div>

          <div className="name-word-container relative">
            <div className="name-word aspect-square w-24 flex flex-row z-[1]">
              <div className="basis-1/2 flex flex-col">
                <div className="basis-full border-2 border-white border-r-transparent  border-b-transparent rounded-tl-full"></div>{" "}
              </div>
              <div className="basis-1/2 border-2 border-white"></div>
            </div>

            <div className="name-word absolute top-0 left-0 aspect-square w-24 flex flex-row">
              <div className="basis-1/2 flex flex-col">
                <div className="name-word-gradient name-word-gradient-front basis-full border-2 border-white border-r-transparent border-b-transparent rounded-tl-full"></div>{" "}
              </div>
              <div className="name-word-gradient name-word-gradient-back basis-1/2 border-2 border-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioComponent
