import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="w-full h-auto mt-0 bg-black text-white">
     

      <div className="flex justify-between items-center w-full px-[150px]">
       
        <div className="flex items-center space-x-4">
          <label htmlFor="language" className="text-lg">Language:</label>
          <select 
            id="language"
            name="language"
            className="bg-purple-900 text-white px-4 py-2 rounded-md"
          >
            <option value="en">English</option>
            {/* <option value="hindi">Hindi</option> */}
          </select>
        </div>

        <div className="flex space-x-8">
          <a href="https://twitter.com" aria-label="Twitter" >
            <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl hover:text-gray-500" />
          </a>
          <a href="https://x.com" aria-label="X" >
            <FontAwesomeIcon icon={faXTwitter} className="text-white text-2xl hover:text-gray-500" />
          </a>
          <a href="https://telegram.org" aria-label="Telegram" >
            <FontAwesomeIcon icon={faTelegram} className="text-white text-2xl hover:text-gray-500" />
          </a>
          <a href="https://facebook.com" aria-label="Facebook" >
            <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl hover:text-gray-500" />
          </a>
        </div>
      </div>

      
      <div className=" text-center text-white">

      </div>
    </div>
  );
}

export default Footer;
