import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import AppCard from "../Components/AppCard";
import AppError from "../Components/AppError";
import Container from "../Components/Container";
import Loader from "../Components/Loader";
import PageTitle from "../Components/PageTitle";
import useLoadAppData from "../Hooks/useLoadAppData";

const AllApps = () => {
  const [appDataRaw, loading] = useLoadAppData();
  const [searchTerm, setSearchTerm] = useState("");
  const [showLoader, setShowLoader] = useState(true);

  // Ensure appData is always an array
  const appData = Array.isArray(appDataRaw) ? appDataRaw : [];

  // 7-second loader on initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 500); // 7 seconds
    return () => clearTimeout(timer);
  }, []);

  const onchangeHandler = (e) => setSearchTerm(e.target.value);

  // Filter safely
  const filteredData = appData.filter((item) =>
    item.title?.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <Container>
      {showLoader || loading ? (
        <Loader />
      ) : filteredData.length === 0 ? (
        <AppError setSearchTerm={setSearchTerm} />
      ) : (
        <main>
          <PageTitle
            title={"Our All Applications"}
            subTitle={
              "Explore All Apps on the Market developed by us. We code for Millions"
            }
          />

          <div className="mb-5 flex flex-col gap-5 justify-between items-center md:flex-row">
            <h1 className="font-semibold text-2xl text-[#001931]">
              ({filteredData.length}) Apps Found
            </h1>
            <div className="flex border ps-4 rounded-md border-[#D2D2D2] items-center justify-center min-w-[400px] text-[#627382]">
              <FaSearch />
              <input
                onChange={onchangeHandler}
                value={searchTerm}
                className="w-full min-h-[44px] ps-2"
                type="text"
                name="search"
                placeholder="Search App"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-20">
            {filteredData.map((app) => (
              <AppCard key={app.id} appData={app} />
            ))}
          </div>
        </main>
      )}
    </Container>
  );
};

export default AllApps;
