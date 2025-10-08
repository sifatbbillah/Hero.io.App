import logo from "../assets/logo.png";
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-250px)]">
      <div className="flex flex-row items-center space-y-6">
        <h1 className="text-9xl font-bold text-blue-500">L   </h1>
        {/* Animated Logo */}
        <div className="animate-spin ">
          <img
            src={logo}
            alt="Loading Logo"
            className="w-32 h-32 animate-pulse"
          />
        </div>
        <h1 className="text-9xl font-bold text-blue-500">  D I N G</h1>
      </div>
    </div>
  );
};

export default Loader;
