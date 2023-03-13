import React, { useEffect, useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
export default function Navbar({}) {
  return (
    <div className=" container mx-auto">
      <div className="flex flex-wrap flex-col md:flex-row items-center">
        <a href="#">
          <h1 className="font-code text-xl leading-5 text-primary-dark">
            Underground <br /> Programmer.
          </h1>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-primary-dark	flex flex-wrap items-center text-base font-code justify-center text-gray font-medium">
          <a
            href="#services"
            className="nav-link relative mr-5 cursor-pointer hover:text-gray-900"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="nav-link relative mr-5 cursor-pointer hover:text-gray-900"
          >
            Portfolio
          </a>
          <a
            href="#testimonials"
            className="nav-link relative mr-5 cursor-pointer hover:text-gray-900"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="nav-link relative mr-5 cursor-pointer hover:text-gray-900"
          >
            Contact
          </a>
        </nav>
        <a
          href="tel:+923124567890"
          className="inline-flex gap-2 px-5 py-2 cursor-pointer items-center justify-center rounded-full bg-primary text-white font-code font-bold  md:active:scale-95 md:hover:shadow-md transition duration-200"
        >
          Contact
          <BsFillTelephoneFill />
        </a>
      </div>
    </div>
  );
}
