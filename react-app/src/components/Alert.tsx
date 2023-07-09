import React, { Children } from "react";

interface Props {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  hover?: string;
  onClick: () => void;
}

const Alert = ({
  children,
  hover = "outline",
  color = "primary",
  onClick,
}: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + hover + "-" + color}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Alert;
