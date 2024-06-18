import { useEffect, useState } from "react";

const useGeoLocation = () => {
  interface IUser {
    latitude: number;
    longitude: number;
  }
  const [location, setLocation] = useState<IUser>({} as IUser);
  useEffect(() => {
    const success = (position: any) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation({ latitude, longitude });
    };
    // const error = () => {
    //   alert("error");
    // };

    (navigator as any).geolocation
      ? (navigator as any).geolocation.getCurrentPosition(success)
      : alert("no");
  }, [location]);

  return location;
};

export default useGeoLocation;
