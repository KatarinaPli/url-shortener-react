import React from "react";
import brand from "../img/icon-brand-recognition.svg";
import records from "../img/icon-detailed-records.svg";
import custom from "../img/icon-fully-customizable.svg";

export default function Advanced() {
  return (
    <section className=" pt-40 pb-15 lg:pb-40 bg-gray-100">
      <article>
        <h2 className="text-center font-bold text-4xl text-slate-800 mb-5">
          {" "}
          Advanced Statistics
        </h2>
        <p className="text-center tracking-wide">
          {" "}
          Track how your links are performing across the web <br /> with our
          advanced statistics dashboard.
        </p>
      </article>
      <div className="grid grid-cols-1 md:grid-cols-3 relative mt-25 lg:content-around">
        <div className="deco-line"></div>
        <article className="card bg-white p-7 rounded-md relative m-10  lg:h-64 ">
          {" "}
          <img src={brand} alt="Brand recodnition" className="" />
          <h3>Brand recodnition</h3>
          <p>
            {" "}
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </article>
        <article className="card bg-white p-7 rounded-md relative m-10 lg:mb-20 lg:mt-20 lg:h-64">
          <img src={records} alt="Detailed records" className="" />
          <h3>Detailed records</h3>
          <p>
            {" "}
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </article>
        <article className="card bg-white p-7 rounded-md relative m-10 lg:mt-28 lg:h-64">
          <img src={custom} alt="Fully Customizable" className="" />
          <h3>Fully Customizable</h3>
          <p>
            {" "}
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </article>
      </div>
    </section>
  );
}
