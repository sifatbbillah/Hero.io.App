import logo from "../assets/logo.png";

const Loader = () => {
  const letters = Array.isArray(["L", "A", "D", "I", "N", "G"])
    ? ["L", "A", "D", "I", "N", "G"]
    : [];
  const colors = ["#EF4444", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6", "#EC4899"];

  return (
    <div className="flex items-center justify-center h-[calc(100vh-250px)] px-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {letters.length > 0 && (
          <>
            <h1
              className="font-bold"
              style={{ color: colors[0], fontSize: "clamp(3rem, 10vw, 6rem)" }}
            >
              {letters[0]}
            </h1>

            <div className="animate-spin">
              <img
                src={logo}
                alt="Loading Logo"
                className="w-[60px] sm:w-[100px] md:w-[150px] lg:w-[200px] animate-pulse"
              />
            </div>

            {(letters.slice(1) || []).map((letter, idx) => (
              <h1
                key={idx}
                className="font-bold"
                style={{ color: colors[idx + 1], fontSize: "clamp(3rem, 10vw, 6rem)" }}
              >
                {letter}
              </h1>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Loader;
