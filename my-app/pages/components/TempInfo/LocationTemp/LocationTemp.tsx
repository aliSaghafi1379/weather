import { Skeleton } from "@mui/material";
import useData from "@/pages/hooks/useData";
import WeatherTemp from "./weather-temp";
import PlaceIcon from "@mui/icons-material/Place";

const LocationTemp = () => {
  const { data, loading } = useData();
  return (
    <div className="text-white w-full flex justify-center items-center">
      <div className="p-10 flex flex-col justify-center items-center gap-1 text-sm">
        {!loading ? (
          <>
            <span className="flex flex-row items-center gap-1">
              <p>{data.location_name}</p>
              <PlaceIcon sx={{ fontSize: 14 }} />
            </span>
            <WeatherTemp data={data} />
            <span className="flex flex-row items-center text-sm">
              <p>{data.weather.desc}</p>
            </span>
          </>
        ) : (
          <>
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem" }}
              width={210}
              height={30}
            />
            <Skeleton
              animation="wave"
              variant="rounded"
              width={210}
              height={60}
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem" }}
              width={210}
              height={30}
            />
          </>
        )}

        <span></span>
      </div>
    </div>
  );
};

export default LocationTemp;
