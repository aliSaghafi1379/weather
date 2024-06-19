import InfoHome from "./components/infoHome";
import useGeoLocation from "./hooks/useGeoLocation";
import { Alert } from "@mui/material";
const PN = require("persian-number");

export const Pn = (par: number) => {
  return PN.convertEnToPe(Math.floor(par));
};

const Home = () => {
  const { err } = useGeoLocation();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full h-full p-5 flex flex-col gap-10 justify-center items-center md:w-[768px] md:rounded-3xl">
        {err && (
          <div>
            <Alert severity="error">{err}</Alert>
          </div>
        )}
        <InfoHome />
      </div>
    </div>
  );
};

export default Home;
