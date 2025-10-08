import axios from "axios";
import { useEffect, useState } from "react";

const useLoadAppData = () => {
  const [appData, setAppData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoader(true);
    axios(
      "https://raw.githubusercontent.com/kamruj-akash/hero.io-app_store/refs/heads/main/public/appData.json"
      // "../appData.json"
    )
      .then((data) => setAppData(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoader(false));
  }, []);

  return [appData, loader, error];
};

export default useLoadAppData;
