import logo from "../images/logo-bookmarkwhite.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="bg-blue-dark">
      <div className="mx-auto footer-wrapper max-w-7xl py-9">
        <div className=' footer-left'>
          <img src={logo} alt="bookmarko branding" className="w-40 p-3 " />

          <div className="text-sm md:ml-10 footer-links text-white-neutral">
            <ul className='md:flex'>
              <li className=' md:mr-5 hover:text-red-neutral'>
              <a href="#features">Features</a>
              </li>

              <li className='mt-5 md:mt-0 md:mr-5 hover:text-red-neutral'> <a href="#pricing">Pricing</a>
                </li>

                <li className='mt-5 md:mt-0 md:mr-5 hover:text-red-neutral'>
                <a href="#contact">Contact</a>
                </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 footer-right md:mt-0 ">
          <button className="mr-2 md:mr-5 text-blue-neutral hover:text-red-neutral">
            <FaFacebookSquare />
          </button>
          <button className="text-blue-neutral hover:text-red-neutral">
            <FaTwitterSquare />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
