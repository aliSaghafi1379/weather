import useData from "@/pages/hooks/useData";
import Days from "./days";
import Loader from "./loaders";

const FutureDays = () => {
  const { loading } = useData();
  return !loading ? <Days /> : <Loader />;
};

export default FutureDays;
