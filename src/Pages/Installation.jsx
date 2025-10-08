import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import Container from "../Components/Container";
import InstallCard from "../Components/InstallCard";
import Loader from "../Components/Loader";
import PageTitle from "../Components/PageTitle";
import useLoadAppData from "../Hooks/useLoadAppData";
import { getDataFromLs } from "../utilities/LocalStorage";

const Installation = () => {
  const [appData, loader] = useLoadAppData();
  const [installedApp, setInstalledApp] = useState([]);
  useEffect(() => {
    const storedData = getDataFromLs();
    const filteredData = appData?.filter((data) =>
      storedData.includes(data.id)
    );
    setInstalledApp(filteredData);
  }, [appData]);

  return (
    <Container>
      <PageTitle
        title={"Your Installed Apps"}
        subTitle={"Explore All Trending Apps on the Market developed by us"}
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <h1 className="font-semibold text-[#001931] text-2xl">
            {installedApp.length} Apps Found
          </h1>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By Size <FaArrowDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {loader ? (
            <Loader />
          ) : (
            installedApp.map((app) => (
              <InstallCard
                key={app.id}
                appData={app}
                installedApp={installedApp}
                setInstalledApp={setInstalledApp}
              />
            ))
          )}
        </div>
      </div>
    </Container>
  );
};

export default Installation;
