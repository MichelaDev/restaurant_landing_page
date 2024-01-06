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
    <div className="w-2/3 xl:w-1/2 mx-auto bg-[#e6dfd8] p-6 rounded-md shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2" htmlFor="phone">
            Phone:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2" htmlFor="guests">
            Number of Guests:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2" htmlFor="date">
            Preferred Date:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary text-sm font-bold mb-2" htmlFor="time">
            Preferred Time:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="bg-[#008080] text-white py-2 px-4 rounded-md hover:bg-[#006666] focus:outline-none focus:bg-[#006666]"
          type="submit"
        >
          Submit Reservation
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
