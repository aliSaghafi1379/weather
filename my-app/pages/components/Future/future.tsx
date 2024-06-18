import { useState } from "react";
import FutureDays from "./futureDays";
import FutureHours from "./futureHours";

const Future = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="w-full rounded-xl border border-[#789BD0] p-3 mt-3 md:w-[720px]">
      <div className="w-full">
        <div className="w-full border-b border-[#c0c4ce] relative overflow-hidden whitespace-nowrap">
          <div className="w-full flex flex-row-reverse text-[rgb(77,84,103)] text-sm">
            <button className="w-1/2 p-2" onClick={() => setShow(true)}>
              <p>روزانه</p>
            </button>
            <button className="w-1/2 p-2" onClick={() => setShow(false)}>
              <p>ساعتی</p>
            </button>
          </div>
          <span
            className={`w-1/2 h-[2px] bg-[rgb(120,155,208)] absolute transition-[all_300ms_cubic-bezier(0.4,0,0.2,1)_0ms] bottom-[0px] ${
              show ? "left-1/2" : "left-0"
            }`}
          ></span>
        </div>
        <div className="w-full mt-5">
          <div className="w-full flex flex-row-reverse items-center justify-between ">
            {show ? <FutureDays /> : <FutureHours />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;
