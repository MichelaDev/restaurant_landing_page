'use client'

import React, { useState } from "react";
import Image from "next/image";
import Section from "../Section/Section";
import appetizers_img from "../../assets/appetizers.jpg";
import pasta_img from "../../assets/pasta.jpg";
import salads_img from "../../assets/salads.jpg";
import desserts_img from "../../assets/desserts.jpg";
import drinks_img from "../../assets/drinks.jpg";
import MENU, { MenuCourses } from "@/constants/menu";
import ListMenu from "./ListMenu";

const Menu = () => {
  const [current, setCurrent] = useState<MenuCourses>("appetizers");

  const img = (value: MenuCourses) => {
    switch (value) {
      case "appetizers":
        return appetizers_img;
      case "pasta":
        return pasta_img;
      case "salads":
        return salads_img;
      case "desserts":
        return desserts_img;
      case "drinks":
        return drinks_img;
      default:
        return appetizers_img;
    }
  }
  
  return (
    <Section id="menu" noPadding>
      <div className="flex-1">
        <Image
          src={img(current)}
          alt="image of a plate related to the menu tab selected"
          className="w-auto h-full"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex-1 flex flex-col mt-[var(--header-height)] pt-6 items-center">
        <div className="text-6xl font-bold p-4 pb-6">Menu</div>
        <div className="flex">
          {(["appetizers", "pasta", "salads", "desserts", "drinks"] as MenuCourses[]).map((item) => (
            <div
              key={item}
              onClick={() => setCurrent(item)}
              className={`
                ${item === current ? 'underline underline-offset-8 text-white' : 'text-gray-300 hover:underline hover:underline-offset-8 hover:text-white'} rounded-md px-3 py-2 text-lg cursor-pointer`
              }
              aria-current={item  ? 'page' : undefined}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </div>
          ))}
        </div>
        <div className="mt-6 mx-16 self-start">
          <ListMenu items={MENU[current]} />
        </div>
      </div>
    </Section>
  )
};

export default Menu;