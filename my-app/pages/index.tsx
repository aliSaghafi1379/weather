import Link from "next/link";
import useData from "./hooks/useData";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
const PN = require("persian-number");

const Home = () => {
  const { loading, data } = useData();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full h-80 bg-white p-5 flex justify-center items-center md:w-[768px] md:rounded-3xl">
        <Link href={!loading ? "/weather" : "/"}>
          <div className="px-10 py-14 bg-white flex flex-col justify-center items-center shadow-[rgba(0,0,0,0.2)_0px_0px_6px_0px] rounded-lg">
            {loading ? (
              <CircularProgress sx={{ color: "gray" }} />
            ) : (
              <div className="w-full flex flex-col justify-center items-center">
                <span className="flex justify-between items-center">
                  <span className="flex items-center text-4xl font-semibold text-[rgb(80,119,86)]">
                    <p>
                      {data ? PN.convertEnToPe(Math.floor(data.temp.now)) : ""}
                    </p>
                    <p>&#xb0;</p>
                  </span>
                  <Image
                    alt="type"
                    loading="lazy"
                    decoding="async"
                    data-nimg="1"
                    src={data.weather.icon_type}
                    width={64}
                    height={64}
                  />
                </span>
                <span className="flex justify-center items-center gap-2 text-sm font-semibold">
                  <p>{data.location_name}</p>
                  <FmdGoodIcon sx={{ width: 20, height: 20 }} />
                </span>
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
