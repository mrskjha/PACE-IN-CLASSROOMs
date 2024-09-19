

const Header = () => {
  return (
    <div className="relative">
      <img 
        className='w-full h-screen object-cover px-7' 
        src="https://images.unsplash.com/photo-1725727532120-8b2d88f47fe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D" 
        alt="Background" 
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <h1 className=' text-white text-5xl font-semibold '>
        Start Exploring PACE Data Today!
      </h1>
      <h3 className='text-white text-2xl mt-7'>We are glad you are here , pace is new earth observing satellite</h3>
      <div>
      <button className='uppercase bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300 ml-[40%] mt-7'>
      Explore</button>
      </div>
      </div>
     
    </div>
  );
};

export default Header;
