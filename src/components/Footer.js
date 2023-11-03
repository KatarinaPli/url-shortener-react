import React from "react";
import facebook from "../img/icon-facebook.svg";
import twitter from "../img/icon-twitter.svg";
import pinterest from "../img/icon-pinterest.svg";
import instagram from "../img/icon-instagram.svg";
import logo from "../img/logo.svg";
export default function Footer() {
  return (
    <footer className="bg-slate-900 py-10 lg:py-20 ">
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-width gap-10">
        <article>
          <img src={logo} alt="Logo" />
        </article>

        <article>
          <h3 className="text-white text-lg font-bold tracking-wide mb-3">
            Features
          </h3>
          <ul>
            <li>
              <a href="#" className="text-slate-200 ">
                Link Shortening
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-200 ">
                Branded Links
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-200 ">
                Analytics
              </a>
            </li>
          </ul>
        </article>
        <article>
          <h3 className="text-white text-lg font-bold tracking-wide mb-3">
            Resources
          </h3>
          <ul>
            <li>
              <a href="#" className="text-slate-200 ">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-200 ">
                Development
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-200 ">
                Support
              </a>
            </li>
          </ul>
        </article>
        <article>
          <ul className="flex items-center">
            <li>
              <img src={facebook} alt="" />
            </li>
            <li className="ml-4">
              <img src={twitter} alt="" />
            </li>
            <li className="mx-5">
              <img src={pinterest} alt="" />
            </li>
            <li>
              <img src={instagram} alt="" />
            </li>
          </ul>
        </article>
      </section>
    </footer>
  );
}
