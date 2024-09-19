const NewEvents = () => {
    return (
      <div className="relative w-full min-h-screen p-8 bg-gray-100">
        <h1 className="text-center text-3xl font-semibold bg-blue-950 text-white py-4 mb-12">
          Current Events With PACE
        </h1>
  
        <div className="flex flex-col gap-8">
          {/* First Row */}
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="flex flex-col md:flex-row w-full md:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4 flex flex-col ">
                <h2 className="text-xl font-semibold mb-2">Phytoplankton Bloom</h2>
                <p className="mt-4">Recent data highlights an extensive Phytoplankton bloom in the Atlantic Ocean, offering insights into marine ecosystem health.</p>
              </div>
              <img 
                className="w-full md:w-1/3 h-48 object-cover"
                src="https://images.unsplash.com/photo-1562156194-215edc144205?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGh5dG9wbGFua3RvbiUyMEJsb29tfGVufDB8fDB8fHww"
                alt="Phytoplankton Bloom"
              />
            </div>
  
            <div className="flex flex-col md:flex-row w-full md:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4 flex flex-col ">
                <h2 className="text-xl font-semibold mb-2">PACE Over Pacific</h2>
                <p className="mt-4">The PACE satellite captures crucial data over the Pacific Ocean, aiding climate researchers in understanding ocean dynamics.</p>
              </div>
              <img 
                className="w-full md:w-1/3 h-48 object-cover"
                src="https://plus.unsplash.com/premium_photo-1714618958248-45087e82a197?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFjZSUyMHNhdGVsbGl0ZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="PACE Over Pacific"
              />
            </div>
          </div>
  
          {/* Second Row */}
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="flex flex-col md:flex-row w-full md:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4 flex flex-col ">
                <h2 className="text-xl font-semibold mb-2">Ocean Color Change</h2>
                <p className="mt-4">PACE's observations reveal significant changes in ocean color, indicating shifts in phytoplankton populations and health.</p>
              </div>
              <img 
                className="w-[450px]  h-48 object-cover"
                src="https://images.unsplash.com/photo-1513553404607-988bf2703777?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFuJTIwY29sb3IlMjBjaGFuZ2V8ZW58MHx8MHx8fDA%3D"
                alt="Ocean Color Change"
              />
            </div>
  
            <div className="flex flex-col md:flex-row w-full md:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4 flex flex-col ">
                <h2 className="text-xl font-semibold mb-2">Data Analysis Workshop</h2>
                <p className="mt-4">Scientists gather to analyze PACE data, discussing new findings and potential impacts on climate prediction models.</p>
              </div>
              <img 
                className="w-full md:w-1/3 h-48 object-cover"
                src="https://plus.unsplash.com/premium_photo-1661270474108-2c2e60c4ff15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww"
                alt="Data Analysis Workshop"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NewEvents;
  