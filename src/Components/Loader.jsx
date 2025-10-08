import logo from "../assets/logo.png";
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-250px)]">
      <div className="flex flex-col items-center space-y-6">
        {/* Animated Logo */}
        <div className="animate-spin ">
          <img
            src={logo}
            alt="Loading Logo"
            className="w-32 h-32 animate-pulse"
          />
        </div>
        {/* Loading Text */}
        <p className="text-black text-xl font-medium tracking-wide animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loader;
