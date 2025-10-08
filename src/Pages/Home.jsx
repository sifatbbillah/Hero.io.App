import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import HomeCount from "../Components/HomeCount/HomeCount";
import HomeApps from "../HomeAppsSection/HomeApps";
import Loader from "../Components/Loader";

const Home = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 500); // ⏱️ 7 seconds (7000 milliseconds)

    return () => clearTimeout(timer); // cleanup timer
  }, []);

  if (showLoader) {
    return <Loader />;
  }

  return (
    <>
      <Banner />
      <HomeCount />
      <HomeApps />
    </>
  );
};

export default Home;
