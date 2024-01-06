import React from "react";
import Section from "../Section/Section";
import Image from "next/image";
import reservation_img from "../../assets/reservation.jpg";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <Section id="reservation" noPadding secondary extraClasses="flex-row-reverse">
      <div className="flex-1">
        <Image
          src={reservation_img}
          alt="image of a plate of pasta"
          className="w-auto h-full"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center mt-[var(--header-height)]">
        <div className="font-bold text-6xl pb-8">
          Reservation
        </div>
        <ReservationForm />
      </div>
    </Section>
  );
};

export default Reservation;
