import classNames from "classnames";

import "./Button.scss";

interface IProps {
  color: string;
  children: string | React.ReactNode;
  onClick?: any;
  disabled?: any;
  additionalClass?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({
  children,
  additionalClass,
  color,
  type = "button",
  ...rest
}: IProps) => {
  return (
    <button
      type={type}
      className={classNames(color, additionalClass)}
      {...rest}
    >
      {children}
    </button>
  );
};
