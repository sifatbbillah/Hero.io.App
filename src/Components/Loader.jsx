import logo from "../assets/logo.png";

const Loader = () => {
  const letters = ["L", "A", "D", "I", "N", "G"];
  const colors = ["#EF4444", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6", "#EC4899"];

  return (
    <div className="flex items-center justify-center h-[calc(100vh-250px)]">
      <div className="flex flex-row items-center space-x-2">
        {/* Letters before logo (first letter "L") */}
        <h1 className="text-9xl font-bold" style={{ color: colors[0] }}>
          {letters[0]}
        </h1>

        {/* Animated Logo */}
        <div className="animate-spin">
          <img src={logo} alt="Loading Logo" className="w-32 h-32 animate-pulse" />
        </div>

        {/* Letters after logo */}
        {letters.slice(1).map((letter, idx) => (
          <h1
            key={idx}
            className="text-9xl font-bold"
            style={{ color: colors[idx + 1] }}
          >
            {letter}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Loader;
