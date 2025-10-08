import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import Container from "./Container";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#001931] text-white  p-10">
        <Container>
          <nav className="flex justify-between items-center pb-3 border-[#2d4256] border-b-1 mb-8">
            <div>
              <NavLink
                to={"/"}
                className="flex gap-2 justify-center items-center text-2xl uppercase font-bold  
           text-white"
              >
                <img className="w-10" src={logo} alt="" /> Hero.io
              </NavLink>
            </div>
            <div>
              <h4 className="text-sm mb-2">Social Links</h4>
              <div className="grid grid-flow-col gap-4">
                <NavLink className="text-2xl">
                  <FaXTwitter />
                </NavLink>
                <NavLink className="text-2xl">
                  <FaLinkedin />
                </NavLink>
                <NavLink className="text-2xl">
                  <FaFacebook />
                </NavLink>
              </div>
            </div>
          </nav>
          <aside className="text-center">
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              ACME Industries Ltd
            </p>
          </aside>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
