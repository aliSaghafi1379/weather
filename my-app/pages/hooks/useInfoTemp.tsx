import { useEffect, useState } from "react";
import useData from "./useData";
const PN = require("persian-number");
interface InfoMors {
  title: string;
  status: number | string;
  id: number;
  src: string;
  size: number;
  sunsets?:
    | undefined
    | {
        title: string;
        status: number | string;
        id: number;
        src: string;
      };
}
const useInfoTemp = () => {
  const { data, loading } = useData();
  const [infoMore, setInfoMore] = useState<InfoMors[]>();

  useEffect(() => {
    if (!loading) {
      const sunrise = new Date(data.sunrise);
      const sunriseTime = PN.convertEnToPe(
        sunrise.getHours() + " : " + sunrise.getMinutes()
      );
      const sunset = new Date(data.sunset);
      const sunsetTime = PN.convertEnToPe(
        sunset.getHours() + " : " + sunset.getMinutes()
      );
      setInfoMore([
        {
          title: "سرعت باد",
          status: "متر/ ساعت " + PN.convertEnToPe(data.wind.speed),
          id: 1,
          src: "https://farm.mcinext.com/_next/static/media/navigation.a2688b3b.svg",
          size: 20,
        },
        {
          title: "نقطه شبنم",
          status: PN.convertEnToPe(data.dew_point),
          id: 2,
          src: "https://farm.mcinext.com/_next/static/media/dew.08b3ea9a.svg",
          size: 30,
        },
        {
          title: "رطوبت",
          status: PN.convertEnToPe(data.humidity) + " %",
          id: 3,
          src: "https://farm.mcinext.com/_next/static/media/humidity.5602dd5c.svg",
          size: 30,
        },
        {
          title: "طلوع",
          status: sunriseTime,
          id: 4,
          src: "https://farm.mcinext.com/_next/static/media/sunrise.a0cc69dd.svg",
          size: 45,
          sunsets: {
            title: "غروب",
            status: sunsetTime,
            id: 5,
            src: "https://farm.mcinext.com/_next/static/media/sunrise.a0cc69dd.svg",
          },
        },

        {
          title: "UV",
          status: PN.convertEnToPe(data.uv),
          id: 6,
          src: "https://farm.mcinext.com/_next/static/media/uv.7bceb313.svg",
          size: 40,
        },
        {
          title: "فشار هوا",
          status: PN.convertEnToPe(data.pressure) + " hpa",
          id: 7,
          src: "https://farm.mcinext.com/_next/static/media/airPressure.d22077b4.svg",
          size: 40,
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, data]);
  return { infoMore };
};

export default useInfoTemp;
