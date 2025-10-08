import { BiStar } from "react-icons/bi";
import { FaDownload } from "react-icons/fa6";
import Swal from "sweetalert2";
import { removeFromLs } from "../utilities/LocalStorage";

const InstallCard = ({ appData, installedApp, setInstalledApp }) => {
  const { id, image, title, size, reviews, downloads } = appData || [];

  // delete app
  const uninstallationHandler = (id) => {
    Swal.fire({
      title: "Want Uninstall?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Uninstall!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Uninstalled!",
          text: `${title} Has been Uninstalled`,
          icon: "success",
        });
        const filterDelete = installedApp.filter((app) => app.id != id);
        setInstalledApp(filterDelete);
        removeFromLs(id);
      }
    });
  };

  return (
    <>
      <div className="flex  items-center justify-between p-5 bg-white rounded-2xl mb-5">
        <div className="flex gap-8 items-center">
          <div className="w-20 h-20 rounded-xl bg-gray-100">
            <img src={image} alt="" />
          </div>
          <div>
            <h1 className="font-medium text-xl text-[#001931] mb-1">{title}</h1>
            <div className="flex gap-5 items-center">
              <div className="flex gap-1 items-center text-green-500">
                <FaDownload /> {downloads}M
              </div>
              <div className="flex gap-1 items-center text-orange-500">
                <BiStar /> {reviews}K
              </div>
              <h1 className="text-gray-500">{size}MB</h1>
            </div>
          </div>
        </div>
        <button
          onClick={() => uninstallationHandler(id)}
          className="btn btn-success text-white font-bold"
        >
          Uninstall
        </button>
      </div>
    </>
  );
};

export default InstallCard;
