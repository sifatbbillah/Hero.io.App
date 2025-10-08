import { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { useParams } from "react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import Swal from "sweetalert2";
import Container from "../Components/Container";
import Loader from "../Components/Loader";
import useLoadAppData from "../Hooks/useLoadAppData";
import { getDataFromLs, saveDataToLs } from "../utilities/LocalStorage";

const AppDetails = () => {
  const [appData, loading] = useLoadAppData();
  const { id: paramId } = useParams();
  const matchedData = appData?.find((data) => data.id == paramId) || [];
  const {
    id,
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratings,
    ratingAvg,
    downloads,
  } = matchedData || [];

  // installation apps function
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const savedData = getDataFromLs();
    if (savedData.includes(id)) {
      setInstalled(true);
    }
  }, [id]);

  const handleAppInstallation = (appId) => {
    const savedData = getDataFromLs();
    if (savedData.includes(id)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${title} already installed!`,
        footer: '<a href="/installation">See Installed App</a>',
      });
    } else {
      Swal.fire({
        title: `${title}`,
        text: "Installed Successful!",
        icon: "success",
        draggable: true,
      });
      setInstalled(true);
      saveDataToLs(appId);
    }
  };

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <div className="py-20 max-w-7xl mx-auto ">
          <div className="flex gap-10 items-centre flex-col  items-center md:flex-row pb-12 border-b-1 border-gray-400">
            <div className="min-w-[320px] max-w-[450px] h-[350px] rounded-xl overflow-hidden bg-white rounded-tl-4xl rounded-br-4xl flex justify-center items-center">
              <img src={image} alt={title} />
            </div>
            {/* main content */}
            <div className="h-full w-full flex flex-col justify-center items-center md:block ">
              <div className="pb-6 border-b-1 border-gray-400 w-full flex justify-center flex-col items-center text-center md:text-left md:block">
                <h1 className="text-[#001931] font-semibold text-3xl">
                  {title}
                </h1>
                <p className="font-medium text-xl text-[#627382]">
                  Developed by
                  <span className="text-purple-500"> {companyName}</span>
                </p>
              </div>
              {/* download, review, ratings */}
              <div className="flex gap-5 md:gap-10 lg:gap-14 my-8">
                <div>
                  <FaDownload className="text-3xl text-green-600" />
                  <p className="text-[16px] font-normal text-[#001931] my-2">
                    Downloads
                  </p>
                  <h1 className="text-2xl font-black text-[#001931]">
                    {downloads}M
                  </h1>
                </div>
                <div>
                  <FaStar className="text-3xl text-green-600" />
                  <p className="text-[16px] font-normal text-[#001931] my-2">
                    Average Ratings
                  </p>
                  <h1 className="text-2xl font-black text-[#001931]">
                    {ratingAvg}
                  </h1>
                </div>
                <div>
                  <MdReviews className="text-3xl text-green-600" />
                  <p className="text-[16px] font-normal text-[#001931] my-2">
                    Total Reviews
                  </p>
                  <h1 className="text-2xl font-black text-[#001931]">
                    {reviews}K
                  </h1>
                </div>
              </div>

              <button
                onClick={() => handleAppInstallation(id)}
                className="btn py-7 px-5 btn-ghost bg-green-500 rounded-md text-white font-semibold text-xl"
              >
                {!installed ? `Install Now (${size} MB)` : "Installed"}
              </button>
            </div>
          </div>
          {/* recharts */}
          <div className=" mx-auto mt-10 pb-12 border-b-1 border-gray-400">
            <h1 className="text-2xl font-semibold text-[#001931 ] mb-5">
              Ratings
            </h1>
            <div className="w-full h-[340px]">
              <ResponsiveContainer>
                <BarChart data={ratings} layout="vertical">
                  <XAxis type="Number" />
                  <YAxis dataKey="name" type="category" />

                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <Bar dataKey="count" fill="#8884d8" barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-10">
            <h1 className="font-semibold text-2xl text-[#001931]">
              Description
            </h1>
            <p className="text-xl mt-3 font-normal text-gray-500">
              {description}
            </p>
          </div>
        </div>
      )}
    </Container>
  );
};

export default AppDetails;
