import { NavLink } from "react-router";
import AppCard from "../Components/AppCard";
import Container from "../Components/Container";
import Loader from "../Components/Loader";
import PageTitle from "../Components/PageTitle";
import useLoadAppData from "../Hooks/useLoadAppData";

const HomeApps = () => {
  const [appData, loading] = useLoadAppData();
  const sliceAppData = appData.slice(0, 8);

  return (
    <Container>
      <PageTitle
        title={"Trending Apps"}
        subTitle={"Explore All Trending Apps on the Market developed by us"}
      />

      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {sliceAppData.map((appData) => (
            <AppCard key={appData.id} appData={appData} />
          ))}
        </div>
      )}

      <div className="text-center mt-10 mb-20">
        <NavLink
          to={"/all-apps"}
          className="gradient-btn py-4 px-10 rounded-xl cursor-pointer text-[16px] font-semibold inline-block "
        >
          Show All
        </NavLink>
      </div>
    </Container>
  );
};

export default HomeApps;
