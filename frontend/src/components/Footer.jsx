import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="w-full h-auto mt-[250px] py-8 bg-gray-800 text-white">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-6 mr-9 mt-3">PACE</h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full text-center sm:text-left">
          <div>
            <ul>
              <li className="font-bold mb-2">Products</li>
              <li>Features</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold mb-2">Resources</li>
              <li>Blog</li>
              <li>User Guides</li>
              <li>Webinars</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold mb-2">Company</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold mb-2">Plans & Pricing</li>
              <li>Personal</li>
              <li>Startup</li>
              <li>Organization</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-[50px] w-full px-[150px]">
       
        <div className="flex items-center space-x-4">
          <label htmlFor="language" className="text-lg">Language:</label>
          <select 
            id="language"
            name="language"
            className="bg-gray-200 text-black px-4 py-2 rounded-md"
          >
            <option value="en">English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>

        <div className="flex space-x-8">
          <a href="https://twitter.com" aria-label="Twitter" >
            <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl hover:text-blue-500" />
          </a>
          <a href="https://x.com" aria-label="X" >
            <FontAwesomeIcon icon={faXTwitter} className="text-white text-2xl hover:text-gray-500" />
          </a>
          <a href="https://telegram.org" aria-label="Telegram" >
            <FontAwesomeIcon icon={faTelegram} className="text-white text-2xl hover:text-blue-400" />
          </a>
          <a href="https://facebook.com" aria-label="Facebook" >
            <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl hover:text-blue-600" />
          </a>
        </div>
      </div>

      
      <div className=" text-center text-white">
        <h6>© 2024 Brand, Inc. Privacy Terms Sitemap</h6>
      </div>
    </div>
  );
}

export default Footer;
