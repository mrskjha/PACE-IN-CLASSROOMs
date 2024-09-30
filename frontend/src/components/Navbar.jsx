
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
    <div className='w-full bg-white h-20 grid grid-cols-10 gap-1 overflow-hidden px-2 '>
        <div className='flex justify-between items-center'>
            <h5 className='text-bolder text-2xl ml-5 font-semibold'>PACE</h5>
        </div>
        <div className='col-start-2 col-end-9'>
        <ul className='flex flex-row gap-10 w-full h-full text-slate-800 font-normal text-sm opacity-90'>
            <li className="flex items-center hover:cursor-pointer hover:border-b-4 hover:border-indigo-500 hover:text-extrabold hover:text-xl hover:text-indigo-900"><Link to='/'>Home</Link></li>
            <li className="flex items-center hover:cursor-pointer hover:border-b-4 hover:border-indigo-500 hover:text-extrabold hover:text-xl hover:text-indigo-900"><Link to='/datavisulisation'>Data Visulisation</Link></li>
            <li className="flex items-center hover:cursor-pointer hover:border-b-4 hover:border-indigo-500 hover:text-extrabold hover:text-xl hover:text-indigo-900">Learning Materials</li>
            <li className="flex items-center hover:cursor-pointer hover:border-b-4 hover:border-indigo-500 hover:text-extrabold hover:text-xl hover:text-indigo-900">Phytoplankton</li>
            <li className="flex items-center hover:cursor-pointer hover:border-b-4 hover:border-indigo-500 hover:text-extrabold hover:text-xl hover:text-indigo-900">Contact us</li>
        </ul>
        
            
        </div>
        <div className="relative flex justify-center items-center gap-6 p-4">
  <Link to='/signup'> 
  <button className=" text-indigo-600 font-semibold py-1 px-10 rounded-[5%] hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out shadow-lg">
    SignUp
  </button>
  </Link>    
  <Link to="/login">
  <button className="bg-transparent bg-blue-500 text-blue-500 font-semibold py-1 px-10 rounded-[5%] border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out shadow-lg">
    Login
  </button>
  </Link>

</div>


    </div>
      
    </nav> 
  );
};

export default Navbar;

  