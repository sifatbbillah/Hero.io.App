import errorImg from "../assets/App-Error.png";
const AppError = ({ setSearchTerm }) => {
  return (
    <div className="flex flex-col justify-centre items-center py-15 text-center">
      <img src={errorImg} alt="" />
      <h1 className="text-5xl font-semibold text-[#001931] mt-5 mb-2">
        Oops, No App found!
      </h1>
      <p className="text-xl text-[#627382] font-normal mb-8">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <button
        onClick={() => setSearchTerm("")}
        className="gradient-btn py-4 px-10 rounded-xl cursor-pointer text-[16px] font-semibold inline-block"
      >
        Go Back
      </button>
    </div>
  );
};

export default AppError;
