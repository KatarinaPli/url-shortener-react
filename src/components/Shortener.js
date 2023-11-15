import React from "react";


export default function Shortener() {

  
  function handleSubmit(event) {
    event.preventDefault();
    const link = 'https://ideas2it-clickmeter-v1.p.rapidapi.com/account';
const options = {
	method: 'GET',
	headers: {
		'X-Clickmeter-Authkey': '9FA61E69-1A55-470B-98DC-0BD3AADAEB5B',
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'ideas2it-ClickMeter-v1.p.rapidapi.com'
	}
};
    try {
      const response = fetch(link, options);
	const result = response.text();
	console.log(result);
   shortenedLink(result);
         
    }
      catch (error) {
	console.error(error);
}


    
  }
  return (
    <section className="Shortener max-width ">
      <main className="flex flex-col md:flex-row">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="url"
            placeholder="Pass the link here"
            required
            className="w-full px-4 py-2 rounded mb-2 md:mb-0 md:w-2/3"
            /*value={link}*/
            onChange={(event) => setLink(event.target.value)}
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
    </section>
  );
  }
