import React from "react";
import Section from "../Section/Section";
import Image from "next/image";
import reservation_img from "../../assets/reservation.jpg";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <Section id="reservation" noPadding secondary extraClasses="lg:flex-row-reverse">
      <div className="basis-1/2">
        <Image
          src={reservation_img}
          alt="image of a plate of pasta"
          className="w-auto h-full"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="basis-1/2 pb-8 min-h-[50vh] flex flex-col items-center justify-center mt-[var(--header-height)]">
        <div className="font-bold text-2xl md:text-4xl xl:text-6xl pb-8">
          Reservation
        </div>
        <ReservationForm />
      </div>
    </Section>
  );
};

export default Reservation;
