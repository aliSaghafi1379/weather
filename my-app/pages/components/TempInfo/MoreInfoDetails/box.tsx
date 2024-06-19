import useData from "@/pages/hooks/useData";
import { Skeleton } from "@mui/material";
import Image from "next/image";
const PN = require("persian-number");

type Info = {
  inf: number;
  val?: string;
  name: string;
  icon: string;
  w: number;
  sunriseTime?: string | number;
  sunsetTime?: string | number;
};

const Box = ({ inf, val, name, icon, w, sunsetTime, sunriseTime }: Info) => {
  const { data, loading } = useData();
  return (
    <div className="w-[88px] h-full bg-white shrink-0 rounded-lg px-3 py-2">
      <div className="w-full h-full flex flex-col justify-between items-center">
        <span className="text-[11px] flex flex-col justify-center items-center">
          <p className="font-semibold">{name}</p>
          {name === "طلوع" && loading ? (
            <Skeleton variant="text" width={50} height={25} />
          ) : (
            <p className="text-xs">{sunriseTime}</p>
          )}
        </span>
        <Image
          alt="calendar"
          loading="lazy"
          width={w}
          height={w}
          decoding="async"
          data-nimg="1"
          src={icon}
        />
        <div className="text-[10px] text-[rgb(58,61,66)]">
          {sunsetTime ? (
            <span className="text-[11px] flex flex-col justify-center items-center">
              <p className="font-semibold">غروب</p>
              {!loading && <p>{sunsetTime}</p>}
              {loading && <Skeleton variant="text" width={50} height={25} />}
            </span>
          ) : (
            !loading && (
              <span className="flex">
                <p>{val}</p>
                <p>{PN.convertEnToPe(inf)}</p>
              </span>
            )
          )}
          {loading && <Skeleton variant="text" width={50} height={25} />}
        </div>
      </div>
    </div>
  );
};

export default Box;
