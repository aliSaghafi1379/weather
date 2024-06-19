import useData from "@/pages/hooks/useData";
import Image from "next/image";
import { date } from "../TempInfo/Calendar";
import { Pn } from "@/pages";
const PN = require("persian-number");

const Days = () => {
  const { data } = useData();

  return data?.future_days?.map((inf) => (
    <div
      key={inf.id}
      className="w-[53px] h-[155px] p-1 rounded-xl bg-[#e5e5e5] first:bg-[rgb(120,155,208)] first:!text-white text-[rgb(120,155,208)]"
    >
      <div className="w-full h-full flex flex-col justify-between items-center">
        <div className="w-10 h-10 border border-[rgb(120,155,208)] rounded-lg text-[rgb(120,155,208)]">
          {inf.date === "امروز" ? (
            <span className="w-full h-full flex justify-center items-center bg-white rounded-lg text-xs">
              <p>{inf.date}</p>
            </span>
          ) : (
            <span className="w-full h-full text-[8px] flex flex-col justify-center items-center">
              <p>{date(inf.date, { weekday: "long" })}</p>
              <p>
                {date(inf.date, { month: "numeric" })}/
                {date(inf.date, { day: "numeric" })}
              </p>
            </span>
          )}
        </div>
        <div className="w-full flex justify-center items-center">
          <Image
            alt="type"
            loading="lazy"
            decoding="async"
            data-nimg="1"
            src={inf.weather.icon_type}
            width={64}
            height={64}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <span
            className={`w-full flex justify-center items-center text-2xl ${
              inf.date === "امروز" ? "text-white" : "text-black"
            }`}
          >
            <p>{Pn(inf.temp.max)}</p>
            <p>&#xb0;</p>
          </span>
          <span className="w-full flex justify-center items-center text-xs">
            <p>{Pn(inf.temp.min)}</p>
            <p>&#xb0;</p>
          </span>
        </div>
      </div>
    </div>
  ));
};

export default Days;
