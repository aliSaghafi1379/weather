import useData from "@/pages/hooks/useData";
import Hours from "./hours";
import Loader from "./loaders";

const FutureHours = () => {
  const { loading } = useData();
  return !loading ? <Hours /> : <Loader />;
};

export default FutureHours;
