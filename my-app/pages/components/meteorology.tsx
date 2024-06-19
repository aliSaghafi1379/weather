import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";

const Meteorology = () => {
  return (
    <div className="w-full h-14 border-b border-gray-300 bg-[#f4f4f4] flex justify-center items-center">
      <span className="w-11/12">
        <Link href="/" className="flex justify-end items-center gap-2">
          <p className="font-medium text-base">هواشناسی</p>
          <ArrowForwardIosIcon sx={{ width: 20, height: 20 }} />
        </Link>
      </span>
    </div>
  );
};

export default Meteorology;
