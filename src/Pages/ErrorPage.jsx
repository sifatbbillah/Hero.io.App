import { NavLink } from "react-router";
import errorImg from "../assets/error-404.png";
const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-centre items-center py-10 text-center">
      <img src={errorImg} alt="" />
      <h1 className="text-5xl font-semibold text-[#001931] mt-5 mb-2">
        Oops, page not found!
      </h1>
      <p className="text-xl text-[#627382] font-normal mb-8">
        The page you are looking for is not available.
      </p>
      <NavLink
        to={"/"}
        className="gradient-btn py-4 px-10 rounded-xl cursor-pointer text-[16px] font-semibold inline-block"
      >
        Go Back
      </NavLink>
    </div>
  );
};

export default ErrorPage;
