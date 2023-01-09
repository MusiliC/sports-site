import React from "react";
import { SelectedPage } from "../shared/types";
import bgOne from "../../assets/bgOne (3).jpg";
import adidasLogo from "../../assets/adiddasLogo.png";
import nikeLogo from "../../assets/nikeLogo.svg";
import jordanLogo from "../../assets/airJordanLogo.png";
import armourLogo from "../../assets/amourLogo.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="gap-16 pt-10  bg-gray-50 lg:pb-0 md:h-full">
      {/* image and main header */}
      <div className="w-5/6 mx-auto items-center  justify-center md:h-5/6 lg:flex">
        {/* main headers */}
        <div className="mt-32 z-10 lg:basis-3/5">
          {/* headings */}
          <div>
            <h2 className="text-4xl font-bold">
              <span className="text-primary-300">Marcelo </span> Sports Hub
            </h2>
          </div>
          <p className="text-sm mt-8">
            Best top sports shop. Our actions, goals, projects, programs, and
            inventions begin and end with the customer top of mind. Our mission
            is to make it easy to do business anywhere. Unique and quality
            products for our customers.
          </p>
          {/* action buttons */}

          <div className="flex mt-8 items-center gap-8">
            <button>Explore More</button>
          </div>
        </div>

        {/* image */}

        <div className="z-10 flex basis-3/5  justify-center my-12   lg:ml-40 md:mt-16  lg:justify-items-end">
          <img
            src={bgOne}
            className="h-3/6 w-5/6 md:w-5/6 md:h-4/6  lg:w-[24rem] lg:h-[17rem] rounded-bl-mediumLarge rounded-tr-mediumLarge md:rounded-bl-extraLarge md:rounded-tr-extraLarge object-cover"
            alt=""
          />
        </div>
      </div>

      {/* sponsors */}

      <div className="lg:h-[120px] z-10 w-full py-4 lg:py-6 bg-secondary-500">
        <div className="px-4 md:w-5/6 mx-auto">
          <div className="flex items-center justify-between w-4/5">
            <img src={adidasLogo} className="Sponsors" alt="" />
            <img src={nikeLogo} className="Sponsors" alt="" />
            <img src={jordanLogo} className="Sponsors" alt="" />
            <img src={armourLogo} className="Sponsors" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
