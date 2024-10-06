import { useState, useEffect } from "react";

function FetchNASAData() {
  const [date, setDate] = useState("");
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    // Set the date limits (last 214 days)
    const currentDate = new Date();
    setMaxDate(currentDate.toISOString().split("T")[0]);

    const minDateObj = new Date(currentDate);
    minDateObj.setDate(currentDate.getDate() - 214);
    setMinDate(minDateObj.toISOString().split("T")[0]);
  }, []);

  const openImageURL = () => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const day = dateObj.getDate().toString().padStart(2, "0");
    const YYYYMMDD = `${year}${month}${day}`; // Use backticks for template literals

    const url = `https://oceancolor.gsfc.nasa.gov/showimages/PACE_OCI/IMAGES/AER_DB/L3/${year}/${month}${day}/PACE_OCI.${YYYYMMDD}.L3m.DAY.AER_DBOCEAN.V2_0.aot_1610_db.4km.NRT.nc.png`; // Use backticks for the URL

    setImageURL(url); // Set the image URL for display
  };

  return (
    <div className="bg-black w-full h-full text-white flex flex-col md:flex-row items-center p-8">
      <div className="flex-1 flex flex-col mb-8 md:mb-0 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-400">
          Fetching Data from PACE Satellite
        </h1>
        <p className="text-lg mb-2 text-gray-300">
          <strong>Product Status:</strong> Provisional
        </p>
        <p className="text-lg mb-2 text-gray-300">
          <strong>Instrument:</strong> PACE-OCI
        </p>
        <p className="text-lg mb-2 text-gray-300">
          <strong>Product:</strong> Aerosol Optical Thickness at 1610nm, Deep
          Blue Algorithm
        </p>
        <p className="text-lg mb-6 text-gray-300">
          <strong>Resolution:</strong> 4km
        </p>
        <p className="text-white top-0">
        <b >Blue shades:</b> These area indicate high concentrations of phytoplankton,
        the tiny plants that form the base of the marine food chain.<br />
        <b>Green shades:</b> These represent areas with high concentrations of chlorophyll, a
        pigment found in phytoplankton that helps them absorb sunlight for
        photosynthesis. <br />
       <b> Other colors:</b> The other colors in the image represent
        various other factors, such as ocean currents, atmospheric aerosols, or
        cloud formations.<br /><br />
      </p>

        <div className="mb-2 mt-0">
          <label htmlFor="dateInput" className="block text-lg mb-2 mt-0">
            Select a date to view the PACE's OCI image (within the last 214
            days):
          </label>
          <input
            type="date"
            id="dateInput"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            min={minDate}
            max={maxDate}
            required
          />
        </div>

        <div className="text-center mb-4 ">
          {date && (
            <p className="text-lg text-gray-400">
              Selected Date:{" "}
              <span className="font-bold">
                {new Date(date).toLocaleDateString()}
              </span>
            </p>
          )}
        </div>

        <button
          onClick={setTimeout(openImageURL, 1000)}
          className="bg-violet-900 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105"
        >
          View Image
        </button>
      </div>

      <div className="flex-1 flex justify-center items-center">
        {imageURL && (
          <img
            src={imageURL}
            alt="PACE Satellite Image"
            className="rounded-lg shadow-lg max-w-full h-auto transition-transform duration-150 ease-in-out transform hover:scale-105"
          />
        )}

      
      </div>

    </div>
   


  );
}

export default FetchNASAData;
