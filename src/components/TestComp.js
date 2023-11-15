import React from "react";
import { Audio } from "react-loader-spinner";
import { useState, useEffect } from "react";

const getLocalStorage = () => {
  let links = localStorage.getItem("links");

  if (links) {
    return JSON.parse(localStorage.getItem("links"));
  } else {
    return [];
  }
};

export default function Short() {
  let [url, setUrl] = useState("");
  const [buttonUpdate, setButtonUpdate] = useState("Copy");
  const [links, setLinks] = useState(getLocalStorage());
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsOpen(!isOpen);

    if (!url) {
      alert("Please pass your url there!");
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />;
    } else {
      const shortenLink = async () => {
        const response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${url}`
        );
        const data = await response.json();
        console.log(data.result);
        setLinks(data.result);
        setUrl("");
      };
      shortenLink();
    }
  };

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link);
    setButtonUpdate("Copied");
  };

  return (
    <section className="Shortener max-width relative">
      <main className="flex flex-col md:flex-row">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="url"
            placeholder="Pass the link here"
            required
            className="w-full px-4 py-2 rounded mb-2 md:mb-0 md:w-2/3"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          />
          <button
            className="btn-defsett rounded w-full  md:w-40 md:ml-5"
            type="submit"
            onClick={handleSubmit}
          >
            Shorten it
          </button>
        </form>
      </main>

      {isOpen && (
        <section className="flex flex-col items-center justify-center bg-white text-center md:flex-row md:justify-between p-3 mt-56 rounded-lg shadow">
          <article>
            <h6 className="mb-3 md:mb-0">{links.original_link}</h6>
          </article>
          <article>
            <ul className="md:flex md:items-center">
              <li className="md:mr-5">
                <button className="text-cyan-500">
                  {links.full_short_link}
                </button>
              </li>
              <li>
                <button
                  onClick={handleCopy}
                  className="btn-defsett rounded-lg text-sm focus:bg-slate-800"
                >
                  {buttonUpdate}
                </button>
              </li>
            </ul>
          </article>
        </section>
      )}
    </section>
  );
}
