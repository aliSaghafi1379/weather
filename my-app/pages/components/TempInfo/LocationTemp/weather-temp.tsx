import { Pn } from "@/pages";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import Image from "next/image";

interface DataType {
  data: {
    temp: {
      now: number;
      min: number;
      max: number;
    };
  };
}

const WeatherTemp = ({ data }: DataType) => {
  return (
    <span className="flex flex-row justify-between items-center">
      <Image
        alt="weather"
        loading="lazy"
        width={64}
        height={64}
        decoding="async"
        data-nimg="1"
        src="https://cdn.meteocons.com/3.0.0-next.10/svg/fill/cloudy.svg"
      />
      <p className="text-3xl">
        {Pn(data?.temp?.now)}
        <span>&#xb0;</span>
      </p>
      <div className="flex flex-col justify-center items-center">
        <span className="flex flex-row-reverse items-center">
          <p className="text-xs">{Pn(data?.temp?.min)}</p>
          <NorthIcon sx={{ fontSize: 11, color: "green" }} />
        </span>
        <span className="flex flex-row-reverse items-center">
          <p className="text-xs">{Pn(data?.temp?.max)}</p>
          <SouthIcon sx={{ fontSize: 11, color: "red" }} />
        </span>
      </div>
    </span>
  );
};

export default WeatherTemp;
