import React from "react";
import showcase from "../img/illustration-working.svg";

export default function Showcase() {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 mx-5 lg:mx-40 my-20 lg:my-30">
      <article className="max-width py-10 lg:py-20 text-center lg:text-left">
        <h1 className="mb-5 text-4xl text-slate-800">
          More than just shorter links!
        </h1>
        <p className="mb-10">
          Build your brand's recognition and get detailed insights on how you
          links are performing
        </p>
        <button className="btn-defsett rounded-full">Get started!</button>
      </article>
      <aside>
        {" "}
        <img src={showcase} alt="Intoduction Shortly" />
      </aside>
    </section>
  );
}
