import React from "react";
import Section from "../Section/Section";
import Image from "next/image";
import landign_img from "../../assets/landing.jpg";
import logo from "../../assets/logo.png";

const Landing = () => {
  return (
    <Section>
      <div className="flex-1">
        <Image
          src={landign_img}
          alt="image of a plate of pasta"
          className="w-auto h-full"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex-1 h-full flex flex-col gap-6 pb-16 items-center justify-center">
        <div className="flex flex-col gap-6 items-center justify-center font-bold text-6xl">
          <Image className="h-14 w-auto" src={logo} alt="Culinary Heaven" />
          <div className="px-4 flex text-center">CULINARY HEAVEN</div>
        </div>
        <div className="text-xl" >Where every bite speaks italian passion</div>
      </div>
    </Section>
  );
};

export default Landing;
