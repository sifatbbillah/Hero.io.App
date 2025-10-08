import { FaDownload, FaStar } from "react-icons/fa6";
import { NavLink } from "react-router";

const AppCard = ({ appData }) => {
  const { id, image, title, ratingAvg, downloads } = appData;

  return (
    <NavLink
      to={`/appDetails/${id}`}
      className="bg-white p-5 cursor-pointer transition duration-100 hover:shadow-gray-200 hover:shadow-xl hover:translate-y-0.5"
    >
      <div className="max-h-[316px] min-h-[250px] w-full rounded-xl overflow-hidden flex justify-center items-center bg-gray-100">
        <img src={image} alt={title} />
      </div>
      <h1 className="text-xl font-medium text-[#001931] mt-5 mb-1">{title}</h1>
      <div className="flex justify-between">
        <p
          className="bg-[#F1F5E8] py-2 px-3 items-center justify-center
         rounded-md text-green-500 flex gap-1 text-[16px] font-medium"
        >
          <FaDownload /> {downloads}M
        </p>
        <p
          className="bg-[#FFF0E1] py-2 px-3 items-center justify-center
         rounded-md text-orange-500 flex gap-1 text-[16px] font-medium"
        >
          <FaStar /> {ratingAvg}
        </p>
      </div>
    </NavLink>
  );
};

export default AppCard;
