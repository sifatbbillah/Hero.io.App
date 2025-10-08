import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-gray-200 p-12">
      <Container>
        <nav className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-gray-600 pb-6">
          <div className="mb-6 md:mb-0">
            <NavLink
              to={"/"}
              className="flex gap-3 items-center text-3xl font-extrabold text-[#f59e0b] uppercase"
            >
              <img className="w-12" src={logo} alt="Hero.io Logo" />
              Hero.io
            </NavLink>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-3 text-[#fbbf24]">
              Connect with us
            </h4>
            <div className="flex justify-center md:justify-end gap-6 text-3xl text-[#38bdf8] hover:text-[#f59e0b] transition-colors duration-300">
              <NavLink>
                <FaXTwitter />
              </NavLink>
              <NavLink>
                <FaLinkedin />
              </NavLink>
              <NavLink>
                <FaFacebook />
              </NavLink>
            </div>
          </div>
        </nav>

        <aside className="text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Hero.io. Crafted with ❤️ for a modern
            web experience. All rights reserved.
          </p>
        </aside>
      </Container>
    </footer>
  );
};

export default Footer;
