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
            "https://cdn.meteocons.com/3.0.0-next.10/svg/monochrome/wind.svg"
          }
          w={20}
        />
        <Box
          name={"نقطه شبنم"}
          inf={data?.dew_point}
          icon={"https://cdn.meteocons.com/3.0.0-next.10/svg/fill/pollen-weed.svg"}
          w={30}
        />
        <Box
          name={"رطوبت"}
          inf={data?.humidity}
          val="%"
          icon={
            "https://cdn.meteocons.com/3.0.0-next.10/svg/fill/humidity.svg"
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
            "https://cdn.meteocons.com/3.0.0-next.10/svg/fill/sunrise.svg"
          }
          w={45}
        />
        <Box
          name={"UV"}
          inf={data?.uv}
          icon={"https://cdn.meteocons.com/3.0.0-next.10/svg/fill/uv-index.svg"}
          w={40}
        />
        <Box
          name={"فشار هوا"}
          inf={data?.humidity}
          val="hpa"
          icon={
            "https://cdn.meteocons.com/3.0.0-next.10/svg/fill/pressure-high.svg"
          }
          w={40}
        />
      </div>
    </div>
  );
};

export default MoreInfo;
