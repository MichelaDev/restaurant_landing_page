import React from "react";
import Section from "../Section/Section";
import Image from "next/image";
import about_img from "../../assets/about.jpg";

const About = () => {
  return (
    <Section id="about" noPadding secondary extraClasses="flex-row-reverse">
      <div className="flex-1">
        <Image
          src={about_img}
          alt="image of a plate of pasta"
          className="w-auto h-full"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex-1 h-full flex flex-col gap-6 pb-16 items-center justify-center">
        <div className="font-bold text-6xl">
          About
        </div>
        <div className="text-lg px-16 text-center" >
          <p className="pb-4">Welcome to Culinary Heaven, where every bite speaks Italian passion. </p> 
          <p className="pb-4">{"Located in the heart of London, we offer an exquisite culinary experience, blending modern elegance with traditional hospitality. Our menu is a celebration of authentic Italian flavors, crafted with the finest ingredients. Whether it's a romantic evening or a casual gathering, indulge in a journey through the diverse and delightful landscape of Italian cuisine."}</p>
          <p className="pb-4">Join us at Culinary Heaven for an unforgettable dining experience.</p>
        </div>
      </div>
    </Section>
  );
};

export default About;
