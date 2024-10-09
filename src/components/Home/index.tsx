import React, { useEffect } from "react";
import { SelectedPage } from "../types";
import bgImage from '@/assets/bgImage.jpg';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {

  useEffect(() => {
    setSelectedPage(SelectedPage.Home);
  }, [setSelectedPage]);

  return (
    <section id="home" className="gap-16 py-10 md:pb-0 mt-16">
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 pt-16 md:pt-0">
        <div
          className="relative h-[50vh] md:h-[65vh] w-full md:w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className=" inset-0  bg-opacity-40"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold">
              Get Delicious Food Anytime
            </h1>
            <p className="mt-4 text-lg md:text-2xl">Eat Smart & Healthy</p>
          </div>
        </div>
      </div>
      <hr className="mx-auto mt-6 md:mt-15 lg:mt-0 w-11/12 md:w-5/6 lg:w-3/4 border-t-2 border-gray-300" />
    </section>
  );
};

export default Home;
