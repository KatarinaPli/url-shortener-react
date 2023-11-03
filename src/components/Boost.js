import React from "react";
import bgMobile from "../img/bg-boost-mobile.svg";
import bgDesktop from "../img/bg-boost-desktop.svg";

export default function Boost() {
  return (
    <section className="Boost">
      <article>
        <source media="(min-width: 768px)" srcSet={bgDesktop} />
        <img src={bgMobile} alt="Disign" />
      </article>
      <article className="inside-boost">
        <h2 className="text-white mb-7 text-4xl font-bold text-center">
          Boost your links today
        </h2>{" "}
        <button className="btn-defsett rounded-full">
          Get Started
        </button>
      </article>
    </section>
  );
}
