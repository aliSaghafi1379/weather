import { useState } from "react";
import FutureDays from "./futureDays";
import FutureHours from "./futureHours";
import TimeCh from "./TimeCh";

const Future = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="w-full rounded-xl border border-[#789BD0] p-3 mt-3 md:w-[720px]">
      <div className="w-full">
        <TimeCh show={show} setShow={setShow}/>
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
