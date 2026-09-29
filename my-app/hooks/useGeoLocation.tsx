import { useEffect, useState } from "react";

interface IUser {
  latitude: number;
  longitude: number;
}
const useGeoLocation = () => {
  const [location, setLocation] = useState<IUser>({} as IUser);
  const [err, setErr] = useState<string>();

  useEffect(() => {
    const success = (position: { coords: IUser }) => {
      const latitude: number = position.coords.latitude;
      const longitude : number = position.coords.longitude;
      setLocation({ latitude, longitude });
    };
    const error = () => {
      setErr("دسترسی به موقعیت مکانی قطع شده است");
    };

    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(success, error)
      : setErr("دسترسی به موقعیت مکانی قطع شده است");
  }, [location]);

  return { location, err };
};

export default useGeoLocation;
