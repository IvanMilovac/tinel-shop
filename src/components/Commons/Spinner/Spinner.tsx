import ClipLoader from "react-spinners/ClipLoader";

import "./Spinner.scss";

interface IProps {
  isLoading: boolean;
}

export const Spinner = ({ isLoading }: IProps) => {
  return (
    <div className="loader__container">
      <ClipLoader size={100} color={"#ffce25"} loading={isLoading} />
    </div>
  );
};
