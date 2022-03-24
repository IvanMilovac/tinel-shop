import { CSSProperties } from "react";

import "./Backdrop.scss";

interface IProps {
  show: boolean;
  handleClick: () => void;
  alpha?: number;
}

export const Backdrop = ({ show, handleClick, alpha = 0.5 }: IProps) => {
  const backdropStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: "9990",
    inset: "0",
    backgroundColor: `rgba(0, 0, 0, ${alpha})`,
  };

  return show ? (
    <div className="backdrop" style={backdropStyle} onClick={handleClick}></div>
  ) : null;
};
