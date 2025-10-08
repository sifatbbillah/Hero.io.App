import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import Container from "./Container";
const Navbar = () => {
  return (
    <div className="bg-white py-2">
      <Container>
        <div className="navbar grid grid-cols-3 justify-center items-center ">
          <div className="col-span-2 md:col-span-1 flex justify-start">
            <NavLink
              to={"/"}
              className="flex gap-2 justify-center items-center text-2xl uppercase font-bold  
           gradient-text"
            >
              <img className="w-10" src={logo} alt="" /> Hero.io
            </NavLink>
          </div>
          <div className="col-span-3 mt-5 md:mt-0 justify-center order-3 flex gap-5 text-[16px] font-medium text-black md:order-2 md:col-span-1 ">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "gradient-text !border-b-2 border-purple-500" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/all-apps"}
              className={({ isActive }) =>
                isActive ? "gradient-text !border-b-2 border-purple-500" : ""
              }
            >
              App
            </NavLink>
            <NavLink
              to={"/installation"}
              className={({ isActive }) =>
                isActive ? "gradient-text !border-b-2 border-purple-500" : ""
              }
            >
              Installation
            </NavLink>
          </div>
          <div className=" md:order-3 md:col-span-1 col-span-1 flex justify-end">
            <a
              href="https://github.com/kamruj-akash/"
              target="blank"
              className="btn gradient-btn"
            >
              <FaGithub /> Contribute
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
