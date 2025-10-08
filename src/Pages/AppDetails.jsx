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
  const [appDataRaw, loading] = useLoadAppData();
  const { id: paramId } = useParams();

  const appData = Array.isArray(appDataRaw) ? appDataRaw : [];

  const matchedData = appData.find((data) => data.id == paramId) || {};
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
  } = matchedData;

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const savedData = getDataFromLs();
    if (id && savedData.includes(id)) {
      setInstalled(true);
    }
  }, [id]);

  const handleAppInstallation = (appId) => {
    const savedData = getDataFromLs();
    if (!id) return;

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
        text: "Installed Successfully!",
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
      ) : Object.keys(matchedData).length === 0 ? (
        <div className="text-center py-20 text-xl font-semibold text-red-600">
          App not found.
        </div>
      ) : (
        <div className="py-20 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center pb-12 border-b border-gray-400">
            <div className="min-w-[320px] max-w-[450px] h-[350px] rounded-xl overflow-hidden bg-white flex justify-center items-center">
              <img src={image} alt={title} className="object-contain h-full" />
            </div>

            <div className="h-full w-full flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <div className="pb-6 border-b border-gray-400 w-full flex flex-col items-center md:items-start">
                <h1 className="text-[#001931] font-semibold text-3xl">{title}</h1>
                <p className="font-medium text-xl text-[#627382]">
                  Developed by <span className="text-purple-500">{companyName}</span>
                </p>
              </div>

              <div className="flex gap-5 md:gap-10 lg:gap-14 my-8">
                <div className="text-center">
                  <FaDownload className="text-3xl text-green-600" />
                  <p className="text-[16px] font-normal text-[#001931] my-2">
                    Downloads
                  </p>
                  <h1 className="text-2xl font-black text-[#001931]">
                    {downloads || 0}M
                  </h1>
                </div>
                <div className="text-center">
                  <FaStar className="text-3xl text-green-600" />
                  <p className="text-[16px] font-normal text-[#001931] my-2">
                    Average Ratings
                  </p>
                  <h1 className="text-2xl font-black text-[#001931]">
                    {ratingAvg || 0}
                  </h1>
                </div>
                <div className="text-center">
                  <MdReviews className="text-3xl text-green-600" />
                  <p className="text-[16px] font-normal text-[#001931] my-2">
                    Total Reviews
                  </p>
                  <h1 className="text-2xl font-black text-[#001931]">
                    {reviews || 0}K
                  </h1>
                </div>
              </div>

              <button
                onClick={() => handleAppInstallation(id)}
                className="btn py-7 px-5 btn-ghost bg-green-500 rounded-md text-white font-semibold text-xl"
              >
                {!installed ? `Install Now (${size || 0} MB)` : "Installed"}
              </button>
            </div>
          </div>

          <div className="mx-auto mt-10 pb-12 border-b border-gray-400">
            <h1 className="text-2xl font-semibold text-[#001931] mb-5">Ratings</h1>
            <div className="w-full h-[340px]">
              {Array.isArray(ratings) && ratings.length > 0 ? (
                <ResponsiveContainer>
                  <BarChart data={ratings} layout="vertical">
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="count" fill="#8884d8" barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-gray-500 text-center mt-20">
                  No ratings available.
                </p>
              )}
            </div>
          </div>

          <div className="mt-10">
            <h1 className="font-semibold text-2xl text-[#001931]">Description</h1>
            <p className="text-xl mt-3 font-normal text-gray-500">
              {description || "No description available."}
            </p>
          </div>
        </div>
      )}
    </Container>
  );
};

export default AppDetails;
