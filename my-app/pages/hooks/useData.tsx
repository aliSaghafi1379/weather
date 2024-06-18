import { useEffect, useState } from "react";
import useGeoLocation from "./useGeoLocation";
export interface IUsers {
  data: string;
  location_name: string;
  temp: {
    now: number;
    max: number;
    min: number;
  };
  weather: {
    icon_type: string;
    desc: string;
  };
  wind: {
    speed: number;
  };
  dew_point: number;
  humidity: number;
  sunrise: number;
  sunset: number;
  uv: number;
  pressure: number;
  future_hours: {
    date: number | string;
    weather: {
      icon_type: string;
      desc: string;
    };
    temp: number;
    id: string;
  }[];
  future_days: {
    date: number | string;
    weather: {
      icon_type: string;
      desc: string;
    };
    temp: {
      min: number;
      max: number;
    };
    id: number;
  }[];
}
const useData = () => {
  const location = useGeoLocation();

  const [data, setData] = useState<IUsers>({} as IUsers);
  const [loading, steLoading] = useState(true);

  const latitude = Math.floor(location.latitude);
  const longitude = Math.floor(location.longitude);

  const fetching = (lat: number, long: number) => {
    fetch(`http://localhost:3000/api/data?lat=${lat}&long=${long}`)
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setData(d);
        steLoading(false);
      });
  };

  useEffect(() => {
    if (latitude && longitude) {
      setTimeout(() => {
        fetching(latitude, longitude);
      }, 2000);
    }
  }, [latitude, longitude, data]);
  return { loading, data };
};

export default useData;
export type { IUsers as IUsersType };
