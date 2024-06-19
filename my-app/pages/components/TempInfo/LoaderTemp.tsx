import useInfoTemp from "@/pages/hooks/useInfoTemp";
import { Skeleton } from "@mui/material";
import Image from "next/image";

const LoaderTemp = () => {
  const dataMore = [
    {
      title: "سرعت باد",
      id: 1,
      src: "https://farm.mcinext.com/_next/static/media/navigation.a2688b3b.svg",
      size: 20,
    },
    {
      title: "نقطه شبنم",
      id: 2,
      src: "https://farm.mcinext.com/_next/static/media/dew.08b3ea9a.svg",
      size: 30,
    },
    {
      title: "رطوبت",
      id: 3,
      src: "https://farm.mcinext.com/_next/static/media/humidity.5602dd5c.svg",
      size: 30,
    },
    {
      title: "طلوع",
      id: 4,
      src: "https://farm.mcinext.com/_next/static/media/sunrise.a0cc69dd.svg",
      size: 45,
      sunsets: {
        title: "غروب",
        id: 5,
        src: "https://farm.mcinext.com/_next/static/media/sunrise.a0cc69dd.svg",
      },
    },

    {
      title: "UV",
      id: 6,
      src: "https://farm.mcinext.com/_next/static/media/uv.7bceb313.svg",
      size: 40,
    },
    {
      title: "فشار هوا",
      id: 7,
      src: "https://farm.mcinext.com/_next/static/media/airPressure.d22077b4.svg",
      size: 40,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center gap-5 items-center">
      <div>
        <Skeleton variant="rounded" width={200} height={150} />
      </div>
      <div className="w-full px-4">
        <div className="h-28 flex flex-row-reverse gap-2 overflow-x-scroll whitespace-nowrap scrollbar-none mr-3 text-[rgb(58,61,66)] sm:justify-between">
          {dataMore.map((inf) => (
            <div
              className="w-[88px] h-full bg-white shrink-0 rounded-lg px-3 py-2"
              key={inf.id}
            >
              <div className="w-full h-full flex flex-col justify-between items-center">
                <span className="text-[11px] flex flex-col justify-center items-center">
                  <p className="font-semibold">{inf.title}</p>
                  {inf.title === "طلوع" ? (
                    <p className="text-xs">
                      <Skeleton variant="text" width={50} height={25} />
                    </p>
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
                    <p>
                      <Skeleton variant="text" width={50} height={25} />
                    </p>
                  </span>
                ) : (
                  <p className="text-[10px] text-[rgb(58,61,66)]">
                    <Skeleton variant="text" width={50} height={25} />
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoaderTemp;
