import React from "react";
import Section from "../Section/Section";
import Image from "next/image";
import landign_img from "../../assets/landing.jpg";
import logo from "../../assets/logo.png";

const Landing = () => {
  return (
    <Section>
      <div className="basis-1/2">
        <Image
          src={landign_img}
          alt="image of a plate of pasta"
          className="lg:w-auto lg:h-full h-auto w-full"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="basis-1/2 min-h-[50vh] flex flex-col gap-6 items-center justify-center">
        <div className="flex flex-col gap-6 items-center justify-center font-bold text-2xl md:text-2xl md:text-4xl xl:text-6xl">
          <Image className="h-14 w-auto" src={logo} alt="Culinary Heaven" />
          <div className="px-4 flex text-center">CULINARY HEAVEN</div>
        </div>
        <div className="text-md md:text-lg xl:text-xl" >Where every bite speaks italian passion</div>
      </div>
    </Section>
  );
};

export default Landing;
