import React from "react";
import { Audio } from "react-loader-spinner";
import { useState, useEffect } from "react";

const getLocalStorage = () => {
  let links = localStorage.getItem("links");

  if (links) {
    try {
      return JSON.parse(links);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return [];
    }
  } else {
    return [];
  }
};

//   if (links) {
//     return JSON.parse(localStorage.getItem("links"));
//   } else {
//     return [];
//   }
// };

export default function Short() {
  let [text, setText] = useState("");
  const [buttonUpdate, setButtonUpdate] = useState("Copy");
  const [links, setLinks] = useState(getLocalStorage());
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsOpen(!isOpen);

    if (!text) {
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
      //   const shortenLink = async () => {
      //     const url = `https://free-url-un-shortener.p.rapidapi.com/url?url=${text}`;
      //     const options = {
      //       method: "GET",
      //       headers: {
      //         "X-RapidAPI-Key":
      //           "291cb413femsh8160263972ef146p1fe161jsn3720e44a5539",
      //         "X-RapidAPI-Host": "free-url-un-shortener.p.rapidapi.com",
      //       },
      //     };
      //     const response = await fetch(url, options);
      //     const data = await response.text();
      //     console.log(data.result);
      //     setLinks(data.result);
      //     setText("");
      //   };

      const shortenLink = async () => {
        const url = `https://reductible.p.rapidapi.com/?url=${text}&key=7x3JgDpx8wscFJ4nY8SteHIjlrfTCVCyDmqJooHdLTcq99QpZe9yvMKQKGPStxyT`;
        const options = {
          method: "GET",
          headers: {
            Authorization: "<REQUIRED>",
            "X-RapidAPI-Key":
              "291cb413femsh8160263972ef146p1fe161jsn3720e44a5539",
            "X-RapidAPI-Host": "reductible.p.rapidapi.com",
          },
        };
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setLinks(result);
        setText("");
      };

      shortenLink();
    }
  };

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const handleCopy = () => {
    navigator.clipboard.writeText(links.url);
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
            value={text}
            onChange={(event) => setText(event.target.value)}
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
            <h6 className="mb-3 md:mb-0">{text}</h6>
          </article>
          <article>
            <ul className="md:flex md:items-center">
              <li className="md:mr-5">
                <button className="text-cyan-500">{links.url}</button>
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
