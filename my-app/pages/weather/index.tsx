import Future from "../components/Future/future";
import TempInfo from "../components/TempInfo/TempInfo";
import Meteorology from "../components/meteorology";

const Weather = () => {
  return (
    <div className="w-full bg-white h-full md:h-screen pb-4">
      <Meteorology />
      <div className="w-full flex justify-center align-center ">
        <div className="w-11/12 mt-2 flex flex-col items-center">
          <TempInfo />
          <Future />
        </div>
      </div>
    </div>
  );
};

export default Weather;
