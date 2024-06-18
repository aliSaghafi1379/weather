import useInfoTemp from "@/pages/hooks/useInfoTemp";
import { Skeleton } from "@mui/material";
import Image from "next/image";

const MoreInfo = () => {
  const { infoMore } = useInfoTemp();
  return (
    <div className="w-full px-4">
      <div className="h-28 flex flex-row-reverse gap-2 overflow-x-scroll whitespace-nowrap scrollbar-none mr-3 text-[rgb(58,61,66)] sm:justify-between">
        {infoMore ? (
          infoMore.map((inf) => (
            <div
              className="w-[88px] h-full bg-white shrink-0 rounded-lg px-3 py-2"
              key={inf.id}
            >
              <div className="w-full h-full flex flex-col justify-between items-center">
                <span className="text-[11px] flex flex-col justify-center items-center">
                  <p className="font-semibold">{inf.title}</p>
                  {inf.title === "طلوع" ? (
                    <p className="text-xs">{inf.status}</p>
                  ) : (
                    ""
                  )}
                </span>
                <Image
                  alt="calendar"
                  loading="lazy"
                  width={inf.size}
                  height={inf.size}
                  decoding="async"
                  data-nimg="1"
                  src={inf.src}
                />
                {inf.sunsets ? (
                  <span className="text-[11px] flex flex-col justify-center items-center">
                    <p className="font-semibold">{inf.sunsets.title}</p>
                    <p>{inf.sunsets.status}</p>
                  </span>
                ) : (
                  <p className="text-[10px] text-[rgb(58,61,66)]">
                    {inf.status}
                  </p>
                )}
              </div>
            </div>
          ))
        ) : (
          <>
            <Skeleton
              animation="wave"
              variant="rounded"
              width={210}
              height={100}
            />
            <Skeleton
              animation="wave"
              variant="rounded"
              width={210}
              height={100}
            />
            <Skeleton
              animation="wave"
              variant="rounded"
              width={210}
              height={100}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MoreInfo;
