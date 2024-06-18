import Link from "next/link";
import Future from "../components/Future/future";
import TempInfo from "../components/TempInfo/TempInfo";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Weather = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full h-14 border-b border-gray-300 bg-[#f4f4f4] flex justify-center items-center">
        <span className="w-11/12">
          <Link href="/" className="flex justify-end items-center gap-2">
            <p className="font-medium text-base">هواشناسی</p>
            <ArrowForwardIosIcon sx={{width:20 , height:20}}/>
          </Link>
        </span>
      </div>
      <div className="w-full flex justify-center align-center">
        <div className="w-11/12 mt-2 flex flex-col items-center">
          <TempInfo />
          <Future />
        </div>
      </div>
    </div>
  );
};

export default Weather;
