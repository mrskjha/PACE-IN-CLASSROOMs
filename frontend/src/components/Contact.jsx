import videofile from "../assets/contactUsVideo.mp4" 


const Contact= () => {
  return (
    <>
    <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-12 py-16 h-auto  bg-black">
      {/* Left Section: Heading and Form */}
      <div className="w-full lg:w-1/2 mb-12 mt-9  lg:mb-0 ">
        {/* Heading */}
        <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-gray-50 ml-16">
          LET'S  TALK!
        </h1>
        
        {/* Form */}
        <form className="mt-8 space-y-6 ">
          <div classname="">
            <label className="mr-[400px] text-gray-700 text-sm font-bold mb-2 hover:text-lg" htmlFor="name">
              Your name *
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black "
              placeholder="Your name"
              required
            />
          </div>
          
          <div>
            <label className="mr-[400px] text-gray-700 text-sm font-bold mb-2 hover:text-lg" htmlFor="email">
              Your email 
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your email"
              required
            />
          </div>
          
          <div>
            <label className="mr-[400px] text-gray-700 text-sm font-bold  hover:text-lg mb-2" htmlFor="message">
              Your message *
            </label>
            <textarea
              id="message"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              rows="4"
              placeholder="Your message"
              required
            ></textarea>

          </div>
          <div className="flex justify-end">
              <button
                type="submit"
                className="bg-gray-900 text-white py-3 px-6 rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          
        </form>
        
      </div>
      
      {/* Right Section: 3D Graphic or Image */}
      <div className="w-full lg:w-1/2 flex items-center justify-center mt-9 ml-9">
        <div className="w-3/4 h-96 border-4 border-gray-700 rounded-lg  flex items-center justify-center">
          {/* Placeholder for 3D Animation/Image */}
        <video src={videofile} className='w-full h-full object-cover rounded-lg' autoPlay loop controls muted  ></video>
          <p className="text-white"></p>
        </div>
      </div>

     
    </div>
   

    </>
  );
};

export default Contact;