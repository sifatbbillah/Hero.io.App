// import { FaApple, FaGooglePlay } from "react-icons/fa";
import appStore from "../assets/appStore.svg";
import heroBottomImg from "../assets/hero.png";
import playStore from "../assets/playStore.svg";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-20 bg-[#f5f5f5] ">
      <h1 className="text-7xl font-bold text-center">
        We Build <br />
        <span className="gradient-text font-black">Productive</span> Apps
      </h1>
      <p className="max-w-[1000px] text-center pt-4 pb-8">
        t HERO.IO, we create innovative applications that make life easier, smarter, and more engaging. We strive to bring your ideas to life through digital experiences that truly inspire and connect.
      </p>

      <div className="flex space-x-4 mb-10">
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          className="flex items-center space-x-2 border rounded-lg px-4 py-2 hover:bg-gray-100 transition"
        >
          <img className="w-10" src={appStore} alt="store-icon" />
          <div className="text-left">
            <p className="text-xs">Download on</p>
            <p className="text-sm font-semibold">App Store</p>
          </div>
        </a>

        <a
          href="https://play.google.com/store"
          target="_blank"
          className="flex items-center space-x-2 border rounded-lg px-4 py-2 hover:bg-gray-100 transition"
        >
          <img className="w-10" src={playStore} alt="store-icon" />
          <div className="text-left">
            <p className="text-xs">Get it on</p>
            <p className="text-sm font-semibold">Play Store</p>
          </div>
        </a>
      </div>

      <div>
        <img src={heroBottomImg} alt="heroBottomImg" />
      </div>
    </div>
  );
};

export default Banner;
