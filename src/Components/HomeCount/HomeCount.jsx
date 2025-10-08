import CountBox from "./CountBox";

const HomeCount = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center bg-linear-to-tl from-[#9f62f2] to-[#632ee3] py-20">
      <h1 className="text-white text-5xl font-bold text-center">
        Trusted by Millions, Built for You
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-20">
        <CountBox
          title={"Total Downloads"}
          number={"29.6M"}
          status={"21% more than last month"}
        />
        <CountBox
          title={"Total Reviews"}
          number={"906K"}
          status={"46% more than last month"}
        />
        <CountBox
          title={"Active Apps"}
          number={"132+"}
          status={"31 more will Launch"}
        />
      </div>
    </div>
  );
};

export default HomeCount;
