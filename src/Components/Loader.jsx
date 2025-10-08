import logo from "../assets/logo.png";

const Loader = () => {
  const letters = ["L", "O", "A", "D", "I", "N", "G"];

  return (
    <div className="flex items-center justify-center h-[calc(100vh-250px)] bg-gray-300">
      {/* Spinner Container */}
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Center Logo with subtle shadow */}
        <img
          src={logo}
          alt="Loading Logo"
          className="w-28 h-28 rounded-full shadow-lg animate-pulse z-10"
        />

        {/* Orbiting Letters */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-full h-full"
            style={{
              animation: "spin 5s linear infinite",
            }}
          >
            {letters.map((letter, idx) => {
              const angle = (idx / letters.length) * 360;
              return (
                <div
                  key={idx}
                  className="absolute font-extrabold text-xl md:text-2xl"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${angle}deg) translate(90px) rotate(-${angle}deg)`,
                    color: `hsl(${idx * 50}, 70%, 25%)`,
                    textShadow: "0 0 6px rgba(0,0,0,0.3)",
                  }}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Loading Subtitle */}
      <p className="mt-6 text-gray-700 text-lg animate-pulse text-center">
        Loading your apps...
      </p>

      {/* Inline CSS for spin animation */}
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
