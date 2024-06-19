import { Skeleton } from "@mui/material";

const Loader = () => {
  const val = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  return val.map((inf) => (
    <div
      key={inf.id}
      className="w-[53px] h-[155px] p-1 rounded-xl bg-[#e5e5e5] first:bg-[rgb(120,155,208)] first:!text-white text-[rgb(120,155,208)]"
    >
      <div className="w-full h-full flex flex-col items-center">
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={40} height={60} />
        <Skeleton variant="text" width={40} height={40} />
      </div>
    </div>
  ));
};

export default Loader;
