import Calendar from "./Calendar";
import LocationTemp from "./LocationTemp/LocationTemp";
import MoreInfo from "./MoreInfo";

const TempInfo = () => {
  return (
    <div className="w-full rounded-xl bg-[radial-gradient(86.6%_79.1%_at_49.48%_43.75%,rgba(120,155,208,0.9)0%,rgba(19,67,140,0.9)100%)] pb-4 md:w-[720px]">
      <Calendar />
      <LocationTemp />
      <MoreInfo />
    </div>
  );
};

export default TempInfo;
