'use client'
import React, { useState } from 'react';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    date: '',
    time: '',
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission (e.g., send data to a server)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-2/3 xl:w-1/2 flex justify-center">
      <a className='bg-[#e6dfd8] text-primary py-4 px-6 font-bold rounded-md shadow-md hover:bg-primary hover:text-secondary' href='https://cal.com/culinaryheaven/book-a-table' target='_blank'>Book a table</a>
    </div>
  );
};

export default ReservationForm;
