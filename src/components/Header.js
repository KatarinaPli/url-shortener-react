import { useState } from "react";
import React from "react";
import logo from "../img/logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="Header max-width py-4">
      <div className="flex irems-center justify-between">
        <section className="flex items-center">
          {" "}
          <img src={logo} alt="Url Shortener Logo" />
          <nav className="hidden md:block md:ml-5">
            <ul className="flex items-start justify-start">
              <li>
                <a href="#">Features</a>
              </li>
              <li className="md:mx-5">
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
          </nav>
        </section>

        <div className="hidden md:block">
          <ul className="flex items-center ml-5">
            <li className="my-5 md:my-0 md:mr-5">
              <button className="text-slate-400">Login</button>
            </li>
            <li>
              <button className="btn-defsett rounded-full">Sign Up</button>
            </li>
          </ul>
        </div>

        {isOpen && (
          <div className="absolute md:text-left md:py-0 md:flex md:items-center left-5 right-5 top-20 rounded bg-slate-900 text-slate-200 text-center py-10 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 ">
            {" "}
            <nav className="md:hidden">
              <ul className="flex flex-col justify-center items-center mb-5">
                <li>
                  <a href="#">Features</a>
                </li>
                <li className="md:mx-5">
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
              </ul>
            </nav>
            <ul className="flex flex-col justify-center items-center">
              <li className="md:mr-5 mb-2">
                <a href="#">Login</a>
              </li>
              <li>
                <button className="btn-defsett">Sign Up</button>
              </li>
            </ul>{" "}
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="uppercase text-sm tracking-wide md:hidden"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
