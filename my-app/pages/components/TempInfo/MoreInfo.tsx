import Box from "./MoreInfoDetails/box";
import useData from "@/pages/hooks/useData";
const PN = require("persian-number");

const MoreInfo = () => {
  const { data } = useData();
  const sunrise = new Date(data?.sunrise);
  const sunriseTime = PN.convertEnToPe(
    sunrise.getHours() + " : " + sunrise.getMinutes()
  );
  const sunset = new Date(data?.sunset);
  const sunsetTime = PN.convertEnToPe(
    sunset.getHours() + " : " + sunset.getMinutes()
  );

  return (
    <div className="w-full px-4">
      <div className="h-28 flex flex-row-reverse gap-2 overflow-x-scroll whitespace-nowrap scrollbar-none mr-3 text-[rgb(58,61,66)] sm:justify-between">
        <Box
          name={"سرعت باد"}
          inf={data?.wind?.speed}
          val={"متر / ساعت"}
          icon={
            "https://farm.mcinext.com/_next/static/media/navigation.a2688b3b.svg"
          }
          w={20}
        />
        <Box
          name={"نقطه شبنم"}
          inf={data?.dew_point}
          icon={"https://farm.mcinext.com/_next/static/media/dew.08b3ea9a.svg"}
          w={30}
        />
        <Box
          name={"رطوبت"}
          inf={data?.humidity}
          val="%"
          icon={
            "https://farm.mcinext.com/_next/static/media/humidity.5602dd5c.svg"
          }
          w={30}
        />
        <Box
          name={"طلوع"}
          inf={data?.humidity}
          val="%"
          sunriseTime={sunriseTime}
          sunsetTime={sunsetTime}
          icon={
            "https://farm.mcinext.com/_next/static/media/sunrise.a0cc69dd.svg"
          }
          w={45}
        />
        <Box
          name={"UV"}
          inf={data?.uv}
          icon={"https://farm.mcinext.com/_next/static/media/uv.7bceb313.svg"}
          w={40}
        />
        <Box
          name={"فشار هوا"}
          inf={data?.humidity}
          val="hpa"
          icon={
            "https://farm.mcinext.com/_next/static/media/airPressure.d22077b4.svg"
          }
          w={40}
        />
      </div>
    </div>
  );
};

export default MoreInfo;
