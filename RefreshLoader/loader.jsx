import { useState } from "react";
import { TbRefresh } from "react-icons/tb";
import { resetForm } from "../Redux/Actions/PortfolioActions";
import { useDispatch } from "react-redux";
const RefreshLoader = () => {
  const dispatch = useDispatch();
  const [isRotating, setIsRotating] = useState(false);

  const handleRefreshClick = () => {
    setIsRotating(true);
    dispatch(resetForm());
    setTimeout(() => setIsRotating(false), 500);
  };
  return (
    <div>
      <TbRefresh
        className={`text-[#2986FE] cursor-pointer ${
          isRotating ? "animate-spin" : ""
        }`}
        onClick={handleRefreshClick}
      />
    </div>
  );
};

export default RefreshLoader;
